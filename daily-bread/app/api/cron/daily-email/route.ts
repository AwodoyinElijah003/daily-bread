import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import { format } from 'date-fns';

// Serverless execution configuration
export const maxDuration = 60; // 1 min timeout
export const dynamic = 'force-dynamic';

const resend = new Resend(process.env.RESEND_API_KEY);
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

export async function GET(request: Request) {
  try {
    // 1. Verify Vercel Cron Secret (Security)
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return new Response('Unauthorized', { status: 401 });
    }

    const today = format(new Date(), 'yyyy-MM-dd');

    // 2. Fetch Today's Devotional
    const { data: devotional, error: devError } = await supabase
      .from('devotionals')
      .select('*')
      .eq('publish_date', today)
      .single();

    if (!devotional || devError) {
      return NextResponse.json({ error: 'No devotional found for today.' }, { status: 404 });
    }

    // 3. Fetch subscribed users
    const { data: users, error: userError } = await supabase
      .from('profiles')
      .select('email, full_name')
      .eq('wants_daily_email', true);

    if (userError || !users) throw userError;

    // 4. Batch send emails via Resend
    const emails = users.map(user => ({
      from: 'DailyBread <devotional@yourdomain.com>',
      to: [user.email],
      subject: `Morning Devotional: ${devotional.title}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; text-align: center; color: #0A1128;">
          <h2 style="color: #D4AF37; text-transform: uppercase; font-size: 14px;">${devotional.verse_reference}</h2>
          <h1 style="font-size: 24px; margin-bottom: 20px;">"${devotional.verse_text}"</h1>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0;" />
          <p style="font-size: 16px; line-height: 1.6; text-align: left;">${devotional.content_markdown}</p>
          <a href="https://yourdomain.com/devotional/${today}" style="display: inline-block; margin-top: 30px; padding: 12px 24px; background-color: #0A1128; color: #fff; text-decoration: none; border-radius: 50px;">Read Online</a>
        </div>
      `
    }));

    // Send in batches of 100 to respect API limits
    await resend.batch.send(emails);

    return NextResponse.json({ success: true, emailsSent: emails.length });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Cron Error:', error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
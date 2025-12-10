import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log('Payment callback received:', body);

    const {
      exttrid,
      status,
      resp_code,
      resp_desc,
      amount,
    } = body;

    // Handle different transaction statuses
    if (status === 'SUCCESS' || resp_code === '000') {
      console.log(`✅ Payment successful: ${exttrid} - Amount: ${amount}`);
      
      // TODO: Update your database
      // await updateDonationStatus(exttrid, 'completed', body.trans_id);
      
      // TODO: Send confirmation email to donor
      // await sendThankYouEmail(body.customer_number, amount);
      
    } else if (status === 'FAILED' || resp_code !== '000') {
      console.log(`❌ Payment failed: ${exttrid} - Reason: ${resp_desc}`);
      
      // TODO: Update your database
      // await updateDonationStatus(exttrid, 'failed', body.trans_id, resp_desc);
      
    } else {
      console.log(`⏳ Payment pending: ${exttrid}`);
      
      // TODO: Update your database
      // await updateDonationStatus(exttrid, 'pending', body.trans_id);
    }

    // Log full callback for debugging
    console.log('Full callback data:', JSON.stringify(body, null, 2));

    return NextResponse.json({ status: 'success' }, { status: 200 });
    
  } catch (error) {
    console.error('Error handling payment callback:', error);
    return NextResponse.json(
      { status: 'error', message: 'Invalid request' },
      { status: 400 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Payment callback endpoint is active',
    endpoint: '/api/payment/callback'
  });
}
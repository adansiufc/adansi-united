import { NextResponse } from 'next/server';
import { createHmac } from 'crypto';

export async function POST(req: Request) {
  try {
    const clientToken = process.env.ORCHARD_CLIENT_TOKEN;
    const clientSecret = process.env.ORCHARD_CLIENT_SECRET;

    if (!clientToken || !clientSecret) {
      return NextResponse.json({ error: 'Missing API credentials' }, { status: 500 });
    }

    const { amount, network, phoneNumber, currency } = await req.json();

    const isCardPayment = ["VIS", "MAS"].includes(network);

    interface CardRequestBody {
      amount: number;
      callback_url: string;
      exttrid: string;
      reference: string;
      service_id: string;
      landing_page: string;
      ts: string;
      payment_mode: "CRD";
      currency_code?: string;
      currency_val: number;
    }

    interface MomoRequestBody {
      amount: string;
      callback_url: string;
      exttrid: string;
      nw: string;
      service_id: string;
      trans_type: "CTM";
      landing_page_url: string;
      ts: string;
      customer_number?: string;
    }

    let requestBody: CardRequestBody | MomoRequestBody;
    let orchardUrl: string;

    if (isCardPayment) {
      orchardUrl = 'https://payments.anmgw.com/third_party_request';
      requestBody = {
        amount: amount,
        callback_url: "https://adansiunitedfc.com/payment/callback",
        exttrid: `BLF-${Date.now()}`,
        reference: "Adansi United Donation",
        service_id: process.env.ORCHARD_SERVICE_ID || "4904",
        landing_page: "https://adansiunitedfc.com/payment/success",
        ts: new Date().toISOString().slice(0, 19).replace('T', ' '),
        payment_mode: "CRD",
        currency_code: currency || "GHS",
        currency_val: amount,
      };
    } else {
      orchardUrl = 'https://adansiunitedfc.com/api/payment/sendRequest';
      requestBody = {
        amount: amount.toString() || "0.00",
        callback_url: "https://adansiunitedfc.com/payment/callback",
        exttrid: `BLF-${Date.now()}`,
        nw: network || "VIS",
        service_id: "4904",
        trans_type: "CTM",
        landing_page_url: "https://adansiunitedfc.com/payment/success",
        ts: new Date().toISOString().slice(0, 19).replace('T', ' '),
      };
      if (phoneNumber) {
        requestBody.customer_number = phoneNumber;
      }
    }

    const bodyString = JSON.stringify(requestBody);

    const signature = createHmac('sha256', clientSecret)
      .update(bodyString)
      .digest('hex');

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `${clientToken}:${signature}`,
    };

    console.log('Sending payment request:', { network, amount, exttrid: requestBody.exttrid });
    console.log('Full request body:', bodyString);

    const response = await fetch(orchardUrl, {
      method: 'POST',
      headers: headers,
      body: bodyString,
    });

    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers.entries()));

    // Get response as text first
    const responseText = await response.text();
    console.log('Response body:', responseText);

    // Check if response is empty
    if (!responseText || responseText.trim() === '') {
      console.error('Empty response from payment gateway');
      return NextResponse.json({ 
        error: 'Empty response from payment gateway',
        status: response.status 
      }, { status: 500 });
    }

    // Try to parse as JSON
    let data;
    try {
      data = JSON.parse(responseText);
    } catch (parseError) {
      console.error('Failed to parse response as JSON:', parseError);
      return NextResponse.json({ 
        error: 'Invalid response from payment gateway',
        responseText: responseText.substring(0, 200),
        parseError: parseError instanceof Error ? parseError.message : 'Parse failed'
      }, { status: 500 });
    }

    console.log('Orchard response:', data);

    if (isCardPayment && data.redirect_url) {
      return NextResponse.json({ form_url: data.redirect_url });
    }

    return NextResponse.json(data);

  } catch (error) {
    console.error('Error calling Orchard API:', error);
    return NextResponse.json({ 
      error: 'Failed to initiate payment',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
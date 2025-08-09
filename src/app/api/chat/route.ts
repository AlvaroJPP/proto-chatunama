import { NextRequest, NextResponse } from 'next/server';

type OpenRouterResponse = {
  choices: {
    message: {
      content: string;
    };
  }[];
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const message = body.message;

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: "Missing or invalid 'message' in body" }, { status: 400 });
    }

    const API_KEY = process.env.OPENROUTER_API_KEY;
    if (!API_KEY) {
      return NextResponse.json({ error: "Missing OPENROUTER_API_KEY in environment" }, { status: 500 });
    }

    const resp = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: "google/gemma-3n-e4b-it:free",
        messages: [{ role: 'user', content: message }],
      }),
    });

    if (!resp.ok) {
      const text = await resp.text();
      return NextResponse.json({ error: `OpenRouter API error: ${text}` }, { status: resp.status });
    }

    // Aqui fazemos o type assertion
    const json = (await resp.json()) as OpenRouterResponse;

    return NextResponse.json({ response: json.choices[0].message.content });

  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
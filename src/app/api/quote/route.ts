import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, suburb, serviceType, projectSize, timeline } = body;

    if (!name || !email || !phone || !suburb || !serviceType) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // In production: send to CRM / email service
    console.log("Quote request:", { name, email, phone, suburb, serviceType, projectSize, timeline });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

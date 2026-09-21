import { NextResponse } from "next/server";

interface InquiryPayload {
  type: "book-visit" | "contact" | "career";
  name: string;
  email: string;
  phone?: string;
  project?: string;
  date?: string;
  timeSlot?: string;
  tourType?: string;
  message?: string;
  role?: string;
  experience?: string;
}

export async function POST(request: Request) {
  try {
    const body: InquiryPayload = await request.json();

    if (!body.name || (!body.email && !body.phone)) {
      return NextResponse.json(
        {
          success: false,
          error: "Full name and either an email or phone number are required.",
        },
        { status: 400 }
      );
    }

    const referenceId = `EVR-${Math.floor(100000 + Math.random() * 900000)}`;
    const timestamp = new Date().toISOString();

    // Log structured lead record
    console.log(`[EVERON LEAD CAPTURE] [${timestamp}] Ref: ${referenceId}`, {
      type: body.type,
      name: body.name,
      email: body.email,
      phone: body.phone,
      project: body.project || "General",
      slot: body.timeSlot,
      date: body.date,
      tourType: body.tourType,
      role: body.role,
    });

    return NextResponse.json({
      success: true,
      referenceId,
      message:
        body.type === "book-visit"
          ? "Your consultation request has been received. We'll reach out within 2 hours."
          : body.type === "career"
          ? "Your application has been received."
          : "Your message has been received.",
      details: {
        referenceId,
        timestamp,
        client: body.name,
      },
    });
  } catch (err: unknown) {
    console.error("[EVERON INQUIRY ERROR]", err);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to process inquiry submission. Please try again or reach our concierge directly.",
      },
      { status: 500 }
    );
  }
}

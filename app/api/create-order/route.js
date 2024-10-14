import { NextResponse } from "next/server";
import Razorpay from "razorpay";

// Initialize Razorpay instance with secret credentials
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

export async function POST(request) {
  try {
    const { tailorId, date, time } = await request.json(); // Extract data from the request body

    // Create Razorpay order
    const order = await razorpay.orders.create({
      amount: 800 * 100, // Example amount in paisa (INR 800)
      currency: "INR",
      receipt: `receipt_${Math.random().toString(36).substring(7)}`,
    });

    return NextResponse.json({ orderID: order.id }, { status: 200 });
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 }
    );
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        NEXT_PUBLIC_RAZORPAY_ID:process.env.NEXT_PUBLIC_RAZORPAY_ID,
        RAZORPAY_ID:process.env.RAZORPAY_ID,
        RAZORPAY_SECRET:process.env.RAZORPAY_SECRET
    }
};

export default nextConfig;

"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function PaymentCallback() {
  const searchParams = useSearchParams();
  const tx_ref = searchParams.get("tx_ref");
  const status = searchParams.get("status");
  const token = searchParams.get("token") || "cngn";

  const [message, setMessage] = useState("Processing your payment...");
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  // 🔒 Replace with your actual WhatsApp bot number (no "+")
  const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER as string;

  useEffect(() => {
    if (!tx_ref) return;

    const verifyPayment = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/payment/callback`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ tx_ref, status, token }),
          }
        );

        const data = await res.json();
        if (data.success) {
          setIsSuccess(true);
          setMessage("✅ Payment successful! You can return to WhatsApp.");
        } else {
          setIsSuccess(false);
          setMessage("❌ Payment failed. Please try again.");
        }
      } catch (error) {
        setIsSuccess(false);
        setMessage("⚠️ Error confirming payment. Please try again.");
        console.log("Error", error);
      }
    };

    verifyPayment();
  }, [tx_ref, status, token]);

  // ✅ WhatsApp deep link
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}`;

  // ✅ Optional auto-redirect after success
  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        window.location.href = whatsappLink;
      }, 4000); // redirect after 4 seconds
      return () => clearTimeout(timer);
    }
  }, [isSuccess, whatsappLink]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-6">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-semibold mb-4 text-gray-800">
          Payment Status
        </h1>

        <p
          className={`text-lg mb-6 ${
            isSuccess === null
              ? "text-gray-600"
              : isSuccess
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {message}
        </p>

        <p className="text-gray-500 mb-6">
          You can close this window or return to WhatsApp once complete.
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
        >
          💬 Return to WhatsApp
        </a>
      </div>
    </div>
  );
}

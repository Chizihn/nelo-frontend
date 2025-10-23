"use client";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#f0f0f0] border-t-2 border-black px-6 py-20">
      <div className="max-w-4xl mx-auto border-2 border-black bg-white p-10">
        <h1 className="text-4xl md:text-5xl font-bebas font-bold uppercase mb-6">
          Privacy Policy
        </h1>
        <p className="font-space-grotesk text-black/80 mb-6">
          At <strong>GetTrade</strong>, we respect your privacy and are
          committed to protecting your personal information. This Privacy Policy
          explains how we collect, use, and safeguard your data when you use our
          services.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-bebas uppercase">
            1. Information We Collect
          </h2>
          <p className="font-space-grotesk text-black/80">
            We collect personal information that you provide directly to us,
            such as your name, phone number, and payment details when you use
            our WhatsApp or web services. We may also collect usage and device
            data for analytics and performance improvements.
          </p>

          <h2 className="text-2xl font-bebas uppercase mt-8">
            2. How We Use Your Information
          </h2>
          <p className="font-space-grotesk text-black/80">
            Your data helps us provide better services, process transactions,
            communicate with you, and enhance security. We never sell your data
            to third parties.
          </p>

          <h2 className="text-2xl font-bebas uppercase mt-8">
            3. Data Protection
          </h2>
          <p className="font-space-grotesk text-black/80">
            We implement strong security measures and encryption to protect your
            data from unauthorized access or misuse.
          </p>

          <h2 className="text-2xl font-bebas uppercase mt-8">4. Contact Us</h2>
          <p className="font-space-grotesk text-black/80">
            If you have any questions about our Privacy Policy, reach out to us
            at <span className="underline">support@gettrade.com</span>.
          </p>
        </section>
      </div>
    </main>
  );
}

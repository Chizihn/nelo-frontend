"use client";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[#f0f0f0] border-t-2 border-black px-6 py-20">
      <div className="max-w-4xl mx-auto border-2 border-black bg-white p-10">
        <h1 className="text-4xl md:text-5xl font-bebas font-bold uppercase mb-6">
          Terms of Service
        </h1>
        <p className="font-space-grotesk text-black/80 mb-6">
          Welcome to <strong>GetTrade</strong>. By accessing or using our
          website, WhatsApp bot, or any related services, you agree to be bound
          by these Terms of Service.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-bebas uppercase">1. Use of Service</h2>
          <p className="font-space-grotesk text-black/80">
            You must be at least 18 years old to use our services. You agree to
            use the platform lawfully and not for fraudulent or illegal
            activities.
          </p>

          <h2 className="text-2xl font-bebas uppercase mt-8">
            2. Transactions
          </h2>
          <p className="font-space-grotesk text-black/80">
            All transactions made through GetTrade are processed securely. Once
            confirmed, transactions are final and cannot be reversed.
          </p>

          <h2 className="text-2xl font-bebas uppercase mt-8">
            3. Limitation of Liability
          </h2>
          <p className="font-space-grotesk text-black/80">
            GetTrade is not liable for losses resulting from unauthorized
            access, network failures, or third-party service issues.
          </p>

          <h2 className="text-2xl font-bebas uppercase mt-8">
            4. Modifications
          </h2>
          <p className="font-space-grotesk text-black/80">
            We may update these Terms periodically. Continued use of our service
            after changes constitutes acceptance of the new terms.
          </p>

          <h2 className="text-2xl font-bebas uppercase mt-8">5. Contact Us</h2>
          <p className="font-space-grotesk text-black/80">
            If you have any questions, contact us at{" "}
            <span className="underline">support@gettrade.com</span>.
          </p>
        </section>
      </div>
    </main>
  );
}

import CryptoSection from "@/components/CryptoSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <HowItWorks />
      <CryptoSection />
      <FAQ />
      <Footer />
    </main>
  );
}

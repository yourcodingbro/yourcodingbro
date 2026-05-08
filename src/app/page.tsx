import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import WhyUs from "@/components/sections/WhyUs";
import SocialProof from "@/components/sections/SocialProof";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <WhyUs />
        <SocialProof />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

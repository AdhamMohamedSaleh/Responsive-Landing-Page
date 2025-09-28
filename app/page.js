import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Image from "next/image";

function Page() {
  return (
    <div >
      <Image src="/bg-tablet-pattern.svg" width={1440} height={1440} className="fixed left-1/2 -top-20 lg:-top-10 lg:-translate-y-1/2 lg:-translate-x-1/3 -translate-y-1/10 -translate-x-1/4 -z-10"/>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Page;
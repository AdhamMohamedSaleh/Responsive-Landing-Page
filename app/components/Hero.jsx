import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <section id="hero">
      
      <div className="flex container flex-col-reverse lg:flex-row items-center mx-auto space-y-0 mt-10 px-6">
        
        <div className="flex flex-col items-center lg:items-baseline lg:w-1/2 mb-32 space-y-12">
          <h1 className="max-w-lg text-4xl font-bold text-center lg:text-5xl lg:text-left">Bring everyone together to build better products.</h1>
          <p className="text-center max-w-sm text-gray-500 lg:text-left">Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.div 
          </p>
          <div className="flex justify-center lg:justify-start">
            <Link href="/get-started" className="btn">Get Started</Link>
          </div>
        </div>

        <div className="lg:w-1/2">
          <Image alt="Hero Image" src="/illustration-intro.svg" width={500} height={400} />
        </div>

      </div>
      
    </section>
  );
};

export default Hero;
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Target } from "lucide-react";
import { SectionWrapper } from "@/components/section-wrapper";

export default function HeroSection() {
  return (
    <SectionWrapper id="hero" className="bg-background pt-24 md:pt-32 lg:pt-40 text-center">
      <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000 ease-out">
        <div className="mb-8 flex justify-center">
          <Target className="h-16 w-16 text-primary sm:h-20 sm:w-20 md:h-24 md:w-24" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
          Unlock Stablecoin Liquidity
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-foreground/80 sm:text-xl">
          Archer empowers financial institutions with secure, efficient, and scalable access to the world of stablecoins.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg">
            <Link href="#contact">
              Request a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#services">Learn More</Link>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}

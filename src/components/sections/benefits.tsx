import { SectionWrapper } from "@/components/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, TrendingUp, Zap } from "lucide-react";

const benefits = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Unparalleled Security",
    description: "State-of-the-art security protocols and compliance features to protect your assets and transactions.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "Optimized Liquidity",
    description: "Access deep liquidity pools for efficient stablecoin conversions, payments, and treasury management.",
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Streamlined Operations",
    description: "Simplify complex processes with our intuitive platform, reducing operational overhead and enhancing efficiency.",
  },
];

export default function BenefitsSection() {
  return (
    <SectionWrapper id="benefits" className="bg-background">
      <div className="text-center animate-in fade-in slide-in-from-bottom-12 duration-700 ease-out">
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          The Archer Advantage
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg leading-relaxed text-foreground/80">
          Discover why leading financial institutions choose Archer for their stablecoin liquidity needs.
        </p>
      </div>
      <div className="mt-16 grid gap-8 md:grid-cols-3 animate-in fade-in slide-in-from-bottom-16 duration-1000 ease-out">
        {benefits.map((benefit, index) => (
          <Card key={benefit.title} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 ease-out" style={{ animationDelay: `${index * 100}ms`}}>
            <CardHeader className="items-center text-center">
              <div className="mb-3 flex items-center justify-center rounded-full bg-primary/10 p-3">
                {benefit.icon}
              </div>
              <CardTitle className="text-xl">{benefit.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-base text-foreground/70">{benefit.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}

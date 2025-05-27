import { SectionWrapper } from "@/components/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coins, Landmark, Network } from "lucide-react";

const serviceFeatures = [
  {
    icon: <Coins className="h-8 w-8 text-primary" />,
    title: "Diverse Stablecoin Pools",
    description: "Access a wide range of stablecoins through our aggregated liquidity pools, ensuring optimal rates and availability.",
  },
  {
    icon: <Landmark className="h-8 w-8 text-primary" />,
    title: "Institutional-Grade Infrastructure",
    description: "Built for financial institutions, our platform offers robust security, compliance tools, and dedicated support.",
  },
  {
    icon: <Network className="h-8 w-8 text-primary" />,
    title: "Seamless Integration",
    description: "Integrate Archer's liquidity solutions effortlessly into your existing systems with our developer-friendly APIs.",
  },
];

export default function ServicesSection() {
  return (
    <SectionWrapper id="services" className="bg-card">
      <div className="text-center animate-in fade-in slide-in-from-bottom-12 duration-700 ease-out">
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          How Archer Works
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg leading-relaxed text-foreground/80">
          Archer provides a comprehensive platform for financial institutions to seamlessly integrate and manage stablecoin liquidity. We offer direct access to diverse stablecoin pools, advanced risk management tools, and real-time transaction monitoring, ensuring operational excellence and regulatory compliance.
        </p>
      </div>
      <div className="mt-16 grid gap-8 md:grid-cols-3 animate-in fade-in slide-in-from-bottom-16 duration-1000 ease-out">
        {serviceFeatures.map((feature, index) => (
          <Card 
            key={feature.title} 
            className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 ease-out"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardHeader className="items-center text-center">
              <div className="mb-3 flex items-center justify-center rounded-full bg-primary/10 p-3">
                {feature.icon}
              </div>
              <CardTitle className="text-xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-base text-foreground/70">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}

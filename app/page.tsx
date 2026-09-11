import GhostFibers from "@/components/reactbits/GhostFibers";
import { FinalCTA } from "@/components/arcflow/final-cta";
import { Footer } from "@/components/layout/footer";
import { UseCasesSection } from "@/components/arcflow/use-cases-section";
import { PricingSection } from "@/components/arcflow/pricing-section";
import { FAQSection } from "@/components/arcflow/faq-section";
import { WorkflowDemo } from "@/components/arcflow/workflow-demo";
import { IntegrationsSection } from "@/components/arcflow/integrations-section";
import { FeaturesSection } from "@/components/arcflow/features-section";
import { ProductPreview } from "@/components/arcflow/product-preview";
import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/arcflow/hero";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09090B]">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-35">
        <GhostFibers
          lineColor="#5B7CFF"
          glowColor="#8EA2FF"
          speed={0.12}
          scale={2.4}
          rotationSpeed={0.08}
          layers={3}
          glowIntensity={0.8}
          brightness={1.2}
          blueBoost={1.1}
          vignette={0.95}
          grain={0.02}
          fps={30}
        />
      </div>
  
      <div className="relative z-10">
      <Navbar />

      <Hero />

      <ProductPreview />

      <FeaturesSection />

    <WorkflowDemo />

    <IntegrationsSection />

   <UseCasesSection />

  <PricingSection />

  <FAQSection />

  <FinalCTA />

<Footer />
      </div>
    </main>
  );
}
import Link from "next/link";
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
import { Container } from "@/components/layout/container";
import { WorkflowPreview } from "@/components/arcflow/workflow-preview";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090B]">
      <Navbar />

      <section className="relative overflow-hidden">
        <Container>
          <div className="mx-auto flex max-w-4xl flex-col items-center px-4 pb-20 pt-24 text-center sm:pt-32 lg:pt-40">
            
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 text-sm text-zinc-400">
              Workflow automation for modern teams
            </div>

            {/* Headline */}
            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-zinc-100 sm:text-6xl lg:text-7xl">
              Automate the work between your tools.
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
              Connect the tools your team already uses and let Arcflow
              automate the repetitive work in between. Build workflows that
              move information, trigger actions, and keep your team moving.
            </p>

            {/* CTA buttons */}
            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
              
              <Link href="/signup" className="group inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-zinc-100 px-5 text-sm font-medium text-zinc-950 transition-colors hover:bg-white">
                Start building free
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
              <a href="#workflow"
  className="inline-flex h-11 items-center justify-center rounded-lg border border-white/[0.1] px-5 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/[0.04] hover:text-zinc-100"
>
  See how it works
</a>
            </div>
            <WorkflowPreview />
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
        </Container>
      </section>
    </main>
  );
}
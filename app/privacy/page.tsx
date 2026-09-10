import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#09090B]">
      <Navbar />

      <section className="border-b border-white/[0.06]">
        <Container>
          <div className="mx-auto max-w-3xl px-4 pb-20 pt-24 sm:pt-32">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-200"
            >
              <ArrowLeft size={14} />
              Back to Arcflow
            </Link>

            <p className="mt-10 text-sm font-medium text-[#8EA2FF]">
              Legal
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-zinc-100 sm:text-5xl">
              Privacy Policy
            </h1>

            <p className="mt-5 text-sm text-zinc-600">
              Last updated September 2026
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <article className="mx-auto max-w-3xl space-y-12 text-sm leading-7 text-zinc-500">
            <div>
              <h2 className="text-xl font-medium text-zinc-100">
                Information we collect
              </h2>

              <p className="mt-4">
                Arcflow may collect information you provide when creating an
                account, using workflows, contacting our team, or interacting
                with the product.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-zinc-100">
                How we use information
              </h2>

              <p className="mt-4">
                Information may be used to provide and improve the service,
                operate workflows, communicate with users, and maintain the
                security and reliability of Arcflow.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-zinc-100">
                Data security
              </h2>

              <p className="mt-4">
                We take reasonable measures to protect information handled by
                the service and continuously work to improve the security of
                our systems.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-zinc-100">
                Your choices
              </h2>

              <p className="mt-4">
                You may contact Arcflow with questions about your information,
                account, or privacy preferences.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-zinc-100">
                Contact
              </h2>

              <p className="mt-4">
                For privacy-related questions, contact us at{" "}
                <a
                  href="mailto:privacy@arcflow.example"
                  className="text-zinc-300 underline decoration-white/[0.15] underline-offset-4 hover:text-zinc-100"
                >
                  privacy@arcflow.example
                </a>
                .
              </p>
            </div>
          </article>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
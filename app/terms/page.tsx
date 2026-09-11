
import Link from "next/link";

import { ArrowLeft } from "lucide-react";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#09090B]/30">
      <Navbar />

      <section className="border-b border-white/[0.06] bg-[#09090B]/20">
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
              Terms of Service
            </h1>

            <p className="mt-5 text-sm text-zinc-600">
              Last updated September 2026
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[#09090B]/10 py-20 sm:py-28">
        <Container>
          <article className="mx-auto max-w-3xl space-y-12 text-sm leading-7 text-zinc-500">
            <div>
              <h2 className="text-xl font-medium text-zinc-100">
                Using Arcflow
              </h2>

              <p className="mt-4">
                By using Arcflow, you agree to use the service responsibly and
                in accordance with applicable laws. You are responsible for
                activity performed through your account.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-zinc-100">
                Your account
              </h2>

              <p className="mt-4">
                You are responsible for keeping your account information
                accurate and protecting access to your account. Do not share
                credentials or use another person's account without
                authorization.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-zinc-100">
                Your data
              </h2>

              <p className="mt-4">
                You retain ownership of the information and content you
                provide to Arcflow. You grant Arcflow the permissions
                reasonably necessary to provide the service and execute the
                workflows you configure.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-zinc-100">
                Acceptable use
              </h2>

              <p className="mt-4">
                You may not use Arcflow to abuse, disrupt, compromise, or
                interfere with the service or systems connected to it. You are
                also responsible for ensuring that your workflows comply with
                the terms and policies of the services you connect.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-zinc-100">
                Service availability
              </h2>

              <p className="mt-4">
                We aim to keep Arcflow reliable and available, but no online
                service can guarantee uninterrupted operation. Features may
                change as the product evolves.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-zinc-100">
                Contact
              </h2>

              <p className="mt-4">
                Questions about these terms can be sent to{" "}
                <a
                  href="mailto:hello@arcflow.example"
                  className="text-zinc-300 underline decoration-white/[0.15] underline-offset-4 hover:text-zinc-100"
                >
                  hello@arcflow.example
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


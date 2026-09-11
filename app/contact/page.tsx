
import Link from "next/link";

import { ArrowRight, Mail, MessageSquare } from "lucide-react";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#09090B]/30">
      <Navbar />

      <section className="border-b border-white/[0.06] bg-[#09090B]/20">
        <Container>
          <div className="mx-auto max-w-4xl px-4 pb-24 pt-24 text-center sm:pt-32 lg:pb-32 lg:pt-40">
            <p className="text-sm font-medium text-[#8EA2FF]">
              Contact Arcflow
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-zinc-100 sm:text-6xl">
              Let's build better workflows.
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
              Have a question, a workflow in mind, or want to talk about how
              Arcflow could fit your team? We'd love to hear from you.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[#09090B]/10 py-24 sm:py-32">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/[0.08] bg-[#0F1012]/60 p-7 backdrop-blur-sm sm:p-10">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03]">
                <MessageSquare size={19} className="text-[#8EA2FF]" />
              </div>

              <h2 className="mt-7 text-2xl font-semibold tracking-[-0.03em] text-zinc-100">
                Talk to our team
              </h2>

              <p className="mt-4 max-w-md text-sm leading-7 text-zinc-500">
                Tell us what you're trying to automate and we'll help you
                figure out where Arcflow can fit.
              </p>

              <Link
                href="mailto:hello@arcflow.example"
                className="group mt-8 inline-flex h-11 items-center gap-2 rounded-lg bg-zinc-100 px-5 text-sm font-medium text-zinc-950 transition-colors hover:bg-white"
              >
                Send us a message

                <ArrowRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-[#0F1012]/60 p-7 backdrop-blur-sm sm:p-10">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03]">
                <Mail size={19} className="text-zinc-400" />
              </div>

              <h2 className="mt-7 text-2xl font-semibold tracking-[-0.03em] text-zinc-100">
                Email us
              </h2>

              <p className="mt-4 max-w-md text-sm leading-7 text-zinc-500">
                For general questions, partnerships, or anything else, reach
                out directly.
              </p>

              <a
                href="mailto:hello@arcflow.example"
                className="mt-8 inline-flex text-sm text-zinc-300 underline decoration-white/[0.15] underline-offset-4 transition-colors hover:text-zinc-100"
              >
                hello@arcflow.example
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-white/[0.06] bg-[#09090B]/20 py-24 sm:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium text-[#8EA2FF]">
              Already know what you want?
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl">
              Start building your first workflow.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-zinc-500">
              Start with one repetitive process and see how much work you can
              remove.
            </p>

            <Link
              href="/signup"
              className="group mt-8 inline-flex h-11 items-center gap-2 rounded-lg bg-zinc-100 px-5 text-sm font-medium text-zinc-950 transition-colors hover:bg-white"
            >
              Start building free

              <ArrowRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}

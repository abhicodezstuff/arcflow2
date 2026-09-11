"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

import { Container } from "@/components/layout/container";
import { WorkflowPreview } from "@/components/arcflow/workflow-preview";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#09090B]/30">
      <div className="pointer-events-none absolute inset-0 -z-0 opacity-30">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[-180px] h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-[#5B7CFF]/[0.08] blur-[120px]"
        />
      </div>

      <Container>
        <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 pb-20 pt-24 text-center sm:pt-32 lg:pt-40">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-6 inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-sm text-zinc-400 backdrop-blur-sm"
          >
            Workflow automation for modern teams
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
            className="max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-zinc-100 sm:text-6xl lg:text-7xl"
          >
            Automate the work between your tools.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease: "easeOut" }}
            className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8"
          >
            Connect the tools your team already uses and let Arcflow
            automate the repetitive work in between. Build workflows that
            move information, trigger actions, and keep your team moving.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24, ease: "easeOut" }}
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
          >
            <Link
              href="/signup"
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-zinc-100 px-5 text-sm font-medium text-zinc-950 transition-colors hover:bg-white"
            >
              Start building free
              <ArrowRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>

            <a
              href="#workflow"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-white/[0.1] bg-white/[0.02] px-5 text-sm font-medium text-zinc-300 backdrop-blur-sm transition-colors hover:bg-white/[0.04] hover:text-zinc-100"
            >
              See how it works
            </a>
          </motion.div>

          <WorkflowPreview />
        </div>
      </Container>
    </section>
  );
}
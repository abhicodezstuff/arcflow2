"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Arcflow?",
    answer:
      "Arcflow is a workflow automation platform that connects the tools your team already uses and automates repetitive work between them.",
  },
  {
    question: "Do I need to know how to code?",
    answer:
      "No. Arcflow is designed around visual workflows, so most automations can be created by connecting triggers, actions, and decisions without writing code.",
  },
  {
    question: "What can I automate?",
    answer:
      "You can automate processes across sales, marketing, operations, customer workflows, and data. If a process has a trigger and a predictable outcome, it can often be automated.",
  },
  {
    question: "Can Arcflow use AI?",
    answer:
      "Yes. AI actions can analyze information, classify incoming data, extract useful details, and help determine what should happen next in a workflow.",
  },
  {
    question: "Which tools can I connect?",
    answer:
      "Arcflow can connect with common business tools such as CRMs, email platforms, communication tools, databases, documentation platforms, and custom systems through webhooks.",
  },
  {
    question: "Can I try Arcflow for free?",
    answer:
      "Yes. The Starter plan is free, and paid plans include a 14-day free trial so you can build and test workflows before committing.",
  },
];

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/[0.06] last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-medium text-zinc-200 sm:text-base">
          {question}
        </span>

        <ChevronDown
          size={18}
          className={`shrink-0 text-zinc-500 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-200 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl pb-6 pr-10 text-sm leading-6 text-zinc-500">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FAQSection() {
  return (
    <section className="border-t border-white/[0.06] bg-[#09090B]/30 py-20 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="text-sm font-medium text-[#8EA2FF]">FAQ</p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl">
              Questions, answered.
            </h2>

            <p className="mt-5 max-w-md text-base leading-7 text-zinc-500">
              Everything you need to know before building your first
              workflow.
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-[#0F1012]/60 px-6 backdrop-blur-sm sm:px-8">
            {faqs.map((faq) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
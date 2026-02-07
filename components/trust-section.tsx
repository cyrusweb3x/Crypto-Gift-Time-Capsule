"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Is my crypto safe?",
    answer: "Yes. Your funds are stored in a smart contract on the Base blockchain. Neither we nor anyone else can access them. Only the recipient wallet can claim the funds after the unlock date."
  },
  {
    question: "Can I cancel a gift?",
    answer: "No. Once a Time Capsule is created and funds are locked, the action is irreversible. This guarantees the recipient that the funds are truly theirs."
  },
  {
    question: "How does the Time Lock work?",
    answer: "We use the blockchain's block timestamp. It's mathematically impossible to unlock the funds before the set date. Not even we can bypass it."
  },
  {
    question: "What if I lose my wallet?",
    answer: "Since this is decentralized, we cannot recover lost wallets. However, the funds remain safe in the contract until the recipient (with the correct wallet) claims them."
  },
];

export function TrustSection() {
  return (
    <section className="mt-12">
      <div className="flex items-center gap-2 mb-6 justify-center">
        <HelpCircle className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-bold text-foreground">How it Works</h3>
      </div>
      
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} question={faq.question} answer={faq.answer} />
        ))}
      </div>

      <div className="mt-8 text-center px-4">
        <p className="text-xs text-muted-foreground leading-relaxed">
          Our smart contracts are open-source and verified on BaseScan. 
          You can interact directly with the contract if our website goes down.
        </p>
      </div>
    </section>
  );
}

function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl bg-secondary/30 border border-transparent hover:border-primary/20 transition-colors">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-4 text-left font-semibold text-foreground"
      >
        <span className="text-sm">{question}</span>
        <ChevronDown
          className={cn("h-4 w-4 text-muted-foreground transition-transform duration-200", isOpen && "rotate-180")}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-4 pb-4 pt-0 text-sm text-muted-foreground leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
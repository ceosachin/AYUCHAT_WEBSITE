"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    question: "Why was my WhatsApp template rejected by Meta?",
    answer: (
      <div className="text-sm text-gray-600 space-y-3 mt-3">
        <p>Template rejections typically happen for these reasons:</p>

        <ol className="list-decimal pl-5 space-y-2">
          <li><b>Medical/health claims:</b> Templates making health claims need disclaimers</li>
          <li><b>Category mismatch:</b> Promotional message submitted as Utility</li>
          <li><b>Variable errors:</b> Incorrect format (use {"{{1}}"} not {"{name}"})</li>
          <li><b>URL shorteners:</b> Bit.ly links are not allowed</li>
          <li><b>Missing opt-out:</b> Must include unsubscribe option</li>
        </ol>

        <p>
          Fix the issue and resubmit from Templates section.
        </p>
      </div>
    ),
  },
  {
    question: "Why is my WhatsApp quality rating dropping?",
    answer: "Low engagement or spam complaints can reduce rating.",
  },
  {
    question: "How many messages can I send per day?",
    answer: "Depends on your WhatsApp messaging tier.",
  },
  {
    question: "What are Meta's per-message charges and how are they billed?",
    answer: "Charges depend on conversation category.",
  },
  {
    question: "How do I manage multiple businesses from one AyuChat account?",
    answer: "You can add multiple workspaces inside your account.",
  },
  {
    question: "How do I cancel my AyuChat subscription?",
    answer: "Go to Billing section and cancel subscription.",
  },
  {
    question: "My chatbot stopped responding - what should I check?",
    answer: "Check triggers, flows, and API connections.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mt-10">
      
      {/* HEADER */}
      <h2 className="text-xl md:text-2xl font-semibold mb-6">
        Frequently Asked Questions
      </h2>

      {/* LIST */}
      <div className="divide-y">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;

          return (
            <div key={i} className="py-5">

              {/* QUESTION */}
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() =>
                  setOpenIndex(isOpen ? null : i)
                }
              >
                <p className="font-medium text-gray-900">
                  {faq.question}
                </p>

                {/* ICON */}
                <div
                  className={`w-7 h-7 flex items-center justify-center rounded-full border border-gray-200 transition ${
                    isOpen
                      ? "bg-[#0B6B50] text-white border-[#0B6B50]"
                      : "text-gray-600 border-gray-300"
                  }`}
                >
                  {isOpen ? <X size={14} /> : <Plus size={14} />}
                </div>
              </div>

              {/* ANSWER */}
              {isOpen && (
                <div className="mt-4 pr-10 animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
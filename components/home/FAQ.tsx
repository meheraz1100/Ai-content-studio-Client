import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is AI Content Studio?",
    answer:
      "AI Content Studio is an AI-powered platform that helps you generate blogs, captions, emails, and summaries in seconds.",
  },
  {
    question: "Which AI model do you use?",
    answer:
      "We integrate with modern AI models such as Gemini to generate high-quality content.",
  },
  {
    question: "Is it free to use?",
    answer:
      "Yes. You can use the basic features for free. Premium features can be added later.",
  },
  {
    question: "Can I use generated content commercially?",
    answer:
      "Yes, you can use the generated content for personal and commercial purposes after reviewing it.",
  },
];

export default function FAQ() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
        <p className="mt-4 text-gray-600">
          Find answers to the most common questions.
        </p>
      </div>

      <Accordion type="single" collapsible>
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
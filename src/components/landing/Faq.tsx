
'use client';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: "What is SkillXpress?",
    answer: "SkillXpress is a platform that uses AI to instantly connect you with verified experts for any micro-task, from coding and design to marketing and tutoring. You can book them in real-time or schedule for later.",
  },
  {
    question: "How are experts verified?",
    answer: "Every expert undergoes a rigorous verification process that includes skill assessments, portfolio reviews, and identity verification to ensure you're working with top professionals.",
  },
  {
    question: "What if I'm not satisfied with the expert?",
    answer: "We strive for 100% satisfaction. If you're not happy with the service, you can raise a dispute through our resolution center, and our support team will mediate to ensure a fair outcome.",
  },
    {
    question: "How does pricing work?",
    answer: "Experts set their own hourly rates. SkillXpress charges a small platform fee on top of the expert's rate. We also offer subscription plans for customers and premium listing options for providers. See our Pricing page for full details.",
  },
  {
    question: "Can I use SkillXpress for business needs?",
    answer: "Absolutely! Our Corporate plan offers bulk booking discounts, dedicated account managers, and custom expert sourcing to help businesses scale their teams efficiently. Visit our Corporate page for more information.",
  },
];

const Faq = () => {
  return (
    <div className="container mx-auto px-6 max-w-4xl">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          Have questions? We have answers.
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full mt-12">
        {faqs.map((faq, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger className="text-lg font-semibold text-left">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;

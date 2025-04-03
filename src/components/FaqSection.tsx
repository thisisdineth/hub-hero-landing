
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "What courses are offered at the ICT Learning Hub?",
      answer: "Our Learning Hub offers a wide range of ICT courses including Web Development, Database Management, Networking, Cloud Computing, Programming, Mobile App Development, Cybersecurity, and Data Science. Each course is designed to provide both theoretical knowledge and practical skills."
    },
    {
      question: "Are there prerequisites for enrolling in courses?",
      answer: "Prerequisites vary by course. Entry-level courses typically don't require prior knowledge, while advanced courses may need some basic understanding of related concepts. Each course page clearly mentions any prerequisites needed. We also offer foundation courses to help build necessary skills."
    },
    {
      question: "How are the courses delivered?",
      answer: "Our courses are delivered through a blend of interactive video lectures, live webinars, hands-on projects, coding exercises, and peer collaboration. Our learning platform provides access to course materials, quizzes, assignments, and community forums where you can interact with instructors and fellow learners."
    },
    {
      question: "Do you offer certifications upon course completion?",
      answer: "Yes, upon successful completion of a course, you'll receive an industry-recognized certification from ICT Learning Hub. Many of our advanced courses also prepare you for global certifications like CompTIA, Cisco, AWS, Microsoft, and Google certifications."
    },
    {
      question: "Can I access course materials after completion?",
      answer: "Absolutely! Once enrolled, you'll have lifetime access to the course materials, including any future updates. This allows you to revisit concepts, stay current with evolving technologies, and continue your learning journey at your own pace."
    },
    {
      question: "Is there job placement assistance available?",
      answer: "Yes, we offer career services including resume building, interview preparation, and connections with industry partners. Our Career Development Center provides guidance on job searches, and we regularly host virtual job fairs and networking events with potential employers."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our courses, teaching methodology, and student support services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm p-6">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

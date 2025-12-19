"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "What are the admission requirements?",
      answer:
        "To enroll in our program, you need either a GED or High School diploma, and basic computer skills (ability to use email, browse the internet, and navigate basic software). No prior AI or technical experience is required - we'll teach you everything you need to know!",
    },
    {
      question: "How long is the program?",
      answer:
        "The program is 24 hours of instruction total. We offer flexible scheduling options including self-paced learning, evening sessions, and weekend options. Most students complete the program within 4-8 weeks, but you can move at your own pace to fit your schedule.",
    },
    {
      question: "Is this program accredited?",
      answer:
        "This is a certificate program that is TWC (Texas Workforce Commission) exempt under the 24-hour rule. While we are not a traditional accredited institution, we are listed on the Eligible Training Provider List (ETPL) and our program meets all TWC requirements for workforce development training.",
    },
    {
      question: "What's included in the $8,000 tuition?",
      answer:
        "Your tuition covers everything you need for success: all training materials and coursework, industry-standard AI tools and software, guaranteed interview pathway with BrandVoice, ongoing support and mentorship throughout the program, and most importantly - free additional training and support until you secure employment. No hidden fees!",
    },
    {
      question: "Can I use WIOA funding to pay for this program?",
      answer:
        "Yes! Our program is ETPL (Eligible Training Provider List) eligible, which means you can use WIOA (Workforce Innovation and Opportunity Act) funding to cover tuition costs. Contact your local workforce board to learn more about eligibility and the application process. We're happy to work with workforce counselors to facilitate your enrollment.",
    },
    {
      question: "What jobs can I get after completing the program?",
      answer:
        "Graduates are prepared for careers as AI Content Specialists, AI Video Producers, Social Media Content Creators, Digital Marketing Specialists, and AI-Enhanced Multimedia Producers. These positions fall under SOC code 15-1232 (Computer User Support Specialists) and typically offer competitive salaries with growing demand in the marketplace.",
    },
    {
      question: "Is there a refund policy?",
      answer:
        "Yes! We offer a 3-day full refund guarantee. If you're not satisfied with the program within the first 3 days of enrollment, you can request a complete refund - no questions asked. We're confident you'll love the program, but we want you to feel secure in your investment.",
    },
    {
      question: "Is the program online or in-person?",
      answer:
        "The program is primarily delivered online, allowing you to learn from anywhere with internet access. However, we do offer in-person support at our Houston locations (11139 Homestead Rd and 9132 Pembrook St, Houston TX 77016) for students who prefer face-to-face assistance or hands-on help.",
    },
    {
      question: "What is the guaranteed interview pathway?",
      answer:
        "Through our exclusive partnership with BrandVoice, every program graduate receives a guaranteed interview opportunity. BrandVoice is actively seeking trained AI content specialists, and upon successful completion of our program, you'll have a direct pathway to interview for open positions. This significantly increases your chances of employment immediately after graduation.",
    },
    {
      question: "What happens after I complete the program?",
      answer:
        "Your success is our priority! After completing the 24-hour program, you receive free additional training, resources, and support until you secure employment. This includes updated curriculum as AI tools evolve, one-on-one mentorship and career coaching, resume and interview preparation, and continued access to our job placement assistance. We don't consider you a graduate until you're employed!",
    },
  ];

  return (
    <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Got questions? We've got answers. Find everything you need to know about our program.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-2">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-gray-200 rounded-lg px-6 bg-white hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Additional Help */}
        <div className="mt-12 text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-gray-700 mb-2">
            Still have questions?
          </p>
          <p className="text-sm text-gray-600 mb-4">
            We're here to help! Reach out to our team and we'll get back to you promptly.
          </p>
          <a
            href="#apply"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";

import { CheckCircle2, Clock, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EnrollmentForm } from "@/components/marketing/forms/EnrollmentForm";

export default function FinalCTASection() {
  const keyBenefits = [
    {
      icon: CheckCircle2,
      text: "24-hour certificate program with flexible scheduling",
    },
    {
      icon: CheckCircle2,
      text: "$8,000 tuition - WIOA funding eligible",
    },
    {
      icon: CheckCircle2,
      text: "Guaranteed interview pathway with BrandVoice",
    },
    {
      icon: CheckCircle2,
      text: "Free training until you're employed",
    },
    {
      icon: CheckCircle2,
      text: "3-day full refund guarantee",
    },
    {
      icon: CheckCircle2,
      text: "Online learning with in-person support available",
    },
  ];

  return (
    <section id="apply" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-white to-primary/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="default" className="mb-4">
            <Clock className="w-3 h-3" />
            Limited Seats Available
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Start Your AI Career Today
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Join the next generation of AI content specialists. Transform your career in just 24 hours
            of training with guaranteed interview opportunities.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Benefits & Urgency */}
          <div className="space-y-6">
            {/* Key Benefits Recap */}
            <Card className="border-2 border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Why Choose the Institute for AI Innovation?
                </h3>
                <div className="space-y-3">
                  {keyBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0">
                        <benefit.icon className="w-5 h-5 text-primary mt-0.5" />
                      </div>
                      <p className="text-gray-700">{benefit.text}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Urgency Messaging */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200 rounded-lg p-6">
              <div className="flex items-start gap-3 mb-3">
                <Clock className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">
                    Don't Miss This Opportunity
                  </h4>
                  <p className="text-gray-700 mb-3">
                    The AI industry is growing rapidly, and trained professionals are in high demand.
                    Our next cohort is filling up fast.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div>
                      Next cohort starts soon
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div>
                      Limited enrollment to ensure quality
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div>
                      Secure your spot today
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Success Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                <div className="text-3xl font-bold text-primary mb-1">24</div>
                <div className="text-xs text-gray-600">Hours to Career-Ready</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                <div className="text-3xl font-bold text-primary mb-1">100%</div>
                <div className="text-xs text-gray-600">Interview Guarantee</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                <div className="text-3xl font-bold text-primary mb-1">$0</div>
                <div className="text-xs text-gray-600">With WIOA Funding</div>
              </div>
            </div>

            {/* Alternative Contact Section */}
            <Card className="bg-gray-50 border-gray-200">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Have questions first?</h4>
                <p className="text-sm text-gray-600 mb-4">
                  We're here to help! Reach out to our admissions team to learn more about the
                  program, financial aid options, and how to get started.
                </p>
                <div className="space-y-2">
                  <a
                    href="mailto:admissions@instituteforaiinnovation.org"
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <Mail className="w-4 h-4" />
                    admissions@instituteforaiinnovation.org
                  </a>
                  <a
                    href="tel:+17139034699"
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <Phone className="w-4 h-4" />
                    (713) 903-4699
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Enrollment Form */}
          <div className="lg:sticky lg:top-24">
            <EnrollmentForm />

            {/* Additional CTA Button */}
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600 mb-3">
                Prefer to speak with someone directly?
              </p>
              <Button variant="outline" size="lg" className="w-full" asChild>
                <a href="tel:+17139034699">
                  <Phone className="w-5 h-5" />
                  Call (713) 903-4699
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Trust Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>TWC Exempt</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>ETPL Listed</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>Industry Partners</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>Job Placement Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

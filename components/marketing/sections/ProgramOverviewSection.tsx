"use client";

import { Award, Wrench, Briefcase, Heart, CheckCircle } from "lucide-react";

export function ProgramOverviewSection() {
  const benefits = [
    {
      icon: Award,
      title: "Industry Credential",
      description: "Earn your AI Capability Specialist Certificate recognized by employers seeking AI-skilled professionals.",
    },
    {
      icon: Wrench,
      title: "Premium AI Tools",
      description: "$1,500 value in pro subscriptions to ChatGPT, Claude, Midjourney, RunwayML, and 25+ more tools.",
    },
    {
      icon: Briefcase,
      title: "Guaranteed Interview Pathway",
      description: "Direct connections to BrandVoice and hiring partners actively seeking AI-skilled professionals.",
    },
    {
      icon: Heart,
      title: "Support Until Employment",
      description: "Free additional training levels 2-4, portfolio reviews, and career support until you land your role.",
    },
  ];

  const targetAudience = [
    "Adults seeking rapid entry into tech careers",
    "Career changers looking for high-demand skills",
    "Marketing & content professionals wanting AI expertise",
    "WIOA-eligible participants seeking workforce training",
    "Professionals future-proofing their careers",
  ];

  return (
    <section id="program" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            What You&apos;ll Gain
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            A comprehensive program designed to launch your AI career in just 24 hours
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg hover:border-blue-300"
              >
                <div className="mb-4 inline-flex rounded-lg bg-blue-100 p-3 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-base text-gray-600">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-20">
          <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 p-8 sm:p-12">
            <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Who This Is For
            </h3>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {targetAudience.map((audience, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 shrink-0 text-blue-600 mt-0.5" />
                  <p className="text-base text-gray-700">{audience}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

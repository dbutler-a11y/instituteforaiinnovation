"use client";

import { Briefcase, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BrandVoiceSection() {
  const roles = [
    {
      title: "AI Content Specialist",
      skills: ["Text AI", "Prompt Engineering", "Content Strategy"],
    },
    {
      title: "Visual Content Producer",
      skills: ["Image AI", "Design Systems", "Brand Guidelines"],
    },
    {
      title: "Video Production Assistant",
      skills: ["Video AI", "Editing", "Storytelling"],
    },
  ];

  const requirements = [
    "Complete the AI Capability Specialist Certificate",
    "Pass the competency assessment with 80%+ score",
    "Build a professional portfolio showcasing AI capabilities",
  ];

  return (
    <section id="partnership" className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-purple-200 border border-purple-400/30">
            <Briefcase className="h-4 w-4" />
            Exclusive Partnership
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            BrandVoice Employment Pipeline
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-purple-200">
            Guaranteed Interview Pathway
          </p>
        </div>

        <div className="mt-12 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-8 sm:p-12">
          <p className="text-lg text-gray-200 text-center max-w-3xl mx-auto mb-12">
            BrandVoice, a leading AI-powered content agency, partners with the Institute for AI Innovation to provide
            guaranteed interview opportunities for all qualifying graduates. This exclusive partnership ensures
            a direct pathway from certification to career.
          </p>

          <h3 className="text-xl font-bold text-white mb-6 text-center">Available Roles</h3>
          <div className="grid gap-6 sm:grid-cols-3 mb-12">
            {roles.map((role, index) => (
              <div
                key={index}
                className="rounded-xl bg-white/10 border border-white/20 p-6 text-center"
              >
                <h4 className="font-semibold text-white text-lg mb-4">{role.title}</h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {role.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-block rounded-full bg-purple-500/30 px-3 py-1 text-sm text-purple-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold text-white mb-6 text-center">Qualification Requirements</h3>
          <div className="max-w-2xl mx-auto space-y-4 mb-8">
            {requirements.map((req, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-500 text-white text-sm font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-200">{req}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-white text-purple-900 hover:bg-purple-100"
              asChild
            >
              <a href="#apply">
                Learn More About Career Outcomes
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

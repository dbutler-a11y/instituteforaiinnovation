"use client";

import { ArrowRight, Download, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:20px_20px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Launch Your AI Career
            <span className="block text-blue-400">in 24 Hours</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300 sm:text-xl md:text-2xl">
            AI Capability Specialist Certificate | $8,000 | Guaranteed Interview Pathway
          </p>

          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            <div className="rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 p-6 transition-transform hover:scale-105">
              <div className="text-3xl font-bold text-blue-400 sm:text-4xl">24</div>
              <div className="mt-2 text-sm font-medium text-gray-300 sm:text-base">Hours</div>
            </div>

            <div className="rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 p-6 transition-transform hover:scale-105">
              <div className="text-3xl font-bold text-blue-400 sm:text-4xl">7</div>
              <div className="mt-2 text-sm font-medium text-gray-300 sm:text-base">Modules</div>
            </div>

            <div className="rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 p-6 transition-transform hover:scale-105">
              <div className="text-3xl font-bold text-blue-400 sm:text-4xl">25+</div>
              <div className="mt-2 text-sm font-medium text-gray-300 sm:text-base">AI Tools</div>
            </div>

            <div className="rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 p-6 transition-transform hover:scale-105">
              <div className="text-3xl font-bold text-blue-400 sm:text-4xl">100%</div>
              <div className="mt-2 text-sm font-medium text-gray-300 sm:text-base">Interview Rate</div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Button
              size="lg"
              className="w-full bg-blue-600 text-white hover:bg-blue-700 sm:w-auto text-base sm:text-lg px-8 py-6"
              asChild
            >
              <a href="#apply">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 sm:w-auto text-base sm:text-lg px-8 py-6"
              asChild
            >
              <a href="/admin/documents/brochure">
                <Download className="mr-2 h-5 w-5" />
                Download Brochure
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 sm:w-auto text-base sm:text-lg px-8 py-6"
              asChild
            >
              <a href="#apply">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Consultation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

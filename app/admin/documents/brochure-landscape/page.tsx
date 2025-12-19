"use client";

import Link from "next/link";
import { ArrowLeft, Download, Printer, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BrochureLandscapePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation Header - Hidden in Print */}
      <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-50 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
            <Link
              href="/"
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Documents
            </Link>
            <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto">
              <div className="hidden sm:flex items-center gap-2 text-slate-400 text-sm">
                <Monitor className="h-4 w-4" />
                Landscape Format
              </div>
              <div className="flex gap-2 sm:gap-3 flex-1 sm:flex-none">
                <Button onClick={handlePrint} variant="outline" size="sm" className="gap-2 border-slate-600 text-slate-300 hover:bg-slate-700 flex-1 sm:flex-none">
                  <Printer className="h-4 w-4" />
                  <span className="hidden sm:inline">Print</span>
                </Button>
                <Button onClick={handlePrint} size="sm" className="gap-2 bg-blue-600 hover:bg-blue-700 shadow-lg flex-1 sm:flex-none">
                  <Download className="h-4 w-4" />
                  <span className="hidden sm:inline">Download</span> PDF
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Slides Container */}
      <div className="py-8 print:py-0 px-4">
        <div className="max-w-6xl mx-auto space-y-6 print:space-y-0">

          {/* ========== SLIDE 1: TITLE ========== */}
          <div className="aspect-video sm:aspect-[16/9] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white rounded-xl sm:rounded-2xl shadow-lg flex flex-col overflow-hidden print:rounded-none print:shadow-none print:h-screen print:aspect-auto print:break-after-page">
            <div className="flex flex-col md:flex-row flex-1">
              <div className="flex-1 flex flex-col justify-center px-4 sm:px-8 md:px-16 py-6 sm:py-8">
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 bg-white/15 rounded-full text-[10px] sm:text-xs font-semibold tracking-wide mb-3 sm:mb-6 w-fit">
                  WORKFORCE DEVELOPMENT CREDENTIAL
                </div>
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 tracking-tight">
                  AI Capability Specialist
                </h1>
                <h2 className="text-lg sm:text-2xl md:text-3xl font-light text-blue-100 mb-4 sm:mb-8">
                  Certificate Program
                </h2>
                <p className="text-blue-100 text-sm sm:text-lg max-w-xl hidden sm:block">
                  24-hour intensive credential preparing individuals for technology support roles in AI-enhanced business environments.
                </p>
              </div>
              <div className="w-full md:w-80 flex items-center justify-center px-4 sm:px-8 pb-4 md:pb-0">
                <div className="grid grid-cols-4 md:grid-cols-2 gap-2 sm:gap-4 w-full">
                  <div className="bg-white/10 backdrop-blur rounded-lg sm:rounded-xl p-2 sm:p-4 text-center">
                    <div className="text-xl sm:text-3xl font-bold">24</div>
                    <div className="text-blue-200 text-[10px] sm:text-sm">Hours</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-lg sm:rounded-xl p-2 sm:p-4 text-center">
                    <div className="text-xl sm:text-3xl font-bold">$8K</div>
                    <div className="text-blue-200 text-[10px] sm:text-sm">Value</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-lg sm:rounded-xl p-2 sm:p-4 text-center">
                    <div className="text-xl sm:text-3xl font-bold">7</div>
                    <div className="text-blue-200 text-[10px] sm:text-sm">Modules</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-lg sm:rounded-xl p-2 sm:p-4 text-center">
                    <div className="text-lg sm:text-2xl font-bold">100%</div>
                    <div className="text-blue-200 text-[10px] sm:text-sm">Interview</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-2 sm:py-3 px-4 sm:px-12 text-center text-xs sm:text-sm text-blue-200 border-t border-white/20 bg-blue-800/30">
              Texas ETPL Program Documentation
            </div>
          </div>

          {/* ========== SLIDE 2: PROGRAM OVERVIEW ========== */}
          <div className="aspect-video sm:aspect-[16/9] bg-white rounded-xl sm:rounded-2xl shadow-lg flex flex-col overflow-hidden print:rounded-none print:shadow-none print:h-screen print:aspect-auto print:break-after-page">
            <div className="py-3 sm:py-4 px-4 sm:px-12 flex items-center gap-2 sm:gap-4 border-b border-slate-200 bg-slate-50">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-lg flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0">01</div>
              <h2 className="text-lg sm:text-2xl font-bold text-slate-900">Program Overview</h2>
            </div>
            <div className="flex-1 flex flex-col md:flex-row gap-4 sm:gap-8 px-4 sm:px-12 py-4 sm:py-6 overflow-auto">
              <div className="flex-1">
                <p className="text-sm sm:text-lg text-slate-700 mb-3 sm:mb-6">
                  The AI Capability Specialist Certificate is a <strong className="text-blue-600">24-hour intensive workforce development credential</strong> designed to prepare individuals for technology support roles.
                </p>
                <h3 className="font-bold text-slate-900 mb-2 sm:mb-3 text-sm sm:text-base">Who We Serve</h3>
                <ul className="space-y-1.5 sm:space-y-2 text-slate-700 text-xs sm:text-base">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 rounded-full flex-shrink-0"></span>Adults seeking rapid tech career entry</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 rounded-full flex-shrink-0"></span>Unemployed/underemployed individuals</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 rounded-full flex-shrink-0"></span>WIOA-eligible participants</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 rounded-full flex-shrink-0"></span>Career changers seeking AI skills</li>
                </ul>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 mb-2 sm:mb-3 text-sm sm:text-base">What Graduates Gain</h3>
                <ul className="space-y-1.5 sm:space-y-2 text-slate-700 mb-3 sm:mb-6 text-xs sm:text-base">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full flex-shrink-0"></span>Verified AI tool proficiency</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full flex-shrink-0"></span>Technical support capabilities</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full flex-shrink-0"></span>Workflow automation skills</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full flex-shrink-0"></span>Professional work readiness</li>
                </ul>
                <div className="bg-blue-50 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-blue-200">
                  <p className="text-blue-900 text-xs sm:text-sm">
                    <strong>Guaranteed Interview Pathway</strong> with BrandVoice for all qualified graduates
                  </p>
                </div>
              </div>
            </div>
            <div className="py-2 sm:py-3 px-4 sm:px-12 text-center text-xs sm:text-sm text-slate-500 border-t border-slate-200 bg-slate-50">AI Capability Specialist Certificate</div>
          </div>

          {/* ========== SLIDE 3: VALUE STACK ========== */}
          <div className="aspect-video sm:aspect-[16/9] bg-white rounded-xl sm:rounded-2xl shadow-lg flex flex-col overflow-hidden print:rounded-none print:shadow-none print:h-screen print:aspect-auto print:break-after-page">
            <div className="py-3 sm:py-4 px-4 sm:px-12 flex items-center gap-2 sm:gap-4 border-b border-slate-200 bg-slate-50">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-lg flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0">02</div>
              <h2 className="text-base sm:text-2xl font-bold text-slate-900">What's Included — $8,000 Total Value</h2>
            </div>
            <div className="flex-1 px-4 sm:px-12 py-4 sm:py-6 overflow-auto">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4 h-full">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg sm:rounded-xl p-3 sm:p-5 border border-blue-200 flex flex-col">
                  <div className="text-lg sm:text-2xl font-bold text-blue-700">$3,400</div>
                  <div className="font-semibold text-slate-900 mb-0.5 sm:mb-1 text-xs sm:text-base">24-Hour Training</div>
                  <div className="text-[10px] sm:text-sm text-slate-600 flex-1">7 intensive modules</div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg sm:rounded-xl p-3 sm:p-5 border border-orange-200 flex flex-col">
                  <div className="text-lg sm:text-2xl font-bold text-orange-700">$1,800</div>
                  <div className="font-semibold text-slate-900 mb-0.5 sm:mb-1 text-xs sm:text-base">Additional Training</div>
                  <div className="text-[10px] sm:text-sm text-slate-600 flex-1">72hr 1-on-1 sessions</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg sm:rounded-xl p-3 sm:p-5 border border-purple-200 flex flex-col">
                  <div className="text-lg sm:text-2xl font-bold text-purple-700">$1,500</div>
                  <div className="font-semibold text-slate-900 mb-0.5 sm:mb-1 text-xs sm:text-base">AI Tool Suite</div>
                  <div className="text-[10px] sm:text-sm text-slate-600 flex-1">25+ premium platforms</div>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg sm:rounded-xl p-3 sm:p-5 border border-emerald-200 flex flex-col">
                  <div className="text-lg sm:text-2xl font-bold text-emerald-700">$800</div>
                  <div className="font-semibold text-slate-900 mb-0.5 sm:mb-1 text-xs sm:text-base">BrandVoice</div>
                  <div className="text-[10px] sm:text-sm text-slate-600 flex-1">Guaranteed interview</div>
                </div>
                <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-lg sm:rounded-xl p-3 sm:p-5 border border-cyan-200 flex flex-col col-span-2 sm:col-span-1">
                  <div className="text-lg sm:text-2xl font-bold text-cyan-700">$500</div>
                  <div className="font-semibold text-slate-900 mb-0.5 sm:mb-1 text-xs sm:text-base">Career Services</div>
                  <div className="text-[10px] sm:text-sm text-slate-600 flex-1">Job placement support</div>
                </div>
              </div>
            </div>
            <div className="py-2 sm:py-3 px-4 sm:px-12 text-center text-xs sm:text-sm text-slate-500 border-t border-slate-200 bg-slate-50">AI Capability Specialist Certificate</div>
          </div>

          {/* ========== SLIDE 4: CURRICULUM ========== */}
          <div className="py-8 sm:py-0 sm:aspect-[16/9] bg-white rounded-xl sm:rounded-2xl shadow-lg flex flex-col overflow-hidden print:rounded-none print:shadow-none print:h-screen print:aspect-auto print:break-after-page">
            <div className="py-4 sm:py-4 px-6 sm:px-12 flex flex-wrap items-center gap-2 sm:gap-4 border-b border-slate-200 bg-slate-50">
              <div className="w-10 h-10 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-lg flex items-center justify-center text-sm sm:text-sm font-bold flex-shrink-0">03</div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">24-Hour Curriculum</h2>
              <div className="sm:ml-auto px-3 py-1 bg-blue-600 text-white rounded-lg text-sm font-bold">24 Total Hours</div>
            </div>
            <div className="flex-1 px-6 sm:px-8 py-6 sm:py-3">
              <div className="grid grid-cols-2 gap-4 sm:gap-2 sm:grid-cols-4">
                {[
                  { num: 1, title: "AI Fundamentals & Digital Readiness", hours: 4, color: "#2563eb", topics: ["AI concepts & terminology", "Cloud computing basics", "Digital tool navigation", "Professional AI ethics"] },
                  { num: 2, title: "Applied AI Tools", hours: 5, color: "#9333ea", topics: ["ChatGPT prompt engineering", "Claude for writing & analysis", "Replit code assistance", "Image & video AI tools"] },
                  { num: 3, title: "Technical Support & Troubleshooting", hours: 4, color: "#0891b2", topics: ["Structured troubleshooting", "Help desk best practices", "Documentation skills", "Remote support tools"] },
                  { num: 4, title: "Workflow Automation", hours: 4, color: "#059669", topics: ["Zapier fundamentals", "Make.com workflows", "No-code automation", "Process optimization"] },
                  { num: 5, title: "Customer-Facing Service", hours: 3, color: "#ea580c", topics: ["AI-enhanced communication", "Service excellence", "Escalation procedures"] },
                  { num: 6, title: "BrandVoice Simulations", hours: 2, color: "#db2777", topics: ["Live scenario practice", "Real-world case studies", "Performance feedback"] },
                  { num: 7, title: "Workforce & Professional Skills", hours: 2, color: "#4f46e5", topics: ["Resume optimization", "Interview preparation", "Professional presence"] },
                ].map((mod) => (
                  <div key={mod.num} className="bg-slate-50 rounded-xl sm:rounded-lg p-4 sm:p-3 border border-slate-200 flex flex-col">
                    <div className="flex items-center gap-2 sm:gap-2 mb-2 sm:mb-1">
                      <div className="w-10 h-10 sm:w-7 sm:h-7 rounded-lg sm:rounded-md flex items-center justify-center text-white font-bold text-base sm:text-sm" style={{ backgroundColor: mod.color }}>
                        {mod.num}
                      </div>
                      <div className="px-2 sm:px-1.5 py-1 sm:py-0.5 bg-white rounded border text-sm sm:text-xs font-bold text-slate-600">{mod.hours}h</div>
                    </div>
                    <div className="font-semibold text-slate-900 text-sm sm:text-xs mb-2 sm:mb-1.5 leading-tight">{mod.title}</div>
                    <ul className="space-y-1 sm:space-y-0.5 flex-1">
                      {mod.topics.map((topic, i) => (
                        <li key={i} className="flex items-start gap-2 sm:gap-1 text-slate-600 text-xs sm:text-[10px]">
                          <span className="w-1.5 h-1.5 sm:w-1 sm:h-1 rounded-full mt-1.5 sm:mt-1 flex-shrink-0" style={{ backgroundColor: mod.color }}></span>
                          <span className="leading-tight">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl sm:rounded-lg p-4 sm:p-3 flex flex-col justify-center items-center text-white col-span-2 sm:col-span-1">
                  <div className="text-4xl sm:text-3xl font-bold">7</div>
                  <div className="text-blue-100 text-sm sm:text-xs font-medium">Modules</div>
                  <div className="mt-2 w-full h-px bg-white/20"></div>
                  <div className="text-blue-100 text-sm sm:text-xs mt-2">Complete Workforce Credential</div>
                </div>
              </div>
            </div>
            <div className="py-3 sm:py-3 px-6 sm:px-12 text-center text-sm sm:text-xs text-slate-500 border-t border-slate-200 bg-slate-50">AI Capability Specialist Certificate</div>
          </div>

          {/* ========== SLIDE 5: AI TOOLS ========== */}
          <div className="py-8 sm:py-0 sm:aspect-[16/9] bg-white rounded-xl sm:rounded-2xl shadow-lg flex flex-col overflow-hidden print:rounded-none print:shadow-none print:h-screen print:aspect-auto print:break-after-page">
            <div className="py-4 sm:py-4 px-4 sm:px-12 flex flex-wrap items-center gap-2 sm:gap-4 border-b border-slate-200 bg-slate-50">
              <div className="w-10 h-10 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">04</div>
              <h2 className="text-lg sm:text-2xl font-bold text-slate-900">Premium AI Tool Suite — 25+ Platforms</h2>
              <div className="sm:ml-auto px-3 py-1 bg-emerald-100 text-emerald-700 rounded-lg text-xs font-bold">1-Year License Included</div>
            </div>
            <div className="flex-1 px-4 sm:px-10 py-4 sm:py-4 flex flex-col overflow-auto">
              {/* License Notice */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg px-4 py-2.5 mb-4 text-xs sm:text-sm text-center">
                <strong>All enrolled students receive their own 1-year license access to all tools listed below.</strong>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 flex-1">
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-emerald-200 flex flex-col justify-center">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">ChatGPT</div>
                  <div className="text-slate-600 text-[10px] sm:text-xs mt-1">Advanced AI for writing, coding & analysis</div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-orange-200 flex flex-col justify-center">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">Claude Code</div>
                  <div className="text-slate-600 text-[10px] sm:text-xs mt-1">AI coding assistant for apps & automation</div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-blue-200 flex flex-col justify-center">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">Replit</div>
                  <div className="text-slate-600 text-[10px] sm:text-xs mt-1">Cloud IDE to build & deploy applications</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-purple-200 flex flex-col justify-center">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">Sora 2</div>
                  <div className="text-slate-600 text-[10px] sm:text-xs mt-1">OpenAI video generation for pro content</div>
                </div>
                <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-cyan-200 flex flex-col justify-center">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">Google Veo 3.1</div>
                  <div className="text-slate-600 text-[10px] sm:text-xs mt-1">Cinematic AI video with sound in 1080p</div>
                </div>
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-pink-200 flex flex-col justify-center">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">Kling 2.6</div>
                  <div className="text-slate-600 text-[10px] sm:text-xs mt-1">Cinematic video with integrated audio</div>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-amber-200 flex flex-col justify-center">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">Nano Banana Pro</div>
                  <div className="text-slate-600 text-[10px] sm:text-xs mt-1">AI image generation & enhancement</div>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-indigo-200 flex flex-col justify-center">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">FLUX.2</div>
                  <div className="text-slate-600 text-[10px] sm:text-xs mt-1">State-of-the-art image synthesis</div>
                </div>
                <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-rose-200 flex flex-col justify-center">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">Runway Aleph</div>
                  <div className="text-slate-600 text-[10px] sm:text-xs mt-1">Professional video editing with AI</div>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-teal-200 flex flex-col justify-center">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">Suno V4.5</div>
                  <div className="text-slate-600 text-[10px] sm:text-xs mt-1">AI music & audio generation</div>
                </div>
                <div className="bg-gradient-to-br from-violet-50 to-violet-100 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-violet-200 flex flex-col justify-center">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">Ideogram V3</div>
                  <div className="text-slate-600 text-[10px] sm:text-xs mt-1">AI text-to-image with typography</div>
                </div>
                <div className="bg-gradient-to-br from-lime-50 to-lime-100 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-lime-200 flex flex-col justify-center">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">Imagen 4</div>
                  <div className="text-slate-600 text-[10px] sm:text-xs mt-1">Google's photorealistic image AI</div>
                </div>
                <div className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-sky-200 flex flex-col justify-center">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">Hailuo 2.3</div>
                  <div className="text-slate-600 text-[10px] sm:text-xs mt-1">High-quality video generation</div>
                </div>
                <div className="bg-gradient-to-br from-fuchsia-50 to-fuchsia-100 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-fuchsia-200 flex flex-col justify-center">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">Face Swap</div>
                  <div className="text-slate-600 text-[10px] sm:text-xs mt-1">Professional face replacement tool</div>
                </div>
                <div className="bg-gradient-to-br from-stone-50 to-stone-100 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-stone-200 flex flex-col justify-center">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">Lipsync Studio</div>
                  <div className="text-slate-600 text-[10px] sm:text-xs mt-1">AI lip sync for video content</div>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-red-200 flex flex-col justify-center">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">Video Upscale</div>
                  <div className="text-slate-600 text-[10px] sm:text-xs mt-1">Enhance video quality to 4K resolution</div>
                </div>
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-yellow-200 flex flex-col justify-center">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">Seedream 4.5</div>
                  <div className="text-slate-600 text-[10px] sm:text-xs mt-1">Creative AI image generation</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-green-200 flex flex-col justify-center">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">Midjourney</div>
                  <div className="text-slate-600 text-[10px] sm:text-xs mt-1">Artistic AI image creation</div>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-slate-200 flex flex-col justify-center">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">Stable Diffusion</div>
                  <div className="text-slate-600 text-[10px] sm:text-xs mt-1">Open-source image generation</div>
                </div>
                <div className="bg-gradient-to-br from-zinc-50 to-zinc-100 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-zinc-200 flex flex-col justify-center">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">ElevenLabs</div>
                  <div className="text-slate-600 text-[10px] sm:text-xs mt-1">AI voice cloning & text-to-speech</div>
                </div>
              </div>
            </div>
            <div className="py-3 sm:py-3 px-4 sm:px-12 text-center text-xs sm:text-xs text-slate-500 border-t border-slate-200 bg-slate-50">AI Capability Specialist Certificate</div>
          </div>

          {/* ========== SLIDE 6: CAREER OUTCOMES ========== */}
          <div className="py-8 sm:py-0 sm:aspect-[16/9] bg-white rounded-xl sm:rounded-2xl shadow-lg flex flex-col overflow-hidden print:rounded-none print:shadow-none print:h-screen print:aspect-auto print:break-after-page">
            <div className="py-4 sm:py-4 px-4 sm:px-12 flex items-center gap-2 sm:gap-4 border-b border-slate-200 bg-slate-50">
              <div className="w-10 h-10 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">05</div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Career Outcomes</h2>
            </div>
            <div className="flex-1 flex flex-col sm:flex-row gap-4 sm:gap-8 px-4 sm:px-12 py-4 sm:py-4 overflow-auto">
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 mb-3 text-sm sm:text-base">Target Occupations (SOC Codes)</h3>
                <div className="space-y-2">
                  {[
                    { code: "15-1232", title: "Computer User Support Specialists", wage: "$54,470", tag: "Primary" },
                    { code: "43-4051", title: "Customer Service Representatives", wage: "$38,150", tag: "Strong" },
                    { code: "15-1299", title: "Computer Occupations, All Other", wage: "$56,890", tag: "Strong" },
                    { code: "13-1199", title: "Business Operations Specialists", wage: "$76,850", tag: "Growth" },
                  ].map((occ) => (
                    <div key={occ.code} className="flex items-center justify-between bg-slate-50 rounded-lg p-2 sm:p-3 border">
                      <div>
                        <span className="text-[10px] sm:text-xs font-mono text-slate-500">{occ.code}</span>
                        <div className="font-medium text-slate-900 text-xs sm:text-sm">{occ.title}</div>
                      </div>
                      <div className="text-emerald-600 font-bold text-xs sm:text-base">{occ.wage}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 mb-3 text-sm sm:text-base">Sample Job Titles</h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                  {["AI Support Technician", "Help Desk Technician", "Digital Capability Assistant", "Automation Specialist", "AI Project Aide", "Workflow Coordinator"].map((title, i) => (
                    <span key={i} className="px-2 sm:px-3 py-1 sm:py-1.5 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium">{title}</span>
                  ))}
                </div>
                <div className="bg-emerald-100 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-emerald-200">
                  <div className="text-emerald-900 font-semibold text-center text-sm sm:text-base">
                    Texas Median Salary Range: <span className="text-lg sm:text-xl font-bold">$38K - $77K+</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-3 sm:py-3 px-4 sm:px-12 text-center text-xs text-slate-500 border-t border-slate-200 bg-slate-50">AI Capability Specialist Certificate</div>
          </div>

          {/* ========== SLIDE 7: BRANDVOICE PARTNERSHIP ========== */}
          <div className="py-8 sm:py-0 sm:aspect-[16/9] bg-white rounded-xl sm:rounded-2xl shadow-lg flex flex-col overflow-hidden print:rounded-none print:shadow-none print:h-screen print:aspect-auto print:break-after-page">
            <div className="py-4 sm:py-4 px-4 sm:px-12 flex items-center gap-2 sm:gap-4 border-b border-slate-200 bg-slate-50">
              <div className="w-10 h-10 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">06</div>
              <h2 className="text-lg sm:text-2xl font-bold text-slate-900">BrandVoice Employment Partnership</h2>
            </div>
            <div className="flex-1 flex flex-col sm:flex-row gap-4 sm:gap-8 px-4 sm:px-12 py-4 sm:py-4 overflow-auto">
              <div className="flex-1">
                <p className="text-slate-700 mb-4 text-sm sm:text-base">
                  Strategic partnership providing qualified graduates with <strong>guaranteed interview opportunities</strong> at BrandVoice.
                </p>
                <h3 className="font-bold text-slate-900 mb-3 text-sm sm:text-base">Interview Pathway</h3>
                <div className="space-y-2 sm:space-y-3">
                  {[
                    "Complete 24 program hours with passing scores",
                    "Maintain 90%+ attendance and conduct",
                    "Guaranteed interview within 30 days",
                    "Priority consideration for matching roles"
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-2 sm:gap-3">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs sm:text-sm flex-shrink-0">{i + 1}</div>
                      <span className="text-slate-700 text-xs sm:text-base">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 mb-3 text-sm sm:text-base">Potential Roles at BrandVoice</h3>
                <ul className="space-y-1.5 sm:space-y-2 mb-4">
                  {["AI Support Technician", "Customer Success Associate", "Technical Operations Coordinator", "AI Content Quality Specialist", "Digital Workflow Administrator"].map((role) => (
                    <li key={role} className="flex items-center gap-2 text-slate-700 text-xs sm:text-base">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full flex-shrink-0"></span>{role}
                    </li>
                  ))}
                </ul>
                <div className="bg-emerald-100 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-emerald-200">
                  <p className="text-emerald-900 text-xs sm:text-sm text-center">
                    <strong>Guaranteed interview within 30 days</strong> of program completion
                  </p>
                </div>
              </div>
            </div>
            <div className="py-3 sm:py-3 px-4 sm:px-12 text-center text-xs text-slate-500 border-t border-slate-200 bg-slate-50">AI Capability Specialist Certificate</div>
          </div>

          {/* ========== SLIDE 8: ADDITIONAL TRAINING ========== */}
          <div className="py-8 sm:py-0 sm:aspect-[16/9] bg-white rounded-xl sm:rounded-2xl shadow-lg flex flex-col overflow-hidden print:rounded-none print:shadow-none print:h-screen print:aspect-auto print:break-after-page">
            <div className="py-4 sm:py-4 px-4 sm:px-12 flex flex-wrap items-center gap-2 sm:gap-4 border-b border-slate-200 bg-slate-50">
              <div className="w-10 h-10 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">07</div>
              <h2 className="text-base sm:text-2xl font-bold text-slate-900">Free Additional Training Until Employment</h2>
              <div className="sm:ml-auto px-3 py-1 bg-amber-100 text-amber-700 rounded-lg text-xs font-bold">$1,800 Value Included</div>
            </div>
            <div className="flex-1 px-4 sm:px-8 py-4 sm:py-3 overflow-auto">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3">
                {/* Level 2 */}
                <div className="relative bg-gradient-to-br from-amber-50 to-yellow-100 rounded-lg sm:rounded-xl p-3 sm:p-4 border-2 border-amber-300 flex flex-col">
                  <div className="absolute -top-2 left-3 sm:left-4 px-2 py-0.5 bg-amber-500 text-white text-[10px] sm:text-xs font-bold rounded-full">LEVEL 2</div>
                  <div className="flex items-center gap-2 mt-3 sm:mt-2 mb-1">
                    <div className="text-xl sm:text-2xl font-bold text-amber-600">72</div>
                    <div className="text-amber-700 font-semibold text-xs sm:text-sm">Hours</div>
                  </div>
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm mb-2">1-on-1 AI Instructor Sessions</h3>
                  <ul className="space-y-1 sm:space-y-1.5 flex-1">
                    <li className="flex items-start gap-1.5 text-slate-600 text-[9px] sm:text-[10px]">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1 flex-shrink-0"></span>
                      <span>Personalized office hours for Q&A and training support</span>
                    </li>
                    <li className="flex items-start gap-1.5 text-slate-600 text-[9px] sm:text-[10px]">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1 flex-shrink-0"></span>
                      <span>Deep-dive sessions to reinforce key concepts</span>
                    </li>
                    <li className="flex items-start gap-1.5 text-slate-600 text-[9px] sm:text-[10px]">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1 flex-shrink-0"></span>
                      <span>Build confidence with guided practice</span>
                    </li>
                    <li className="flex items-start gap-1.5 text-slate-600 text-[9px] sm:text-[10px]">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1 flex-shrink-0"></span>
                      <span>Master tools at your own pace</span>
                    </li>
                  </ul>
                  <div className="mt-2 pt-2 border-t border-amber-200">
                    <div className="text-amber-700 font-semibold text-[8px] sm:text-[9px]">Schedule sessions until you feel job-ready</div>
                  </div>
                </div>
                {/* Level 3 */}
                <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg sm:rounded-xl p-3 sm:p-4 border-2 border-blue-200 flex flex-col">
                  <div className="absolute -top-2 left-3 sm:left-4 px-2 py-0.5 bg-blue-600 text-white text-[10px] sm:text-xs font-bold rounded-full">LEVEL 3</div>
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm mt-4 sm:mt-4 mb-2">Skills Labs</h3>
                  <ul className="space-y-1 sm:space-y-1.5 flex-1">
                    <li className="flex items-start gap-1.5 text-slate-600 text-[9px] sm:text-[10px]">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1 flex-shrink-0"></span>
                      <span>Extended hands-on practice with all 25+ AI tools</span>
                    </li>
                    <li className="flex items-start gap-1.5 text-slate-600 text-[9px] sm:text-[10px]">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1 flex-shrink-0"></span>
                      <span>Real-world workflow simulations</span>
                    </li>
                    <li className="flex items-start gap-1.5 text-slate-600 text-[9px] sm:text-[10px]">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1 flex-shrink-0"></span>
                      <span>Tackle complex automation challenges</span>
                    </li>
                    <li className="flex items-start gap-1.5 text-slate-600 text-[9px] sm:text-[10px]">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1 flex-shrink-0"></span>
                      <span>Sharpen skills through repetition</span>
                    </li>
                  </ul>
                  <div className="mt-2 pt-2 border-t border-blue-200">
                    <div className="text-blue-700 font-semibold text-[8px] sm:text-[9px]">Unlimited lab access until employment</div>
                  </div>
                </div>
                {/* Level 4 */}
                <div className="relative bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg sm:rounded-xl p-3 sm:p-4 border-2 border-emerald-200 flex flex-col">
                  <div className="absolute -top-2 left-3 sm:left-4 px-2 py-0.5 bg-emerald-600 text-white text-[10px] sm:text-xs font-bold rounded-full">LEVEL 4</div>
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm mt-4 sm:mt-4 mb-2">Portfolio Projects</h3>
                  <ul className="space-y-1 sm:space-y-1.5 flex-1">
                    <li className="flex items-start gap-1.5 text-slate-600 text-[9px] sm:text-[10px]">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1 flex-shrink-0"></span>
                      <span>Create personal projects showcasing your creativity</span>
                    </li>
                    <li className="flex items-start gap-1.5 text-slate-600 text-[9px] sm:text-[10px]">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1 flex-shrink-0"></span>
                      <span>Build impressive work samples for interviews</span>
                    </li>
                    <li className="flex items-start gap-1.5 text-slate-600 text-[9px] sm:text-[10px]">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1 flex-shrink-0"></span>
                      <span>Demonstrate skills to potential employers</span>
                    </li>
                    <li className="flex items-start gap-1.5 text-slate-600 text-[9px] sm:text-[10px]">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1 flex-shrink-0"></span>
                      <span>Receive instructor feedback & guidance</span>
                    </li>
                  </ul>
                  <div className="mt-2 pt-2 border-t border-emerald-200">
                    <div className="text-emerald-700 font-semibold text-[8px] sm:text-[9px]">Leave with a professional portfolio</div>
                  </div>
                </div>
                {/* Level 5 */}
                <div className="relative bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg sm:rounded-xl p-3 sm:p-4 border-2 border-purple-200 flex flex-col">
                  <div className="absolute -top-2 left-3 sm:left-4 px-2 py-0.5 bg-purple-600 text-white text-[10px] sm:text-xs font-bold rounded-full">LEVEL 5</div>
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm mt-4 sm:mt-4 mb-2">BrandVoice Apprenticeship</h3>
                  <ul className="space-y-1 sm:space-y-1.5 flex-1">
                    <li className="flex items-start gap-1.5 text-slate-600 text-[9px] sm:text-[10px]">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1 flex-shrink-0"></span>
                      <span>Work on real client projects supervised by staff</span>
                    </li>
                    <li className="flex items-start gap-1.5 text-slate-600 text-[9px] sm:text-[10px]">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1 flex-shrink-0"></span>
                      <span>Gain verifiable work experience for your resume</span>
                    </li>
                    <li className="flex items-start gap-1.5 text-slate-600 text-[9px] sm:text-[10px]">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1 flex-shrink-0"></span>
                      <span>Earn letter of recommendation upon completion</span>
                    </li>
                    <li className="flex items-start gap-1.5 text-slate-600 text-[9px] sm:text-[10px]">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1 flex-shrink-0"></span>
                      <span>Direct-hire potential based on performance</span>
                    </li>
                  </ul>
                  <div className="mt-2 pt-2 border-t border-purple-200">
                    <div className="text-purple-700 font-semibold text-[8px] sm:text-[9px]">Real experience, real references</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-3 sm:py-3 px-4 sm:px-12 text-center text-xs text-slate-500 border-t border-slate-200 bg-slate-50">AI Capability Specialist Certificate</div>
          </div>

          {/* ========== SLIDE 9: PROGRAM COSTS ========== */}
          <div className="py-8 sm:py-0 sm:aspect-[16/9] bg-white rounded-xl sm:rounded-2xl shadow-lg flex flex-col overflow-hidden print:rounded-none print:shadow-none print:h-screen print:aspect-auto print:break-after-page">
            <div className="py-4 sm:py-4 px-4 sm:px-12 flex items-center gap-2 sm:gap-4 border-b border-slate-200 bg-slate-50">
              <div className="w-10 h-10 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">08</div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Program Costs</h2>
            </div>
            <div className="flex-1 flex flex-col sm:flex-row gap-4 sm:gap-8 px-4 sm:px-12 py-4 sm:py-4 overflow-auto">
              <div className="flex-1">
                <div className="bg-white rounded-lg sm:rounded-xl border-2 border-slate-200 overflow-hidden">
                  <div className="bg-slate-50 px-3 sm:px-4 py-2 sm:py-3 border-b font-bold text-slate-900 text-sm sm:text-base">Cost Breakdown</div>
                  <div className="divide-y">
                    <div className="flex justify-between px-3 sm:px-4 py-2 sm:py-3"><span className="text-slate-700 text-xs sm:text-base">24-Hour Instructional Training</span><span className="font-semibold text-xs sm:text-base">$3,400</span></div>
                    <div className="flex justify-between px-3 sm:px-4 py-2 sm:py-3"><span className="text-slate-700 text-xs sm:text-base">Additional Training (72hr 1-on-1 + Levels)</span><span className="font-semibold text-xs sm:text-base">$1,800</span></div>
                    <div className="flex justify-between px-3 sm:px-4 py-2 sm:py-3"><span className="text-slate-700 text-xs sm:text-base">Premium AI Tool Suite</span><span className="font-semibold text-xs sm:text-base">$1,500</span></div>
                    <div className="flex justify-between px-3 sm:px-4 py-2 sm:py-3"><span className="text-slate-700 text-xs sm:text-base">BrandVoice Pipeline</span><span className="font-semibold text-xs sm:text-base">$800</span></div>
                    <div className="flex justify-between px-3 sm:px-4 py-2 sm:py-3"><span className="text-slate-700 text-xs sm:text-base">Career Services</span><span className="font-semibold text-xs sm:text-base">$500</span></div>
                    <div className="flex justify-between px-3 sm:px-4 py-2 sm:py-3 bg-blue-600 text-white"><span className="font-bold text-xs sm:text-base">Total Program Cost</span><span className="text-base sm:text-xl font-bold">$8,000</span></div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-3 sm:gap-4">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">Payment Options</h3>
                <div className="space-y-2">
                  {["Workforce Board voucher accepted", "WIOA funding eligible", "Full payment at enrollment", "Payment plans available"].map((item) => (
                    <div key={item} className="flex items-center gap-2 bg-slate-50 rounded-lg p-2 sm:p-3 border">
                      <span className="w-4 h-4 sm:w-5 sm:h-5 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-[10px] sm:text-xs flex-shrink-0">✓</span>
                      <span className="text-slate-700 text-xs sm:text-base">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-emerald-100 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-emerald-200 mt-auto">
                  <p className="text-xs sm:text-sm text-emerald-900">
                    <strong>Note:</strong> Program qualifies for Texas 24-hour licensing exemption under Texas Education Code Section 132.002(a)(8).
                  </p>
                </div>
              </div>
            </div>
            <div className="py-3 sm:py-3 px-4 sm:px-12 text-center text-xs text-slate-500 border-t border-slate-200 bg-slate-50">AI Capability Specialist Certificate</div>
          </div>

          {/* ========== SLIDE 10: CLOSING ========== */}
          <div className="py-8 sm:py-0 sm:aspect-[16/9] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-xl sm:rounded-2xl shadow-lg flex flex-col overflow-hidden print:rounded-none print:shadow-none print:h-screen print:aspect-auto print:break-after-page">
            <div className="flex flex-1 items-center justify-center px-4 sm:px-8 py-6 sm:py-0">
              <div className="text-center max-w-3xl">
                <h2 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">Ready to Get Started?</h2>
                <p className="text-sm sm:text-xl text-slate-300 mb-6 sm:mb-8">
                  Join the AI Capability Specialist Certificate program and gain the skills, tools, and employer connections you need for the AI-enhanced workplace.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="bg-white/10 backdrop-blur rounded-lg sm:rounded-xl p-3 sm:p-4">
                    <div className="text-lg sm:text-2xl font-bold">24 Hours</div>
                    <div className="text-slate-400 text-xs sm:text-sm">Intensive Training</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-lg sm:rounded-xl p-3 sm:p-4">
                    <div className="text-lg sm:text-2xl font-bold">$8,000</div>
                    <div className="text-slate-400 text-xs sm:text-sm">Total Value</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-lg sm:rounded-xl p-3 sm:p-4">
                    <div className="text-lg sm:text-2xl font-bold">100%</div>
                    <div className="text-slate-400 text-xs sm:text-sm">Interview Guarantee</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-lg sm:rounded-xl p-3 sm:p-4">
                    <div className="text-lg sm:text-2xl font-bold">Free</div>
                    <div className="text-slate-400 text-xs sm:text-sm">Support Until Hired</div>
                  </div>
                </div>
                <div className="text-slate-400 text-xs sm:text-base">Texas ETPL Application Documentation</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Print styles for PDF generation */}
      <style jsx global>{`
        @media print {
          @page {
            size: landscape;
            margin: 0;
          }

          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            background: white !important;
          }
        }
      `}</style>
    </div>
  );
}

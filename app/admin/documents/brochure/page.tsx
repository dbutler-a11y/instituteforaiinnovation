"use client";

import Link from "next/link";
import { ArrowLeft, Download, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BrochurePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Navigation Header - Hidden in Print */}
      <header className="bg-white border-b sticky top-0 z-50 print:hidden">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Documents
            </Link>
            <div className="flex gap-3">
              <Button onClick={handlePrint} variant="outline" size="sm" className="gap-2">
                <Printer className="h-4 w-4" />
                Print
              </Button>
              <Button onClick={handlePrint} size="sm" className="gap-2 bg-blue-600 hover:bg-blue-700 shadow-lg">
                <Download className="h-4 w-4" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Slides Container */}
      <div className="py-8 print:py-0">
        <div className="max-w-4xl mx-auto px-4 print:max-w-none print:px-0 space-y-8 print:space-y-0">

          {/* ========== SLIDE 1: TITLE ========== */}
          <div className="min-h-[85vh] sm:min-h-0 sm:aspect-[8.5/11] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white rounded-2xl shadow-lg flex flex-col overflow-hidden print:rounded-none print:shadow-none print:h-screen print:aspect-auto print:break-after-page">
            <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center items-center text-center">
              <div className="mb-6 sm:mb-8">
                <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2 bg-white/15 backdrop-blur rounded-full text-sm sm:text-sm font-semibold tracking-wide">
                  WORKFORCE DEVELOPMENT CREDENTIAL
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight">
                AI Capability Specialist
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-blue-100 mb-8 sm:mb-12">
                Certificate Program
              </h2>
              <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-8 w-full max-w-md sm:max-w-3xl sm:grid-cols-4">
                <div className="bg-white/10 backdrop-blur rounded-xl p-4 sm:p-4">
                  <div className="text-3xl sm:text-3xl font-bold">24</div>
                  <div className="text-blue-200 text-sm sm:text-sm">Hours</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-4 sm:p-4">
                  <div className="text-3xl sm:text-3xl font-bold">$8K</div>
                  <div className="text-blue-200 text-sm sm:text-sm">Value</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-4 sm:p-4">
                  <div className="text-3xl sm:text-3xl font-bold">7</div>
                  <div className="text-blue-200 text-sm sm:text-sm">Modules</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-4 sm:p-4">
                  <div className="text-2xl sm:text-2xl font-bold">100%</div>
                  <div className="text-blue-200 text-sm sm:text-sm">Interview Rate</div>
                </div>
              </div>
            </div>
            <div className="py-4 px-6 sm:px-8 text-center text-sm text-blue-200 border-t border-white/20">
              Texas ETPL Program Documentation
            </div>
          </div>

          {/* ========== SLIDE 2: PROGRAM OVERVIEW ========== */}
          <div className="py-8 sm:py-0 sm:aspect-[8.5/11] bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden print:rounded-none print:shadow-none print:h-screen print:aspect-auto print:break-after-page">
            <div className="py-5 sm:py-6 px-6 sm:px-8 flex items-center gap-3 sm:gap-4 border-b border-slate-200">
              <div className="w-12 h-12 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-xl flex items-center justify-center text-sm sm:text-sm font-bold flex-shrink-0">01</div>
              <h2 className="text-2xl sm:text-2xl font-bold text-slate-900">Program Overview</h2>
            </div>
            <div className="flex-1 p-6 sm:p-8">
              <div className="text-lg sm:text-xl text-slate-700 leading-relaxed mb-8 sm:mb-10 max-w-3xl">
                The AI Capability Specialist Certificate is a <strong className="text-blue-600">24-hour intensive workforce development credential</strong> designed to prepare individuals for technology support roles in AI-enhanced business environments.
              </div>

              <div className="grid grid-cols-1 gap-8 sm:gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="text-lg sm:text-lg font-bold text-slate-900 mb-4 sm:mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 sm:w-8 sm:h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-base sm:text-sm font-bold flex-shrink-0">1</span>
                    Who We Serve
                  </h3>
                  <ul className="space-y-4 sm:space-y-3 text-slate-700 text-base sm:text-base">
                    <li className="flex items-center gap-3">
                      <span className="w-2.5 h-2.5 sm:w-2 sm:h-2 bg-emerald-500 rounded-full flex-shrink-0"></span>
                      Adults seeking rapid tech career entry
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2.5 h-2.5 sm:w-2 sm:h-2 bg-emerald-500 rounded-full flex-shrink-0"></span>
                      Unemployed/underemployed individuals
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2.5 h-2.5 sm:w-2 sm:h-2 bg-emerald-500 rounded-full flex-shrink-0"></span>
                      WIOA-eligible participants
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2.5 h-2.5 sm:w-2 sm:h-2 bg-emerald-500 rounded-full flex-shrink-0"></span>
                      Career changers seeking AI skills
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-lg font-bold text-slate-900 mb-4 sm:mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 sm:w-8 sm:h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-base sm:text-sm font-bold flex-shrink-0">2</span>
                    What Graduates Gain
                  </h3>
                  <ul className="space-y-4 sm:space-y-3 text-slate-700 text-base sm:text-base">
                    <li className="flex items-center gap-3">
                      <span className="w-2.5 h-2.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                      Verified AI tool proficiency
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2.5 h-2.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                      Technical support capabilities
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2.5 h-2.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                      Workflow automation skills
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2.5 h-2.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                      Professional work readiness
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="py-4 px-6 sm:px-8 text-center text-sm text-slate-500 border-t border-slate-200">
              AI Capability Specialist Certificate
            </div>
          </div>

          {/* ========== SLIDE 3: VALUE STACK ========== */}
          <div className="py-8 sm:py-0 sm:aspect-[8.5/11] bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden print:rounded-none print:shadow-none print:h-screen print:aspect-auto print:break-after-page">
            <div className="py-5 sm:py-6 px-6 sm:px-8 flex items-center gap-3 sm:gap-4 border-b border-slate-200">
              <div className="w-12 h-12 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-xl flex items-center justify-center text-sm sm:text-sm font-bold flex-shrink-0">02</div>
              <h2 className="text-2xl sm:text-2xl font-bold text-slate-900">What's Included</h2>
            </div>
            <div className="flex-1 p-6 sm:p-8">
              <div className="text-lg sm:text-lg text-slate-600 mb-6 sm:mb-8">Complete program value breakdown:</div>

              <div className="grid grid-cols-2 gap-4 sm:gap-4 sm:grid-cols-3">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-blue-200">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-700 mb-1 sm:mb-2">$3,400</div>
                  <div className="font-semibold text-slate-900 mb-1 sm:mb-1 text-sm sm:text-base">24-Hour Training</div>
                  <div className="text-sm sm:text-sm text-slate-600">7 intensive modules</div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-orange-200">
                  <div className="text-2xl sm:text-3xl font-bold text-orange-700 mb-1 sm:mb-2">$1,800</div>
                  <div className="font-semibold text-slate-900 mb-1 sm:mb-1 text-sm sm:text-base">Additional Training</div>
                  <div className="text-sm sm:text-sm text-slate-600">72hr 1-on-1 + Levels 3-5</div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-purple-200">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-700 mb-1 sm:mb-2">$1,500</div>
                  <div className="font-semibold text-slate-900 mb-1 sm:mb-1 text-sm sm:text-base">AI Tool Suite</div>
                  <div className="text-sm sm:text-sm text-slate-600">20+ premium platforms</div>
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-emerald-200">
                  <div className="text-2xl sm:text-3xl font-bold text-emerald-700 mb-1 sm:mb-2">$800</div>
                  <div className="font-semibold text-slate-900 mb-1 sm:mb-1 text-sm sm:text-base">BrandVoice Pipeline</div>
                  <div className="text-sm sm:text-sm text-slate-600">Guaranteed interview</div>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-cyan-200">
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-700 mb-1 sm:mb-2">$500</div>
                  <div className="font-semibold text-slate-900 mb-1 sm:mb-1 text-sm sm:text-base">Career Services</div>
                  <div className="text-sm sm:text-sm text-slate-600">Job placement support</div>
                </div>

                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white">
                  <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">$8,000</div>
                  <div className="font-semibold mb-1 sm:mb-1 text-sm sm:text-base">Total Value</div>
                  <div className="text-sm sm:text-sm text-slate-300">WIOA funding accepted</div>
                </div>
              </div>
            </div>
            <div className="py-4 px-6 sm:px-8 text-center text-sm text-slate-500 border-t border-slate-200">
              AI Capability Specialist Certificate
            </div>
          </div>

          {/* ========== SLIDE 4: CURRICULUM ========== */}
          <div className="py-8 sm:py-0 sm:aspect-[8.5/11] bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden print:rounded-none print:shadow-none print:h-screen print:aspect-auto print:break-after-page">
            <div className="py-5 sm:py-6 px-6 sm:px-8 flex items-center gap-3 sm:gap-4 border-b border-slate-200">
              <div className="w-12 h-12 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-xl flex items-center justify-center text-sm sm:text-sm font-bold flex-shrink-0">03</div>
              <h2 className="text-2xl sm:text-2xl font-bold text-slate-900">24-Hour Curriculum</h2>
            </div>
            <div className="flex-1 p-6 sm:p-8">
              <div className="space-y-4 sm:space-y-3">
                {[
                  { num: 1, title: "AI Fundamentals & Digital Readiness", hours: 4, color: "blue" },
                  { num: 2, title: "Applied AI Tools", hours: 5, color: "purple" },
                  { num: 3, title: "Technical Support & Troubleshooting", hours: 4, color: "cyan" },
                  { num: 4, title: "Workflow Automation", hours: 4, color: "emerald" },
                  { num: 5, title: "Customer-Facing Service & Support", hours: 3, color: "orange" },
                  { num: 6, title: "BrandVoice Support Simulations", hours: 2, color: "pink" },
                  { num: 7, title: "Workforce & Professional Skills", hours: 2, color: "indigo" },
                ].map((mod) => (
                  <div key={mod.num} className="flex items-center gap-4 sm:gap-4 bg-slate-50 rounded-xl p-4 sm:p-4 border border-slate-200">
                    <div className="w-12 h-12 sm:w-12 sm:h-12 rounded-xl sm:rounded-xl flex items-center justify-center text-white font-bold text-lg sm:text-lg flex-shrink-0"
                      style={{ backgroundColor: mod.color === 'blue' ? '#2563eb' : mod.color === 'purple' ? '#9333ea' : mod.color === 'cyan' ? '#0891b2' : mod.color === 'emerald' ? '#059669' : mod.color === 'orange' ? '#ea580c' : mod.color === 'pink' ? '#db2777' : '#4f46e5' }}>
                      {mod.num}
                    </div>
                    <div className="flex-1 font-semibold text-slate-900 text-base sm:text-base">{mod.title}</div>
                    <div className="px-4 sm:px-4 py-2 sm:py-2 bg-white rounded-lg border text-slate-700 font-bold text-base sm:text-base">{mod.hours} hrs</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 sm:mt-6 bg-blue-600 text-white rounded-xl p-4 sm:p-4 flex items-center justify-between">
                <span className="font-bold text-lg sm:text-lg">Total Program Hours</span>
                <span className="text-3xl sm:text-3xl font-bold">24</span>
              </div>
            </div>
            <div className="py-4 px-6 sm:px-8 text-center text-sm text-slate-500 border-t border-slate-200">
              AI Capability Specialist Certificate
            </div>
          </div>

          {/* ========== SLIDE 5: AI TOOLS ========== */}
          <div className="py-8 sm:py-0 sm:aspect-[8.5/11] bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden print:rounded-none print:shadow-none print:h-screen print:aspect-auto print:break-after-page">
            <div className="py-5 sm:py-6 px-6 sm:px-8 flex items-center gap-3 sm:gap-4 border-b border-slate-200">
              <div className="w-12 h-12 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-xl flex items-center justify-center text-sm sm:text-sm font-bold flex-shrink-0">04</div>
              <h2 className="text-2xl sm:text-2xl font-bold text-slate-900">Premium AI Tool Suite</h2>
            </div>
            <div className="flex-1 p-6 sm:p-8">
              <div className="text-base sm:text-sm text-slate-600 mb-5 sm:mb-4">
                Access to 25+ industry-leading AI platforms — the same tools used by professionals in AI-enhanced workplaces.
              </div>

              {/* Featured Tools with Descriptions */}
              <div className="grid grid-cols-2 gap-3 sm:gap-3 mb-5 sm:mb-4 sm:grid-cols-3">
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl sm:rounded-xl p-4 sm:p-3 border border-emerald-200">
                  <div className="font-bold text-slate-900 text-base sm:text-sm">ChatGPT</div>
                  <div className="text-slate-600 text-sm sm:text-xs mt-1">Advanced AI assistant for writing, coding, analysis</div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl sm:rounded-xl p-4 sm:p-3 border border-orange-200">
                  <div className="font-bold text-slate-900 text-base sm:text-sm">Claude Code</div>
                  <div className="text-slate-600 text-sm sm:text-xs mt-1">AI-powered coding assistant for apps</div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl sm:rounded-xl p-4 sm:p-3 border border-blue-200">
                  <div className="font-bold text-slate-900 text-base sm:text-sm">Replit</div>
                  <div className="text-slate-600 text-sm sm:text-xs mt-1">Cloud IDE with AI capabilities</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl sm:rounded-xl p-4 sm:p-3 border border-purple-200">
                  <div className="font-bold text-slate-900 text-base sm:text-sm">Sora 2</div>
                  <div className="text-slate-600 text-sm sm:text-xs mt-1">OpenAI's video generation</div>
                </div>
                <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl sm:rounded-xl p-4 sm:p-3 border border-cyan-200">
                  <div className="font-bold text-slate-900 text-base sm:text-sm">Google Veo 3.1</div>
                  <div className="text-slate-600 text-sm sm:text-xs mt-1">Cinematic AI video</div>
                </div>
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl sm:rounded-xl p-4 sm:p-3 border border-pink-200">
                  <div className="font-bold text-slate-900 text-base sm:text-sm">Kling 2.6</div>
                  <div className="text-slate-600 text-sm sm:text-xs mt-1">Video with integrated audio</div>
                </div>
              </div>

              {/* More Tools Grid */}
              <div className="grid grid-cols-2 gap-2 sm:gap-2 mb-4 sm:mb-3 sm:grid-cols-4">
                {["Nano Banana Pro", "FLUX.2", "Runway Aleph", "Seedream 4.5", "Hailuo 2.3", "Imagen 4", "Ideogram V3", "Suno V4.5"].map((tool) => (
                  <div key={tool} className="bg-slate-100 rounded-lg px-3 sm:px-2 py-2 sm:py-1.5 text-center">
                    <span className="text-sm sm:text-xs font-medium text-slate-700">{tool}</span>
                  </div>
                ))}
              </div>

              {/* Tool Categories */}
              <div className="grid grid-cols-1 gap-3 sm:gap-2 sm:grid-cols-3">
                <div className="bg-slate-50 rounded-lg p-4 sm:p-3 border">
                  <div className="font-semibold text-slate-900 text-sm sm:text-xs mb-1 sm:mb-1">Video & Animation</div>
                  <div className="text-sm sm:text-xs text-slate-500">Lipsync, Video Upscale, Draw to Video</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 sm:p-3 border">
                  <div className="font-semibold text-slate-900 text-sm sm:text-xs mb-1 sm:mb-1">Image & Creative</div>
                  <div className="text-sm sm:text-xs text-slate-500">Face Swap, Fashion Factory, Photodump</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 sm:p-3 border">
                  <div className="font-semibold text-slate-900 text-sm sm:text-xs mb-1 sm:mb-1">Audio & Music</div>
                  <div className="text-sm sm:text-xs text-slate-500">Suno V4.5 for AI music, voice generation</div>
                </div>
              </div>
            </div>
            <div className="py-4 px-6 sm:px-8 text-center text-sm text-slate-500 border-t border-slate-200">
              AI Capability Specialist Certificate
            </div>
          </div>

          {/* ========== SLIDE 6: CAREER OUTCOMES ========== */}
          <div className="py-8 sm:py-0 sm:aspect-[8.5/11] bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden print:rounded-none print:shadow-none print:h-screen print:aspect-auto print:break-after-page">
            <div className="py-5 sm:py-6 px-6 sm:px-8 flex items-center gap-3 sm:gap-4 border-b border-slate-200">
              <div className="w-12 h-12 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-xl flex items-center justify-center text-sm sm:text-sm font-bold flex-shrink-0">05</div>
              <h2 className="text-2xl sm:text-2xl font-bold text-slate-900">Career Outcomes</h2>
            </div>
            <div className="flex-1 p-6 sm:p-8">
              <div className="grid grid-cols-1 gap-8 sm:gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="text-lg sm:text-lg font-bold text-slate-900 mb-4 sm:mb-4">Target Occupations (SOC Codes)</h3>
                  <div className="space-y-4 sm:space-y-3">
                    {[
                      { code: "15-1232", title: "Computer User Support Specialists", wage: "$54,470", tag: "Primary" },
                      { code: "43-4051", title: "Customer Service Representatives", wage: "$38,150", tag: "Strong" },
                      { code: "15-1299", title: "Computer Occupations, All Other", wage: "$56,890", tag: "Strong" },
                      { code: "13-1199", title: "Business Operations Specialists", wage: "$76,850", tag: "Growth" },
                    ].map((occ) => (
                      <div key={occ.code} className="flex items-center justify-between bg-slate-50 rounded-xl p-4 sm:p-4 border">
                        <div>
                          <div className="text-xs sm:text-xs font-mono text-slate-500 mb-1 sm:mb-1">{occ.code}</div>
                          <div className="font-semibold text-slate-900 text-sm sm:text-sm">{occ.title}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-emerald-600 font-bold text-base sm:text-base">{occ.wage}</div>
                          <div className="text-xs sm:text-xs text-slate-500">{occ.tag}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-lg font-bold text-slate-900 mb-4 sm:mb-4">Sample Job Titles</h3>
                  <div className="flex flex-wrap gap-2 sm:gap-2">
                    {[
                      "AI Support Technician",
                      "Help Desk Technician",
                      "Digital Capability Assistant",
                      "Technical Customer Service Rep",
                      "Automation Specialist",
                      "AI Project Aide",
                      "Service Desk Analyst",
                      "Workflow Coordinator",
                      "Digital Operations Coordinator"
                    ].map((title, i) => (
                      <span key={i} className="px-4 sm:px-4 py-2 sm:py-2 bg-blue-100 text-blue-800 rounded-full text-sm sm:text-sm font-medium">
                        {title}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 sm:mt-6 bg-emerald-100 rounded-xl p-5 sm:p-5 border border-emerald-200">
                    <div className="text-emerald-900 font-semibold text-center text-base sm:text-base">
                      Texas Median Salary Range<br />
                      <span className="text-2xl sm:text-2xl font-bold">$38K - $77K+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-4 px-6 sm:px-8 text-center text-sm text-slate-500 border-t border-slate-200">
              AI Capability Specialist Certificate
            </div>
          </div>

          {/* ========== SLIDE 7: BRANDVOICE PARTNERSHIP ========== */}
          <div className="py-8 sm:py-0 sm:aspect-[8.5/11] bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden print:rounded-none print:shadow-none print:h-screen print:aspect-auto print:break-after-page">
            <div className="py-5 sm:py-6 px-6 sm:px-8 flex items-center gap-3 sm:gap-4 border-b border-slate-200">
              <div className="w-12 h-12 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-xl flex items-center justify-center text-sm sm:text-sm font-bold flex-shrink-0">06</div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">BrandVoice Employment Partnership</h2>
            </div>
            <div className="flex-1 p-6 sm:p-8">
              <div className="text-base sm:text-lg text-slate-700 mb-6 sm:mb-6">
                Strategic partnership providing qualified graduates with <strong className="text-slate-900">guaranteed interview opportunities</strong> at BrandVoice, an AI-powered content and communications technology company.
              </div>

              <div className="grid grid-cols-1 gap-6 sm:gap-6 sm:grid-cols-2">
                <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 border-2 border-slate-200">
                  <h3 className="font-bold text-lg sm:text-lg mb-4 sm:mb-4 text-slate-900">Interview Pathway</h3>
                  <div className="space-y-4 sm:space-y-4">
                    {[
                      "Complete 24 program hours with passing scores",
                      "Maintain 90%+ attendance and conduct",
                      "Guaranteed interview within 30 days",
                      "Priority consideration for matching roles"
                    ].map((step, i) => (
                      <div key={i} className="flex items-center gap-4 sm:gap-4">
                        <div className="w-10 h-10 sm:w-8 sm:h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-base sm:text-sm flex-shrink-0">{i + 1}</div>
                        <span className="text-slate-700 text-base sm:text-base">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 border-2 border-slate-200">
                  <h3 className="font-bold text-lg sm:text-lg mb-4 sm:mb-4 text-slate-900">Potential Roles at BrandVoice</h3>
                  <ul className="space-y-4 sm:space-y-3">
                    <li className="flex items-center gap-3 sm:gap-3 text-slate-700 text-base sm:text-base">
                      <span className="w-2.5 h-2.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full flex-shrink-0"></span>
                      AI Support Technician
                    </li>
                    <li className="flex items-center gap-3 sm:gap-3 text-slate-700 text-base sm:text-base">
                      <span className="w-2.5 h-2.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full flex-shrink-0"></span>
                      Customer Success Associate
                    </li>
                    <li className="flex items-center gap-3 sm:gap-3 text-slate-700 text-base sm:text-base">
                      <span className="w-2.5 h-2.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full flex-shrink-0"></span>
                      Technical Operations Coordinator
                    </li>
                    <li className="flex items-center gap-3 sm:gap-3 text-slate-700 text-base sm:text-base">
                      <span className="w-2.5 h-2.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full flex-shrink-0"></span>
                      AI Content Quality Specialist
                    </li>
                    <li className="flex items-center gap-3 sm:gap-3 text-slate-700 text-base sm:text-base">
                      <span className="w-2.5 h-2.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full flex-shrink-0"></span>
                      Digital Workflow Administrator
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 sm:mt-6 bg-emerald-100 rounded-xl p-5 sm:p-5 border border-emerald-200">
                <p className="text-emerald-900 text-center text-base sm:text-base">
                  <strong>Commitment:</strong> Qualified graduates receive guaranteed interview within 30 days of program completion
                </p>
              </div>
            </div>
            <div className="py-4 px-6 sm:px-8 text-center text-sm text-slate-500 border-t border-slate-200">
              AI Capability Specialist Certificate
            </div>
          </div>

          {/* ========== SLIDE 8: ADDITIONAL TRAINING ========== */}
          <div className="py-8 sm:py-0 sm:aspect-[8.5/11] bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden print:rounded-none print:shadow-none print:h-screen print:aspect-auto print:break-after-page">
            <div className="py-5 sm:py-6 px-6 sm:px-8 flex items-center gap-3 sm:gap-4 border-b border-slate-200">
              <div className="w-12 h-12 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-xl flex items-center justify-center text-sm sm:text-sm font-bold flex-shrink-0">07</div>
              <h2 className="text-2xl sm:text-2xl font-bold text-slate-900">Free Additional Training</h2>
            </div>
            <div className="flex-1 p-6 sm:p-8">
              <div className="text-base sm:text-base text-slate-600 mb-6 sm:mb-6">
                Graduates receive continued training at <strong className="text-slate-900">no additional cost</strong> until they secure employment.
              </div>

              <div className="grid grid-cols-1 gap-5 sm:gap-4 mb-5 sm:mb-4 sm:grid-cols-2">
                <div className="relative bg-gradient-to-br from-amber-50 to-yellow-100 rounded-xl sm:rounded-2xl p-5 sm:p-6 border-2 border-amber-300">
                  <div className="absolute -top-2 sm:-top-3 left-5 sm:left-6 px-3 sm:px-3 py-1 sm:py-1 bg-amber-500 text-white text-xs sm:text-xs font-bold rounded-full">LEVEL 2</div>
                  <div className="flex items-center gap-3 sm:gap-3 mt-2 mb-2 sm:mb-2">
                    <div className="text-3xl sm:text-3xl font-bold text-amber-600">72</div>
                    <div className="text-amber-700 font-semibold text-base sm:text-base">Hours</div>
                  </div>
                  <h3 className="font-bold text-lg sm:text-lg text-slate-900 mb-2 sm:mb-2">1-on-1 AI Instructor Sessions</h3>
                  <p className="text-slate-600 text-sm sm:text-sm">Personalized coaching sessions with an AI instructor</p>
                </div>

                <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl sm:rounded-2xl p-5 sm:p-6 border-2 border-blue-200">
                  <div className="absolute -top-2 sm:-top-3 left-5 sm:left-6 px-3 sm:px-3 py-1 sm:py-1 bg-blue-600 text-white text-xs sm:text-xs font-bold rounded-full">LEVEL 3</div>
                  <h3 className="font-bold text-lg sm:text-lg text-slate-900 mt-4 mb-2 sm:mb-2">Skills Labs</h3>
                  <p className="text-slate-600 text-sm sm:text-sm">Extended hands-on practice with AI tools and real-world workflows</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:gap-4 sm:grid-cols-2">
                <div className="relative bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl sm:rounded-2xl p-5 sm:p-6 border-2 border-emerald-200">
                  <div className="absolute -top-2 sm:-top-3 left-5 sm:left-6 px-3 sm:px-3 py-1 sm:py-1 bg-emerald-600 text-white text-xs sm:text-xs font-bold rounded-full">LEVEL 4</div>
                  <h3 className="font-bold text-lg sm:text-lg text-slate-900 mt-4 mb-2 sm:mb-2">Portfolio Projects</h3>
                  <p className="text-slate-600 text-sm sm:text-sm">Build impressive work samples that showcase your capabilities</p>
                </div>

                <div className="relative bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl sm:rounded-2xl p-5 sm:p-6 border-2 border-purple-200">
                  <div className="absolute -top-2 sm:-top-3 left-5 sm:left-6 px-3 sm:px-3 py-1 sm:py-1 bg-purple-600 text-white text-xs sm:text-xs font-bold rounded-full">LEVEL 5</div>
                  <h3 className="font-bold text-lg sm:text-lg text-slate-900 mt-4 mb-2 sm:mb-2">Apprenticeship Track</h3>
                  <p className="text-slate-600 text-sm sm:text-sm">Supervised work on real BrandVoice projects</p>
                </div>
              </div>

              <div className="mt-6 sm:mt-6 bg-slate-100 rounded-xl p-4 sm:p-4 border border-slate-200">
                <p className="text-slate-700 text-center text-sm sm:text-sm">
                  <strong>All additional training levels included at no extra cost</strong> — continue until you're employed
                </p>
              </div>
            </div>
            <div className="py-4 px-6 sm:px-8 text-center text-sm text-slate-500 border-t border-slate-200">
              AI Capability Specialist Certificate
            </div>
          </div>

          {/* ========== SLIDE 9: PROGRAM COSTS ========== */}
          <div className="py-8 sm:py-0 sm:aspect-[8.5/11] bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden print:rounded-none print:shadow-none print:h-screen print:aspect-auto print:break-after-page">
            <div className="py-5 sm:py-6 px-6 sm:px-8 flex items-center gap-3 sm:gap-4 border-b border-slate-200">
              <div className="w-12 h-12 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-xl flex items-center justify-center text-sm sm:text-sm font-bold flex-shrink-0">08</div>
              <h2 className="text-2xl sm:text-2xl font-bold text-slate-900">Program Costs</h2>
            </div>
            <div className="flex-1 p-6 sm:p-8">
              <div className="grid grid-cols-1 gap-8 sm:gap-10 sm:grid-cols-2">
                <div className="bg-white rounded-xl sm:rounded-2xl border-2 border-slate-200 overflow-hidden">
                  <div className="bg-slate-50 px-5 sm:px-6 py-4 sm:py-4 border-b">
                    <h3 className="font-bold text-slate-900 text-base sm:text-base">Cost Breakdown</h3>
                  </div>
                  <div className="divide-y text-base sm:text-base">
                    <div className="flex justify-between px-5 sm:px-6 py-4 sm:py-4">
                      <span className="text-slate-700">24-Hour Instructional Training</span>
                      <span className="font-semibold">$3,400</span>
                    </div>
                    <div className="flex justify-between px-5 sm:px-6 py-4 sm:py-4">
                      <span className="text-slate-700">Additional Training (72hr 1-on-1)</span>
                      <span className="font-semibold">$1,800</span>
                    </div>
                    <div className="flex justify-between px-5 sm:px-6 py-4 sm:py-4">
                      <span className="text-slate-700">Premium AI Tool Suite</span>
                      <span className="font-semibold">$1,500</span>
                    </div>
                    <div className="flex justify-between px-5 sm:px-6 py-4 sm:py-4">
                      <span className="text-slate-700">BrandVoice Pipeline</span>
                      <span className="font-semibold">$800</span>
                    </div>
                    <div className="flex justify-between px-5 sm:px-6 py-4 sm:py-4">
                      <span className="text-slate-700">Career Services</span>
                      <span className="font-semibold">$500</span>
                    </div>
                    <div className="flex justify-between px-5 sm:px-6 py-4 sm:py-5 bg-blue-600 text-white">
                      <span className="font-bold">Total Program Cost</span>
                      <span className="text-2xl sm:text-2xl font-bold">$8,000</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 mb-5 sm:mb-5 text-base sm:text-base">Payment Options</h3>
                  <div className="space-y-4 sm:space-y-4 mb-6 sm:mb-8">
                    {[
                      "Workforce Board voucher accepted",
                      "WIOA funding eligible",
                      "Full payment at enrollment",
                      "Payment plans available"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 sm:gap-3 bg-slate-50 rounded-lg p-4 sm:p-4 border">
                        <div className="w-6 h-6 sm:w-6 sm:h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-xs sm:text-xs font-bold flex-shrink-0">✓</div>
                        <span className="text-slate-700 text-base sm:text-base">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-emerald-100 rounded-xl p-5 sm:p-5 border border-emerald-200">
                    <p className="text-sm sm:text-sm text-emerald-900">
                      <strong>Note:</strong> Program qualifies for Texas 24-hour licensing exemption under Texas Education Code Section 132.002(a)(8).
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-4 px-6 sm:px-8 text-center text-sm text-slate-500 border-t border-slate-200">
              AI Capability Specialist Certificate
            </div>
          </div>

          {/* ========== SLIDE 10: ADMISSION REQUIREMENTS ========== */}
          <div className="py-8 sm:py-0 sm:aspect-[8.5/11] bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden print:rounded-none print:shadow-none print:h-screen print:aspect-auto print:break-after-page">
            <div className="py-5 sm:py-6 px-6 sm:px-8 flex items-center gap-3 sm:gap-4 border-b border-slate-200">
              <div className="w-12 h-12 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-xl flex items-center justify-center text-sm sm:text-sm font-bold flex-shrink-0">09</div>
              <h2 className="text-2xl sm:text-2xl font-bold text-slate-900">Admission & Requirements</h2>
            </div>
            <div className="flex-1 p-6 sm:p-8">
              <div className="grid grid-cols-1 gap-6 sm:gap-6 sm:grid-cols-3">
                <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-4 sm:mb-4 text-lg sm:text-lg">Prerequisites</h3>
                  <ul className="space-y-4 sm:space-y-3 text-slate-700 text-base sm:text-base">
                    <li className="flex items-start gap-3">
                      <span className="w-2.5 h-2.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mt-2 sm:mt-2 flex-shrink-0"></span>
                      18 years of age or older
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2.5 h-2.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mt-2 sm:mt-2 flex-shrink-0"></span>
                      High school diploma, GED
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2.5 h-2.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mt-2 sm:mt-2 flex-shrink-0"></span>
                      English proficiency
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2.5 h-2.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mt-2 sm:mt-2 flex-shrink-0"></span>
                      Computer with internet
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2.5 h-2.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mt-2 sm:mt-2 flex-shrink-0"></span>
                      Basic digital literacy
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-4 sm:mb-4 text-lg sm:text-lg">Attendance Policy</h3>
                  <ul className="space-y-4 sm:space-y-3 text-slate-700 text-base sm:text-base">
                    <li className="flex items-start gap-3">
                      <span className="w-2.5 h-2.5 sm:w-2 sm:h-2 bg-emerald-500 rounded-full mt-2 sm:mt-2 flex-shrink-0"></span>
                      90% minimum (21.6/24 hrs)
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2.5 h-2.5 sm:w-2 sm:h-2 bg-emerald-500 rounded-full mt-2 sm:mt-2 flex-shrink-0"></span>
                      Immediate absence notification
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2.5 h-2.5 sm:w-2 sm:h-2 bg-emerald-500 rounded-full mt-2 sm:mt-2 flex-shrink-0"></span>
                      Make-up work required
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2.5 h-2.5 sm:w-2 sm:h-2 bg-emerald-500 rounded-full mt-2 sm:mt-2 flex-shrink-0"></span>
                      Tracked each session
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-4 sm:mb-4 text-lg sm:text-lg">Certification</h3>
                  <ul className="space-y-4 sm:space-y-3 text-slate-700 text-base sm:text-base">
                    <li className="flex items-start gap-3">
                      <span className="w-2.5 h-2.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full mt-2 sm:mt-2 flex-shrink-0"></span>
                      Complete all 24 hours
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2.5 h-2.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full mt-2 sm:mt-2 flex-shrink-0"></span>
                      70% on assessments
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2.5 h-2.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full mt-2 sm:mt-2 flex-shrink-0"></span>
                      Pass all module tests
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2.5 h-2.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full mt-2 sm:mt-2 flex-shrink-0"></span>
                      Professional conduct
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2.5 h-2.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full mt-2 sm:mt-2 flex-shrink-0"></span>
                      Interview prep completed
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="py-4 px-6 sm:px-8 text-center text-sm text-slate-500 border-t border-slate-200">
              AI Capability Specialist Certificate
            </div>
          </div>

          {/* ========== SLIDE 11: COMPLIANCE ========== */}
          <div className="py-8 sm:py-0 sm:aspect-[8.5/11] bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden print:rounded-none print:shadow-none print:h-screen print:aspect-auto print:break-after-page">
            <div className="py-5 sm:py-6 px-6 sm:px-8 flex items-center gap-3 sm:gap-4 border-b border-slate-200">
              <div className="w-12 h-12 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-xl flex items-center justify-center text-sm sm:text-sm font-bold flex-shrink-0">10</div>
              <h2 className="text-2xl sm:text-2xl font-bold text-slate-900">Compliance & Policies</h2>
            </div>
            <div className="flex-1 p-6 sm:p-8">
              <div className="grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2">
                <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-3 sm:mb-3 text-base sm:text-base">Equal Opportunity</h3>
                  <p className="text-slate-700 text-sm sm:text-sm">
                    We do not discriminate on the basis of race, color, religion, sex, national origin, age, disability, or any other protected characteristic. WIOA Section 188 compliant.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-3 sm:mb-3 text-base sm:text-base">Grievance Procedure</h3>
                  <p className="text-slate-700 text-sm sm:text-sm">
                    Clear, fair process for addressing concerns. Informal resolution within 5 days, formal grievance within 15 days, appeal process available.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-3 sm:mb-3 text-base sm:text-base">Refund Policy</h3>
                  <p className="text-slate-700 text-sm sm:text-sm">
                    Full refund within 3 days. Pro-rated: 75% (0-6 hrs), 50% (7-12 hrs), 25% (13-18 hrs), no refund after 18 hours.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-3 sm:mb-3 text-base sm:text-base">Licensing Status</h3>
                  <p className="text-slate-700 text-sm sm:text-sm">
                    Program qualifies for Texas career school licensing exemption under Texas Education Code, Section 132.002(a)(8).
                  </p>
                </div>
              </div>
            </div>
            <div className="py-4 px-6 sm:px-8 text-center text-sm text-slate-500 border-t border-slate-200">
              AI Capability Specialist Certificate
            </div>
          </div>

          {/* ========== SLIDE 12: CLOSING ========== */}
          <div className="min-h-[85vh] sm:min-h-0 sm:aspect-[8.5/11] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl shadow-lg flex flex-col overflow-hidden print:rounded-none print:shadow-none print:h-screen print:aspect-auto">
            <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center items-center text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-6">Ready to Get Started?</h2>
              <p className="text-lg sm:text-xl text-slate-300 mb-10 sm:mb-12 max-w-2xl">
                Join the AI Capability Specialist Certificate program and gain the skills, tools, and employer connections you need for the AI-enhanced workplace.
              </p>

              <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full max-w-md sm:max-w-3xl mb-10 sm:mb-12 sm:grid-cols-4">
                <div className="bg-white/10 backdrop-blur rounded-xl p-4 sm:p-5">
                  <div className="text-xl sm:text-2xl font-bold mb-1 sm:mb-1">24 Hours</div>
                  <div className="text-slate-400 text-sm sm:text-sm">Intensive Training</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-4 sm:p-5">
                  <div className="text-xl sm:text-2xl font-bold mb-1 sm:mb-1">$8,000</div>
                  <div className="text-slate-400 text-sm sm:text-sm">Total Value</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-4 sm:p-5">
                  <div className="text-xl sm:text-2xl font-bold mb-1 sm:mb-1">100%</div>
                  <div className="text-slate-400 text-sm sm:text-sm">Interview Guarantee</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-4 sm:p-5">
                  <div className="text-xl sm:text-2xl font-bold mb-1 sm:mb-1">Free</div>
                  <div className="text-slate-400 text-sm sm:text-sm">Support Until Hired</div>
                </div>
              </div>

              <div className="text-slate-400 text-base sm:text-base">
                Texas ETPL Application Documentation
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

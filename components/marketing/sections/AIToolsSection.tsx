"use client";

import { Wrench } from "lucide-react";

export function AIToolsSection() {
  const toolCategories = [
    {
      name: "Text & Chat",
      tools: ["ChatGPT", "Claude", "Gemini", "Perplexity", "Microsoft Copilot"],
    },
    {
      name: "Image Generation",
      tools: ["Midjourney", "DALL-E 3", "Leonardo AI", "Ideogram", "Stable Diffusion", "Adobe Firefly"],
    },
    {
      name: "Video Production",
      tools: ["Sora 2", "VEO 3", "Kling", "Runway", "Pika", "HeyGen"],
    },
    {
      name: "Audio & Music",
      tools: ["ElevenLabs", "Suno", "Udio", "Adobe Podcast"],
    },
    {
      name: "Coding & Development",
      tools: ["Replit", "Cursor", "Claude Code", "GitHub Copilot"],
    },
    {
      name: "Productivity & Design",
      tools: ["Notion AI", "Gamma", "Nano Banana", "Canva AI", "Beautiful.ai"],
    },
  ];

  return (
    <section id="tools" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            <Wrench className="h-4 w-4" />
            $1,500+ Value Included
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Premium AI Tool Suite
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Access to 25+ industry-leading AI tools with all subscriptions included during your training
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {toolCategories.map((category, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.tools.map((tool, toolIndex) => (
                  <span
                    key={toolIndex}
                    className="inline-flex items-center rounded-full bg-white border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 bg-blue-50 rounded-lg p-4 inline-block">
            <strong className="text-blue-700">All subscriptions included</strong> — No additional costs during your training period
          </p>
        </div>
      </div>
    </section>
  );
}

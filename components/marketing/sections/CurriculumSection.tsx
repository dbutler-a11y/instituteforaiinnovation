"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Clock, BookOpen } from "lucide-react";

export function CurriculumSection() {
  const modules = [
    {
      title: "AI Foundations & Tool Landscape",
      hours: 3,
      description: "Understand the AI revolution, explore the ecosystem of AI tools, and learn how to evaluate and select the right tools for different tasks.",
      topics: [
        "Introduction to Large Language Models (LLMs)",
        "Overview of 25+ essential AI tools",
        "AI ethics and responsible use",
        "Setting up your AI toolkit",
      ],
    },
    {
      title: "Prompt Engineering Mastery",
      hours: 4,
      description: "Become a prompt expert by learning advanced techniques to get the best results from AI tools for different use cases.",
      topics: [
        "Prompt structure and best practices",
        "Chain-of-thought prompting",
        "Few-shot learning techniques",
        "Custom GPTs and prompt templates",
      ],
    },
    {
      title: "Visual Content Creation",
      hours: 4,
      description: "Master AI image generation tools like Midjourney, DALL-E, and Leonardo AI for professional graphics and visual content.",
      topics: [
        "Midjourney & DALL-E fundamentals",
        "Advanced image prompting techniques",
        "AI-powered photo editing",
        "Brand identity creation with AI",
      ],
    },
    {
      title: "Audio & Voice AI",
      hours: 3,
      description: "Explore voice synthesis, music generation, and audio editing with tools like ElevenLabs and Suno.",
      topics: [
        "Voice cloning and synthesis (ElevenLabs)",
        "AI music generation (Suno, Udio)",
        "Podcast production with AI",
        "Audio enhancement and editing",
      ],
    },
    {
      title: "Video Production with AI",
      hours: 4,
      description: "Create and edit videos using AI-powered tools from script to screen with RunwayML, Kling, and VEO 3.",
      topics: [
        "AI video generation (Runway, Kling, VEO 3)",
        "Avatar and synthetic media creation",
        "Automated video editing and enhancement",
        "Short-form content optimization",
      ],
    },
    {
      title: "Coding with AI Assistance",
      hours: 3,
      description: "Leverage AI coding assistants to build websites, apps, and automation scripts with Replit and Claude Code.",
      topics: [
        "AI coding assistants overview",
        "No-code/low-code development with AI",
        "Automating workflows with AI scripts",
        "Building web apps with AI help",
      ],
    },
    {
      title: "Portfolio & Career Prep",
      hours: 3,
      description: "Build a professional portfolio and prepare for interviews through our guaranteed interview pathway.",
      topics: [
        "Creating your AI capability portfolio",
        "Resume optimization with AI",
        "Interview preparation and mock sessions",
        "Networking with hiring partners",
      ],
    },
  ];

  const totalHours = modules.reduce((sum, module) => sum + module.hours, 0);

  return (
    <section id="curriculum" className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            <Clock className="h-4 w-4" />
            {totalHours} Hours Total
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Curriculum
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            7 comprehensive modules covering everything you need to become an AI Capability Specialist
          </p>
        </div>

        <div className="mt-12">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {modules.map((module, index) => (
              <AccordionItem
                key={index}
                value={`module-${index}`}
                className="border border-gray-200 bg-white rounded-lg overflow-hidden shadow-sm"
              >
                <AccordionTrigger className="px-6 hover:bg-gray-50 [&[data-state=open]]:bg-gray-50">
                  <div className="flex w-full items-start justify-between pr-4 text-left">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-base sm:text-lg">
                          {module.title}
                        </h3>
                        <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                          <Clock className="h-4 w-4" />
                          <span>{module.hours} hours</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="ml-11 space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      {module.description}
                    </p>
                    <div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-3">
                        <BookOpen className="h-4 w-4" />
                        <span>Key Topics:</span>
                      </div>
                      <ul className="space-y-2">
                        {module.topics.map((topic, topicIndex) => (
                          <li
                            key={topicIndex}
                            className="flex items-start gap-2 text-gray-600"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 shadow-lg">
            <Clock className="h-6 w-6 text-white" />
            <div className="text-left">
              <div className="text-sm font-medium text-blue-100">Total Program Duration</div>
              <div className="text-2xl font-bold text-white">{totalHours} Hours</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

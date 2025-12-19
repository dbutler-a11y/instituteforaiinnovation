"use client";

import { DollarSign, CheckCircle, Shield, CreditCard, Building, Banknote } from "lucide-react";

export function InvestmentSection() {
  const valueBreakdown = [
    { item: "24-Hour Core Program", value: "$8,000", included: false },
    { item: "AI Tool Suite Access", value: "$1,500", included: true },
    { item: "Additional Training Levels 2-4", value: "$1,800", included: true },
  ];

  const paymentOptions = [
    {
      icon: Building,
      title: "WIOA Funding",
      description: "Eligible for workforce vouchers through Texas Workforce Solutions",
    },
    {
      icon: Banknote,
      title: "Employer Sponsorship",
      description: "Many employers will sponsor employee training for AI skills",
    },
    {
      icon: CreditCard,
      title: "Payment Plans",
      description: "Flexible payment options available for self-paying students",
    },
  ];

  return (
    <section id="investment" className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Your Investment
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Transparent pricing with maximum value for your workforce development
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Price Card */}
          <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <DollarSign className="h-8 w-8" />
              <span className="text-lg font-medium">Total Program Cost</span>
            </div>
            <div className="text-6xl font-bold mb-2">$8,000</div>
            <p className="text-blue-100 mb-8">Complete AI Capability Specialist Certificate</p>

            <div className="space-y-4">
              {valueBreakdown.map((item, index) => (
                <div key={index} className="flex items-center justify-between border-t border-white/20 pt-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-200" />
                    <span>{item.item}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-semibold">{item.value}</span>
                    {item.included && (
                      <span className="ml-2 text-xs bg-white/20 px-2 py-0.5 rounded-full">
                        Included
                      </span>
                    )}
                  </div>
                </div>
              ))}
              <div className="flex items-center justify-between border-t border-white/20 pt-4 mt-4">
                <span className="font-bold text-lg">Total Value</span>
                <span className="text-2xl font-bold text-blue-200">$11,300</span>
              </div>
            </div>
          </div>

          {/* Payment Options */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Payment Options</h3>
            <div className="space-y-4">
              {paymentOptions.map((option, index) => {
                const Icon = option.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm border border-gray-200"
                  >
                    <div className="rounded-lg bg-blue-100 p-3">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{option.title}</h4>
                      <p className="mt-1 text-gray-600">{option.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Refund Guarantee */}
            <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-6">
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-emerald-600" />
                <div>
                  <h4 className="font-semibold text-emerald-900">3-Day Refund Guarantee</h4>
                  <p className="text-emerald-700 text-sm mt-1">
                    Full refund available within 3 days of enrollment if the program isn&apos;t right for you
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

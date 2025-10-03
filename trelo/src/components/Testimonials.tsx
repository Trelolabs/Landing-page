import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Trelo Labs felt like an extension of our team. We shipped faster than ever.",
      author: "Alex P.",
      role: "Founder, Fintech SaaS",
    },
    {
      quote: "The redesign moved the needle on retention within weeks.",
      author: "Sofia R.",
      role: "PM, HealthTech",
    },
    {
      quote: "Their AI automations halved our ticket volume while improving CSAT.",
      author: "Marcus L.",
      role: "Ops Lead, E-commerce",
    },
  ];

  return (
    <section id="testimonials" className="px-6 md:px-16 py-16 bg-gray-950 min-h-screen flex flex-col justify-center">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">What our partners say</h2>
        <p className="text-gray-500 text-sm">Results from recent clients</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((item, index) => (
          <TestimonialCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

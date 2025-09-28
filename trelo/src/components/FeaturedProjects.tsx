import React from "react";
import ProjectCard from "./ProjectCard";

const FeaturedProjects: React.FC = () => {
  const projects = [
    {
      image: "https://via.placeholder.com/400x250",
      title: "Fintech SaaS Launch",
      description: "Shipped MVP in 6 weeks; increased trial-to-paid by 28% with streamlined onboarding.",
      tech: "React, Next.js, Stripe",
    },
    {
      image: "https://via.placeholder.com/400x250",
      title: "Health App Redesign",
      description: "+35% retention after redesign and performance improvements across the stack.",
      tech: "React Native, Expo",
    },
    {
      image: "https://via.placeholder.com/400x250",
      title: "AI Support Copilot",
      description: "Reduced support workload by 50% using fine-tuned LLM workflows and automations.",
      tech: "Python, OpenAI, LangChain",
    },
  ];

  return (
    <section className="px-6 md:px-16 py-16 bg-gray-950 text-white">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">Featured Projects & Case Studies</h2>
        <button className="px-4 py-2 bg-gray-800 rounded-lg text-sm hover:bg-gray-700">
          See Full Case Studies
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;

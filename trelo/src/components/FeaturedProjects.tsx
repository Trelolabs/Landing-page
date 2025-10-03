import React from "react";
import ProjectCard from "./ProjectCard";

const FeaturedProjects: React.FC = () => {
  const projects = [
    {
      image: "/images/foodai-logo.png",
      title: "Food AI App",
      description: "An innovative mobile app leveraging AI to provide personalized food recommendations and nutritional insights to users.",
      tech: "React Native, AI/ML, Firebase",
      liveUrl: "https://foodai07.lovable.app/",
      githubUrl: "https://github.com/Shyam0129/starter-spark-mobile",
    },
    {
      image: "https://img.freepik.com/free-vector/taxi-app-concept_23-2148485646.jpg",
      title: "RideShare Platform",
      description: "A modern ride-booking platform connecting riders with drivers, featuring real-time tracking and secure payments.",
      tech: "React, Node.js, MongoDB",
      liveUrl: "https://ridemamaa.netlify.app",
      githubUrl: "https://github.com/Shyam0129/RideShare",
    },
    {
      image: "https://img.freepik.com/free-vector/chatbot-artificial-intelligence-abstract-concept-illustration_335657-3723.jpg",
      title: "AI MCP Chat App",
      description: "Advanced chat application with AI integration, enabling intelligent conversations and automated responses.",
      tech: "React, OpenAI, WebSocket",
      liveUrl: "https://homer.ai",
      githubUrl: "https://github.com/Shyam0129/New-Beggining",
    },
  ];

  return (
    <section id="projects" className="px-6 md:px-16 py-16 bg-gray-950 text-white min-h-screen">
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

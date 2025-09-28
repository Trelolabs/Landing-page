import React from "react";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tech: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, tech }) => (
  <div className="border border-gray-700 rounded-xl p-4 bg-gray-900">
    <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg mb-4" />
    <h3 className="font-semibold text-lg text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm mb-3">{description}</p>
    <p className="text-gray-500 text-sm">{tech}</p>
  </div>
);

export default ProjectCard;

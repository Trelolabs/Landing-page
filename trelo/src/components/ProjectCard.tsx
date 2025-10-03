import React from "react";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tech: string;
  liveUrl: string;
  githubUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, tech, liveUrl, githubUrl }) => (
  <div className="border border-gray-700 rounded-xl p-4 bg-gray-900 group relative transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
    <div className="relative">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
      <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center gap-4">
        <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          View Live
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
          View Code
        </a>
      </div>
    </div>
    <h3 className="font-semibold text-lg text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm mb-3">{description}</p>
    <p className="text-gray-500 text-sm">{tech}</p>
  </div>
);

export default ProjectCard;

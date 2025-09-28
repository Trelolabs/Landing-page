import React from "react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  avatar = "https://via.placeholder.com/48"
}) => (
  <div className="bg-gray-900 border border-gray-700 p-6 rounded-xl flex gap-4">
    <img src={avatar} alt={author} className="w-12 h-12 rounded-full object-cover" />
    <div>
      <p className="text-gray-300 mb-3">“{quote}”</p>
      <p className="text-sm text-gray-500">{author}, {role}</p>
    </div>
  </div>
);

export default TestimonialCard;

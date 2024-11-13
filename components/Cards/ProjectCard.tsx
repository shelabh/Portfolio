'use client'
import React from 'react';

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  skills: string[];
  liveLink?: string;
  learnMore: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, title, subtitle, skills, liveLink, learnMore }) => {
  return (
    <div className="border rounded-md   flex flex-col gap-2">
      	{/* Image section */}
      	<div className=" w-full flex justify-center">
        	<img src={imageUrl} alt={title} className="   rounded-t-md  " />
      	</div>
	{/* Title section */}
      	<div className="flex flex-col p-4">
          <div className="text-2xl font-bold">{title}</div>
          <p className="text-[#ABB2BF] ">{subtitle}</p>
        </div>
      
      {/* Skills section */}
      <div className="px-4">
        <p className="text-sm text-gray-500 mb-2">Skills:</p>
        <div className="grid grid-cols-3 gap-3">
          {skills.map((skill, index) => (
            <span key={index} className="flex flex-row items-center justify-center p-1 bg-gray-700 rounded-full text-xs">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Buttons section */}
      <div className={`flex p-4 ${liveLink ? 'justify-between' : 'justify-end'}`}>
      	{liveLink && (
		<a href={liveLink} target="_blank" rel="noopener noreferrer" className="border border-[#A78BF6] hover:bg-[#A78BF6]  font-bold py-2 px-4 rounded">
		Live
		</a>
      	)}
        <a href={learnMore}  rel="noopener noreferrer" className="border border-[#ABB2BF] hover:bg-[#ABB2BF] hover:text-black font-bold py-2 px-4 rounded">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

import React from "react";
import Projectcard from "./ProjectCard";

const projectData = [
  {
    id: 1,
    title: "Sadly I don't have one",
    description: "Proceed with caution?",
    image: "/projects/linkedout&about.png",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

const Project = () => {
  return (
    <div>
      <div className="text-4xl font-semibold mb-8">My Project </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-x-8 gap-y-4 h-full">
        {projectData.map((project) => (
          <Projectcard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            youtubeUrl={project.youtubeUrl}
          />
        ))}
      </div>
    </div>
  );
};
export default Project;

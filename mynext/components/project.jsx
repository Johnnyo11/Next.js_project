import React from "react";
import Projectcard from "./Projectcard";

const projectData = [
    {
        id: 1,
        title: "LinkedOut & About",
        description: "This is a project.",
        image: "/projects/linkedout&about.png",
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
];

const Project = () => {
    return(
        <div>
            <div clasName="text-4xl font-semibold mb-8">My Project </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-x-8 gap-y-4 h-full">
                {projectData.map((project)=>(
                    <Projectcard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        gitUrl={project.gitUrl}
                    />))}
            </div>
        </div>
    );
};
export default Project;

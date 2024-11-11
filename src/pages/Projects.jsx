import React from "react";
import Project from "../components/Project";
import { projectDetails } from "../Details";

function Projects() {
  return (
    <main className="bg-dark-mode container mx-auto max-width pt-5 pb-20">
      <section>
        <h1 className="text-xl text-dark-heading dark:text-cream md:text-3xl xl:text-4xl xl:leading-tight font-bold">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
          {React.Children.toArray(
            projectDetails.map(
              ({ title, image, description, techstack, githubLink }) => (
                <Project
                  title={title}
                  image={image}
                  description={description}
                  techstack={techstack}
                  githubLink={githubLink}
                />
              )
            )
          )}
        </div>
      </section>
    </main>
  );
}

export default Projects;

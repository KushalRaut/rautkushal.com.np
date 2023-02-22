import prisma from "lib/prisma";
import Container from "components/Container";
import ProjectCard from "components/ProjectCard";

export default function ProjectsPage({ fallbackData }) {
  return (
    <Container
      title="Projects – Kushal Raut"
      description="See some of my side projects."
    >
      <div className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Projects
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Building projects is what I love to do in my free time. Below are some
          of the projects I've built.All these projects are open source so be
          sure to checkout the source code.
        </p>
        <div className="grid grid-cols-2 gap-3">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </Container>
  );
}

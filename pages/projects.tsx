import prisma from "lib/prisma";
import Container from "components/Container";
import ProjectCard from "components/ProjectCard";
import { DiReact } from "react-icons/di";
import { SiNotion, SiStyledcomponents } from "react-icons/si";

const projects = [
  {
    title: "Hoobank",
    description:
      "A simple bank app made using React,Tailwind and an amazing UI",
    icons: (
      <>
        <DiReact className="text-xl mr-2" />
        <SiNotion className="text-xl" />
      </>
    ),
    img: "/sample.jpeg",
  },
  {
    title: "Crytobank",
    description:
      "A complete landing page with animated background and breathtaking UI.",
    icons: (
      <>
        <DiReact className="text-xl mr-2" />
        <SiStyledcomponents className="text-xl" />
      </>
    ),
    img: "/cryptobank.jpeg",
  },
];

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
          {
            "Building projects is what I love to do in my free time. Below are some of the projects I've built.All these projects are open source so be sure to checkout the source code."
          }
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => {
            return (
              <ProjectCard
                title={project.title}
                description={project.description}
                icons={project.icons}
                img={project.img}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
}

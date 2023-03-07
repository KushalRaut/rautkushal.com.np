import Image from "next/image";
import React from "react";
import { DiReact } from "react-icons/di";
import { SiNotion } from "react-icons/si";

const ProjectCard = () => {
  return (
    <div className="group border border-1 border-gray-400 rounded-lg p-5 cursor-pointer hover:scale-103 hover:transition-all">
      <div className="flex flex-col">
        <h2 className="text-white text-xl font-bold">Hoobank</h2>
        <p className="text-gray-500">
          A simple bank app made using React,Tailwind and an amazing UI
        </p>
        <div className="flex flex-row mt-2 text-white">
          <DiReact className="text-xl mr-2" />
          <SiNotion className="text-xl" />
        </div>
        <div className="my-2 rounded-lg flex items-center justify-center">
          <Image
            src="/sample.jpeg"
            width={400}
            height={200}
            alt={"project-img"}
          />
        </div>
        <div>
          <p className="text-white">See More</p>
          <div className="w-2/5 border border-b-2 hidden group-hover:block group-hover:transition-opacity" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

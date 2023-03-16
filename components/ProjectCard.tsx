import Image from "next/image";
import React from "react";
import { DiReact } from "react-icons/di";
import { SiNotion } from "react-icons/si";
import { FiArrowUpRight } from "react-icons/fi";

const ProjectCard = () => {
  return (
    <div className="group flex flex-col justify-center  border border-1 border-gray-400 rounded-lg p-3 cursor-pointer lg:max-h-[18.5rem] hover:scale-103 hover:transition-all">
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
        <p className="text-white flex items-center gap-2">
          See Live <FiArrowUpRight />
        </p>
        <div className="w-0 h-[2px] bg-gradient-to-r from-green-300 to-blue-300 transition-all duration-[400ms] group-hover:w-2/5" />
      </div>
    </div>
  );
};

export default ProjectCard;

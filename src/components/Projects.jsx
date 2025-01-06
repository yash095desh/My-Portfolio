import React from "react";
import Title from "./Title";
import Image from "next/image";
import OpenUrl from "./icons/OpenUrl";

const Projects = ({ projects }) => {
  return (
    <div
      className=" py-20 lg:px-10 bg-[#F3F3F3] flex flex-col items-center justify-center "
      id="Work"
    >
      <Title text={"My Work"} />
      <p className="text-[#4B5563] mt-4">
        Some of the noteworthy projects I have built:
      </p>
      {/* Projects Section */}
      {projects?.map((project, index) => (
        <div
          className={`flex lg:flex-row justify-between items-center gap-20 my-20 lg:mx-20 ${
            index % 2 === 0 ? "flex-col" : "flex-col-reverse"
          }`}
          key={index}
        >
          {index % 2 === 0 && (
            <div className=" relative w-full h-60 lg:h-80 lg:basis-[60%] rounded-lg overflow-hidden">
              <Image
                src={project.image}
                fill
                alt="website Image"
                className=" object-cover"
              />
            </div>
          )}
          <div className=" flex flex-col gap-4 basis-[50%]">
            <h1 className=" text-2xl font-bold">{project.title}</h1>
            <div className=" flex flex-col gap-4 text-[#4B5563]">
              <p>{project.description}</p>
              <div className=" flex gap-2 flex-wrap">
                {project.skills.map((skill) => (
                  <p
                    className=" text-xs lg:text-sm bg-slate-600 text-white px-4 py-2 rounded-lg"
                    key={skill}
                  >
                    {skill}
                  </p>
                ))}
              </div>
              <a href={project.url} target="_blank" className="">
                <OpenUrl />
              </a>
            </div>
          </div>
          {index % 2 !== 0 && (
            <div className=" relative w-full h-80 lg:basis-[50%] rounded-lg overflow-hidden">
              <Image
                src={project.image}
                fill
                alt="Computer Icon"
                className=" object-cover"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Projects;

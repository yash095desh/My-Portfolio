import React from "react";
import Title from "./Title";
import Image from "next/image";

const Skills = ({ skills }) => {
  return (
    <div
      className=" py-20 px-10 flex flex-col items-center justify-center "
      id="Skills"
    >
      <Title text={"Skills"} />
      <p className="text-[#4B5563] mt-4 text-center lg:text-start">
        The skills, tools and technologies I am really good at:
      </p>
      {/* Skills-Icon Section */}
      <div className=" grid grid-cols-4 lg:grid-cols-6 mt-10 gap-6 my-20 mx-20 w-full">
        {skills?.map((skill) => {
          return (
            <div key={skill.name} className="flex flex-col items-center gap-2">
              <div className=" h-10 lg:h-16 w-10 lg:w-16 relative">
                <Image
                  src={`${skill.icon}`}
                  fill
                  alt={skill.name}
                  className=" object-contain"
                />
              </div>
              <p className="text-sm lg:text-base">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;

import Image from "next/image";
import React from "react";
import Title from "./Title";

const About = () => {
  return (
    <div
      className=" bg-[#F3F3F3] py-20 px-10 flex flex-col items-center justify-center"
      id="About"
    >
      {/* Title */}
      <Title text={"About"} />
      {/* About Section */}
      <div className=" flex flex-col lg:flex-row justify-between items-center gap-20 my-20">
        <div className=" relative lg:w-full w-80 h-80 lg:basis-[50%]">
          <Image
            src={"ComputerIcon.svg"}
            fill
            alt="Computer Icon"
            className=" object-contain"
          />
        </div>
        <div className=" flex flex-col gap-4 basis-[50%]">
          <h1 className=" text-2xl font-bold">
            Curious about me? Here you have it:
          </h1>
          <div className=" flex flex-col gap-4 text-[#4B5563]">
            <p>
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </p>
            <p>
              I began my journey as a web developer in 2022, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, at 19 years old, I'm building cutting-edge web applications
              using modern technologies such as the MERN stack, Next.js, and
              much more.
            </p>
            <p>
              I am very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development.
            </p>
            <p>
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

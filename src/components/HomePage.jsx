import React from "react";
import Github from "@/components/icons/Github";
import Linkedin from "@/components/icons/Linkedin";
import Location from "@/components/icons/Location";
import Twitter from "@/components/icons/Twitter";
import Image from "next/image";
import { Typewriter } from 'react-simple-typewriter';

const HomePage = () => {
  return (
    <div className=" flex flex-col-reverse lg:grid lg:grid-cols-5 gap-4 py-20 px-10">
      {/* LeftSide */}
      <div className=" lg:col-span-3 flex flex-col justify-between items-center lg:items-start gap-2 lg:gap-5 py-10 ">
        <h1 className=" text-3xl lg:text-5xl font-medium flex items-center gap-4">
          Hello
          <Image src={"Hello.svg"} height={36} width={36} alt="Hello Icon" />,
        </h1>

        <div className="flex items-start text-3xl lg:text-5xl font-medium gap-2">
          <h1>
            I am a{" "}
            <span className="">
              <Typewriter
                words={["Yash Deshmukh", "Full Stack Developer"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
        </div>
        <p className=" text-lg ">
          I'm a full stack developer (React.js & Node.js) with a focus on
          creating seamless web and mobile experiences. build efficient,
          scalable, and user-friendly applications that deliver impact..
        </p>
        <div className="flex text-end gap-2 ">
          <Location />
          <p className="text-[#4B5563] ">Pune, India</p>
        </div>
        <div className=" flex gap-2 items-center">
          <a
            href="https://github.com/yash095desh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
          <a
            href="https://x.com/yashdesh095"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter />
          </a>
          <a
            href="https://www.linkedin.com/in/yash-deshmukh095/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>
        </div>
      </div>
      {/* RightSide */}
      <div className=" lg:col-span-2 relative lg:w-full w-80 h-80 lg:h-full  animated-image m-auto">
        <Image
          src={"Avatar.svg"}
          className="object-cover h-full "
          alt="Avatar Image"
          fill
        />
      </div>
    </div>
  );
};

export default HomePage;

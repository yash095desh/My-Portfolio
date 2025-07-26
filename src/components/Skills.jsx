"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Title from "./Title";

// Skill Data
const frontendSkills = [
  { name: "React", icon: "/icons/react.svg" },
  { name: "Next.js", icon: "/icons/nextjs.svg" },
  { name: "JavaScript", icon: "/icons/js.svg" },
  { name: "TypeScript", icon: "/icons/ts.svg" },
  { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
];

const backendSkills = [
  { name: "Node.js", icon: "/icons/nodejs.svg" },
  { name: "Express.js", icon: "/icons/express.svg" },
  { name: "WebSockets", icon: "/icons/socket.svg" },
  { name: "MongoDB", icon: "/icons/mongodb.svg" },
  { name: "Git & GitHub", icon: "/icons/git.svg" },
  { name: "Docker", icon: "/icons/docker.svg" },
];

// Skill Badge
const SkillBadge = ({ skill }) => (
  <div
    className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-dark-surface2 dark:border-dark-muted border border-gray-200 rounded-full shadow-sm min-w-max transition hover:scale-105"
  >
    {/* icon */}
    <div className="relative w-5 h-5">
      <Image src={skill.icon} alt={skill.name} fill className="object-contain" />
    </div>
    {/* name */}
    <p className="text-sm text-gray-700 dark:text-dark-muted whitespace-nowrap font-medium">{skill.name}</p>
  </div>
);

/**
 * LoopingRow explains:
 * - overflow-hidden: hides extra animation content
 * - mask-image: creates a fade effect on left & right edges
 */
const LoopingRow = ({ skills, reverse = false, paused = false }) => {
  const containerRef = useRef(null);
  const [repeatCount, setRepeatCount] = useState(2);

  useEffect(() => {
    const calculateRepeatCount = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      const badgeWidth = 140;
      const setWidth = Math.max(badgeWidth * skills.length, 1);
      const count = Math.max(Math.ceil((containerWidth * 2) / setWidth), 1);
      setRepeatCount(count);
    };

    calculateRepeatCount();
    window.addEventListener("resize", calculateRepeatCount);
    return () => window.removeEventListener("resize", calculateRepeatCount);
  }, [skills]);

  const repeatedSkills = repeatCount > 0
    ? Array.from({ length: repeatCount }, () => skills).flat()
    : skills;

  return (
    <div
      ref={containerRef}
      className="overflow-hidden w-full py-6 [mask-image:_linear-gradient(to_right,transparent_0,_black_96px,_black_calc(100%-96px),transparent_100%)]"
    >
      <motion.div
        className="flex gap-6 w-max"
        animate={paused ? undefined : { x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
      >
        {repeatedSkills.map((skill, index) => (
          <SkillBadge key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </motion.div>
    </div>
  );
};

// Main Component
const Skills = () => {
  const [paused, setPaused] = useState(false);

  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-10 flex flex-col items-center justify-center bg-[#F3F3F3] dark:bg-dark-surface transition-colors duration-300"
    >
      <Title text="Skills" />
      
      {/* Description */}
      <p className="text-[#4B5563] dark:text-dark-muted mt-4 text-center max-w-2xl text-sm md:text-base">
        The skills, tools, and technologies I am confident and experienced in:
      </p>

      {/* Looping Rows */}
      <div
        className="mt-12 space-y-4 md:space-y-6 w-full max-w-6xl cursor-pointer"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <LoopingRow skills={frontendSkills} reverse={false} paused={paused} />
        <LoopingRow skills={backendSkills} reverse={true} paused={paused} />
      </div>
    </section>
  );
};

export default Skills;

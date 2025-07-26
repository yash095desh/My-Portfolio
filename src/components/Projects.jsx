"use client";

import React from "react";
import Title from "./Title";
import Image from "next/image";
import OpenUrl from "./icons/OpenUrl";
import { motion } from "motion/react";

const Projects = ({ projects }) => {
  return (
    <div
      className="py-20 px-4 lg:px-10 flex flex-col items-center justify-center "
      id="projects"
    >
      <Title text={"My Work"} />
      <p className="text-[#4B5563] dark:text-dark-muted mt-4">
        A few notable projects I've developed:
      </p>

      {/* Projects Section */}
      {projects?.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: index * 0.2,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.3 }}
          className={`flex lg:flex-row justify-between items-stretch gap-10 my-10 lg:mx-20 ${
            index % 2 === 0
              ? "flex-col"
              : "flex-col lg:flex-row-reverse"
          }`}
        >
          {/* Image Section */}
          <motion.div
            className="w-full lg:w-1/2 flex items-stretch"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.25 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full rounded-lg overflow-hidden ">
              <Image
                src={project.image}
                alt="project image"
                width={600}
                height={400}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </motion.div>

          {/* Text Content Section */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col justify-between gap-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            viewport={{ once: true }}
          >
            <h1 className="text-2xl font-bold text-gray-900 dark:text-dark-text">
              {project.title}
            </h1>
            <div className="flex flex-col gap-4 text-[#4B5563] dark:text-dark-muted">
              <p>{project.description}</p>
              <div className="flex gap-2 flex-wrap">
                {project.skills.map((skill) => (
                  <motion.p
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="text-xs lg:text-sm bg-slate-600 dark:bg-dark-surface2 text-white dark:text-dark-text px-4 py-2 rounded-lg"
                  >
                    {skill}
                  </motion.p>
                ))}
              </div>
              <motion.a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-fit"
              >
                <OpenUrl />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;

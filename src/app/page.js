"use client";
import HomePage from "@/components/HomePage";
import Copied from "@/components/icons/Copied";
import Copy from "@/components/icons/Copy";
import OpenUrl from "@/components/icons/OpenUrl";
import Navbar from "@/components/Navbar";
import Title from "@/components/Title";
import Image from "next/image";
import { useRef, useState } from "react";


import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const skills = [
    {
      icon: "icon-javascript.svg",
      name: "JavaScript",
    },
    {
      icon: "icon-typescript.svg",
      name: "TypeScript",
    },
    {
      icon: "icon-react.svg",
      name: "React.js",
    },
    {
      icon: "icon-nodejs.svg",
      name: "Node.js",
    },
    {
      icon: "icon-express.svg",
      name: "Express.js",
    },
    {
      icon: "icon-mongodb.svg",
      name: "MongoDB",
    },
    {
      icon: "icon-socket.svg",
      name: "Socket.js",
    },
    {
      icon: "icon-tailwindcss.svg",
      name: "Tailwind",
    },
    {
      icon: "icon-figma.svg",
      name: "Figma",
    },
    {
      icon: "icon-git.svg",
      name: "Git",
    },
  ];

  const projects = [
    {
      image: "foodOrderingWebsite.svg",
      title: "Food Ordering App",
      description:
        "Built with MERN stack and Next.js, featuring a seamless user experience.Ensured secure and efficient transactions with fully functional payment gateways.Designed an admin interface for managing orders, users, and restaurant data.Ensured the application is fully responsive and mobile-friendly, providing a consistent user experience across devices.",
      skills: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwindcss",
        "Figma",
        "Nextjs",
        "Stripe",
      ],
      url: "https://food-ordering095-app.vercel.app/",
    },
  ];

  return (
    <div className=" lg:max-w-screen-xl xl:max-w-screen-2xl mx-auto">
      {/* NavBar */}
      <Navbar />
      {/* Hero-Section */}
      <HomePage />
      {/* About */}
      <About />
      {/* Skills */}
      <Skills skills={skills} />
      {/* Work */}
      <Projects projects={projects} />
      {/* Contact Form */}
      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  );
}

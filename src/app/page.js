"use client";
import HomePage from "@/components/HomePage";
import Navbar from "@/components/Navbar";
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
      image: "stayFinder.svg",
      title: "StayFinder",
      description:
        "An end-to-end property booking platform built with the MERN stack and Next.js. Hosts can manage listings and view analytics on a custom dashboard, while users can reserve and confirm bookings via Razorpay. Unpaid bookings auto-expire after 2 hours using Inngest background jobs. The app features Clerk authentication, responsive UI with Tailwind & ShadCN, and smooth animations via Motion.",
      skills: [
        "Next.js",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Clerk Auth",
        "Inngest",
        "Razorpay",
        "Tailwind CSS",
        "ShadCN UI",
        "Motion",
      ],
      url: "https://stay-finder-fawn.vercel.app",
    },
     {
      image: "quickChat.svg",
      title: "Quick Chat",
      description:
        "A real-time chat application built with the MERN stack and Socket.IO. Implements Google Sign-In for seamless authentication and secure user access. Designed to deliver smooth, responsive messaging across all devices. The UI is crafted with Tailwind CSS and Figma, ensuring a clean and intuitive user experience. Ideal for showcasing real-time communication capabilities and authentication workflows.",
      skills: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.io",
        "Tailwindcss",
        "Figma",
        "Nextjs",,
      ],
      url: "https://quick-chat-pearl-eta.vercel.app/",
    },
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
    }
  ];

  return (
    <div className="lg:max-w-screen-xl xl:max-w-screen-2xl mx-auto">
      {/* NavBar */}
      <Navbar />
      {/* Hero-Section */}
      <HomePage />
      {/* Skills */}
      <Skills />
      {/* Work */}
      <Projects projects={projects} />
      {/* Contact Form */}
      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  );
}

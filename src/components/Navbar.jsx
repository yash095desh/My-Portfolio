"use client"
import React, { useState } from "react";
import Image from "next/image";
import ThreeBar from "./icons/ThreeBar";
import Remove from "./icons/Remove";

function Navbar() {
  const [open,setOpen] = useState(false)

  return (
    <div className=" flex w-full justify-between items-center py-4 px-10">
      {/* Logo */}
      <div className=" flex gap-2">
        <Image src={"logo.svg"} height={36} width={36} alt="Logo Image" />
        <h1 className="font-medium text-4xl">Yash</h1>
      </div>

      {/* NavLinks */}
      <nav className="hidden md:block">
        <ul className="flex gap-6 lg:gap-10 items-center text-lg list-none">
          <li>
            <a
              href="#About"
              className="hover:text-blue-500 active:text-blue-700"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#Work"
              className="hover:text-blue-500 active:text-blue-700"
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="#Skills"
              className="hover:text-blue-500 active:text-blue-700"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact-us"
              className="hover:text-blue-500 active:text-blue-700"
            >
              Contact Us
            </a>
          </li>
          <li>
            <a href="resume.pdf" download="Yash_Resume.pdf" className="px-8 py-4 border border-black rounded-lg hover:bg-black hover:text-white ">
              Download CV
            </a>
          </li>
        </ul>
      </nav>

      <nav className={`md:hidden floatingNavbar fixed bottom-0 left-0 right-0 py-20  bg-white z-10 rounded-2xl shadow-2xl shadow-black ${!open && ' hide'}`}>
        <ul className=" grid grid-cols-2 gap-10 text-lg list-none">
          <li>
            <a
              href="#About"
              className="hover:text-blue-500 active:text-blue-700"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#Work"
              className="hover:text-blue-500 active:text-blue-700"
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="#Skills"
              className="hover:text-blue-500 active:text-blue-700"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact-us"
              className="hover:text-blue-500 active:text-blue-700"
            >
              Contact Us
            </a>
          </li>
          <li className="col-span-2">
            <a href="resume.pdf" download="Yash_Resume.pdf" className="px-8 py-4 border border-black rounded-lg hover:bg-black hover:text-white ">
              Download CV
            </a>
          </li>
        </ul>
        <div className="absolute top-0 right-0 p-4 cursor-pointer" onClick={()=>setOpen(false)}>
          <Remove/>
        </div>
      </nav>

      <div className=" md:hidden cursor-pointer" onClick={()=>setOpen(true)}>
        <ThreeBar/>
      </div>
    </div>
  );
}

export default Navbar;

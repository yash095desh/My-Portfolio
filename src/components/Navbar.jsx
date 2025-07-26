"use client";

import React, { useEffect, useLayoutEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import ThreeBar from "./icons/ThreeBar";
import Remove from "./icons/Remove";
import Sun from "./icons/Sun";
import Moon from "./icons/Moon";

const navLinks = [
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  // Handle scroll shadow/effects
  useLayoutEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme toggle logic
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <>
      <div
        className={`fixed inset-x-0 z-50 flex justify-center transition-all duration-300 ${
          scrolled ? "top-6" : "top-0"
        }`}
      >
        <div className="w-full lg:max-w-screen-xl xl:max-w-screen-2xl mx-auto">
          <motion.div
            animate={{
              backgroundColor: scrolled
                ? "rgba(255,255,255,0.3)"
                : "rgba(255,255,255,0)",
              backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
              border: scrolled
                ? "1px solid rgba(255,255,255,0.2)"
                : "1px solid rgba(255,255,255,0)",
              boxShadow: scrolled
                ? "0 10px 30px rgba(0, 0, 0, 0.15)"
                : "0 0px 0px rgba(0, 0, 0, 0)",
              width: scrolled ? "95%" : "100%",
              maxWidth: scrolled ? "72rem" : "100%",
            }}
            transition={{ duration: 0.4, ease: "linear" }}
            className="rounded-2xl px-6 py-4 flex justify-between items-center mx-auto dark:bg-black/70 dark:text-white"
          >
            {/* Logo */}
            <div className="flex gap-2 items-center">
              <Image src="/logo.svg" height={36} width={36} alt="Logo Image" />
              <h1 className="font-medium text-3xl">Yash</h1>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:block">
              <ul className="flex gap-6 items-center text-base font-medium text-black/80 dark:text-white/80">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={href}
                      className="transition-colors hover:text-blue-500 active:text-blue-700 dark:hover:text-blue-400"
                    >
                      {label}
                    </motion.a>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => setDark(!dark)}
                    className="w-24 h-10 relative rounded-full overflow-hidden border border-gray-400 dark:border-gray-200 bg-white dark:bg-dark-surface p-1 shadow-md dark:shadow-[0_0_10px_2px_rgba(255,255,255,0.15)]
    transition-shadow duration-300"
                  >
                    {/* Icons wrapper */}
                    <div className="w-full h-full flex items-center justify-center relative">
                      {/* Moon (left) */}
                      <div className="absolute left-1 top-1/2 -translate-y-1/2">
                        <Moon className="w-6 h-6 text-blue-500" />
                      </div>

                      {/* Sun (right) */}
                      <div className="absolute right-1 top-1/2 -translate-y-1/2">
                        <Sun className="w-6 h-6 text-yellow-400" />
                      </div>

                      {/* Sliding cover */}
                      <motion.div
                        animate={{
                          left: dark ? "50%" : "0%",
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                        className={`
    absolute top-0 left-0 h-full w-1/2 rounded-full z-20
    bg-dark-muted dark:bg-dark-surface2
    shadow-md dark:shadow-[0_0_10px_2px_rgba(255,255,255,0.15)]
    transition-shadow duration-300
  `}
                      />
                    </div>
                  </button>
                </li>
                <li>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="/resume.pdf"
                    download="Yash_Resume.pdf"
                    className="px-4 py-2 border border-black/50 dark:border-white/50 rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
                  >
                    Download CV
                  </motion.a>
                </li>
              </ul>
            </nav>

            <div className=" md:hidden flex items-center gap-2">
              {/* Burger Icon */}

              <button
                onClick={() => setDark(!dark)}
                className="w-24 h-10 relative rounded-full overflow-hidden border border-gray-400 dark:border-gray-200 bg-white dark:bg-dark-surface p-1 shadow-md dark:shadow-[0_0_10px_2px_rgba(255,255,255,0.15)]
    transition-shadow duration-300"
              >
                {/* Icons wrapper */}
                <div className="w-full h-full flex items-center justify-center relative">
                  {/* Moon (left) */}
                  <div className="absolute left-1 top-1/2 -translate-y-1/2">
                    <Moon className="w-6 h-6 text-blue-500" />
                  </div>

                  {/* Sun (right) */}
                  <div className="absolute right-1 top-1/2 -translate-y-1/2">
                    <Sun className="w-6 h-6 text-yellow-400" />
                  </div>

                  {/* Sliding cover */}
                  <motion.div
                    animate={{
                      left: dark ? "50%" : "0%",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                    className={`
    absolute top-0 left-0 h-full w-1/2 rounded-full z-20
    bg-dark-muted dark:bg-dark-surface2
    shadow-md dark:shadow-[0_0_10px_2px_rgba(255,255,255,0.15)]
    transition-shadow duration-300
  `}
                  />
                </div>
              </button>

              <motion.div
                className=" cursor-pointer text-black dark:text-dark-text"
                onClick={() => setOpen(true)}
                whileTap={{ scale: 0.9, rotate: 15 }}
              >
                <ThreeBar />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-dark-surface text-black dark:text-dark-text z-40 rounded-t-2xl shadow-2xl px-6 pt-20 pb-10"
          >
            <ul className="grid grid-cols-2 gap-10 text-lg list-none">
              {navLinks.map(({ href, label }) => (
                <li key={href} className=" text-center">
                  <motion.a
                    whileTap={{ scale: 0.95 }}
                    href={href}
                    onClick={() => setOpen(false)}
                    className="hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    {label}
                  </motion.a>
                </li>
              ))}
              <li className="col-span-2">
                <motion.a
                  whileTap={{ scale: 0.95 }}
                  href="/resume.pdf"
                  download="Yash_Resume.pdf"
                  className="block text-center px-8 py-4 border border-black dark:border-white rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
                >
                  Download CV
                </motion.a>
              </li>
            </ul>
            <div
              className="absolute top-0 right-0 p-4 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <Remove />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

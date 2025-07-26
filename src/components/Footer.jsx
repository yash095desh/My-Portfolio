"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Copied from "./icons/Copied";
import Copy from "./icons/Copy";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(text);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="py-20 px-10 flex flex-col gap-4 justify-center items-center"
    >
      <motion.p
        variants={fadeUp}
        custom={0}
        className="max-w-lg text-center text-[#4B5563] dark:text-dark-muted"
      >
        What’s next? Feel free to reach out to me if you're looking for a
        developer, have a query, or simply want to connect.
      </motion.p>

      <motion.h1
        variants={fadeUp}
        custom={1}
        className="text-gray-900 dark:text-dark-text text-2xl font-bold flex items-center gap-2"
      >
        yashdesh095@gmail.com
        <span
          className="hover:opacity-50 cursor-pointer"
          onClick={() => handleCopy("yashdesh095@gmail.com")}
        >
          <AnimatePresence mode="wait">
            {copied === "yashdesh095@gmail.com" ? (
              <motion.span
                key="copied-email"
                initial={{ scale: 0 }}
                animate={{ scale: 1.2 }}
                exit={{ scale: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Copied />
              </motion.span>
            ) : (
              <motion.span
                key="copy-email"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <Copy />
              </motion.span>
            )}
          </AnimatePresence>
        </span>
      </motion.h1>

      <motion.h1
        variants={fadeUp}
        custom={2}
        className="text-gray-900 dark:text-dark-text text-2xl font-bold flex items-center gap-2"
      >
        +91 9691663719
        <span
          className="hover:opacity-50 cursor-pointer"
          onClick={() => handleCopy("+91 9691663719")}
        >
          <AnimatePresence mode="wait">
            {copied === "+91 9691663719" ? (
              <motion.span
                key="copied-phone"
                initial={{ scale: 0 }}
                animate={{ scale: 1.2 }}
                exit={{ scale: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Copied />
              </motion.span>
            ) : (
              <motion.span
                key="copy-phone"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <Copy />
              </motion.span>
            )}
          </AnimatePresence>
        </span>
      </motion.h1>

      <motion.p
        variants={fadeUp}
        custom={3}
        className="text-[#4B5563] dark:text-dark-muted mt-2"
      >
        Made with ❤️ by Yash Deshmukh
      </motion.p>
    </motion.div>
  );
};

export default Footer;

"use client";
import React, { useState } from "react";
import Copied from "./icons/Copied";
import Copy from "./icons/Copy";

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
    <div className=" py-20 px-10 bg-[#F3F3F3] flex flex-col gap-2 justify-center items-center">
      <p className=" max-w-lg text-center">
        What’s next? Feel free to reach out to me if you're looking for a
        developer, have a query, or simply want to connect.
      </p>
      <h1 className="gray-900 text-2xl font-bold flex items-center gap-2">
        yashdesh095@gmail.com
        <span
          className=" hover:opacity-50 cursor-pointer"
          onClick={() => handleCopy("yashdesh095@gmail.com")}
        >
          {copied === "yashdesh095@gmail.com" ? <Copied /> : <Copy />}
        </span>
      </h1>
      <h1 className="gray-900 text-2xl font-bold flex items-center gap-2">
        +91 9691663719
        <span
          className=" hover:opacity-50 cursor-pointer"
          onClick={() => handleCopy("+91 9691663719")}
        >
          {copied === "+91 9691663719" ? <Copied /> : <Copy />}
        </span>
      </h1>
      <p className="text-[#4B5563]">Made with ❤️ by Yash Deshmukh</p>
    </div>
  );
};

export default Footer;

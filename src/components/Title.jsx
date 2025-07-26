import React from "react";

const Title = ({ text }) => {
  return (
    <div className="px-4 py-2 rounded-md bg-[#6F6DBF] text-2xl sm:text-3xl md:text-4xl text-white inline font-medium transition-colors duration-300">
      {text}
    </div>
  );
};

export default Title;

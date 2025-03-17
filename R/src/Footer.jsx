import React from "react";

const Footer = () => {
  return (
    <div className="w-full py-6 bg-black flex justify-center items-center">
      <h1 className="text-white text-lg sm:text-xl font-semibold tracking-wide">
        Made with <span className="text-red-500 animate-pulse">❤️</span> by{" "}
        <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 text-transparent bg-clip-text">
          Bengali Baba
        </span>
      </h1>
    </div>
  );
};

export default Footer;

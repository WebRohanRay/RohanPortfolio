import React, { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleScroll = (id) => {
    setActive(id);
    setToggle(false); // Close mobile menu

    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = document.querySelector("nav").offsetHeight; // Get navbar height
      const yOffset =
        element.getBoundingClientRect().top + window.scrollY - navbarHeight - 10; // Adjust scroll position
      window.scrollTo({ top: yOffset, behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full flex items-center py-6 px-10 sm:px-40 fixed top-0 z-20 bg-black shadow-lg backdrop-blur-md bg-opacity-80">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2"
          onClick={() => handleScroll("hero")}
        >
          <img src="/vite.svg" alt="Logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex gap-2">
            Rohan <span className="sm:block hidden">Web Developer</span>
          </p>
        </a>

        {/* Desktop Nav */}
        <ul className="list-none text-white hidden sm:flex flex-row gap-10">
          {["about", "work", "contact"].map((item) => (
            <li key={item}>
              <button
                onClick={() => handleScroll(item)}
                className={`relative text-white text-lg transition-all duration-300 ${
                  active === item ? "text-blue-400" : "hover:text-blue-400"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}

                {/* Underline Animation */}
                <span
                  className={`absolute left-0 bottom-[-4px] w-full h-[2px] bg-blue-400 transition-transform ${
                    active === item ? "scale-x-100" : "scale-x-0"
                  } transform origin-left`}
                ></span>
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? "/xmark-solid.svg" : "/bars-solid.svg"}
            className="h-[28px] w-[28px] object-contain cursor-pointer transition-transform duration-300 hover:scale-110"
            alt="Menu"
            onClick={() => setToggle(!toggle)}
          />

          {/* Mobile Menu */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 absolute right-0 top-20 z-10 bg-black w-full transition-all duration-500 ease-in-out`}
          >
            <ul className="list-none text-white flex flex-col items-center w-full">
              {["about", "work", "contact"].map((item) => (
                <li key={item} className="my-2">
                  <button
                    onClick={() => handleScroll(item)}
                    className={`text-lg transition-all duration-300 ${
                      active === item ? "text-blue-400" : "hover:text-blue-400"
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

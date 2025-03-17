import React from "react";
import { BrowserRouter } from "react-router-dom";
import { motion } from "framer-motion"; 
import Navbar from "./Navbar";
import Hero from "./Hero";
import ModelContainer from "./ModelContainer";
import Overview from "./OverView/Overview";
import Work from "./Projects/Work";

const App = () => {
  return (
    <BrowserRouter>
      {/* Animated Background Gradient */}
      <motion.div
        className="relative min-h-screen"
        animate={{
          background: [
            "linear-gradient(to right, #000000, #1a1a1a, #000000)", 
            "linear-gradient(to right, #0f0f0f, #2b2b2b, #0f0f0f)",
            "linear-gradient(to right, #000000, #1a1a1a, #000000)",
          ],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Animated Grid Overlay */}
        <motion.div
          className="absolute inset-0 bg-transparent pointer-events-none"
          animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
          transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:80px_80px] opacity-10"></div>
        </motion.div>

        {/* Main Content */}
        <div className="relative flex flex-col z-10 pt-20">
          {/* Navbar */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }}
          >
            <Navbar />
          </motion.div>

          {/* Hero Section - Ultra Smooth */}
          <motion.div 
            className="top-[20px] will-change-transform will-change-opacity"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, ease: "easeInOut" }} // ✅ Long smooth ease-in-out
          >
            <Hero />
          </motion.div>
        </div>

        {/* Model Section - Smooth Scroll Animation */}
        <div className="relative sm:mx-20 mt-0">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.5 }} // ✅ Fixes jumpy animation
            className="will-change-transform will-change-opacity"
          >
            <ModelContainer className="w-full h-full" />
          </motion.div>
        </div>

        {/* Overview Section - Smooth Scroll Animation */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.5 }} // ✅ Prevents flickering
          className="will-change-transform will-change-opacity"
        >
          <Overview />
        </motion.div>

        {/* Work Section - Smooth Scroll Animation */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.5 }} // ✅ Improves smoothness
          className="will-change-transform will-change-opacity"
        >
          <Work />
        </motion.div>

      </motion.div>
    </BrowserRouter>
  );
};

export default App;

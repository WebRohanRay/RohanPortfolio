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
          duration: 4,  // ✅ Reduced duration to make it more dynamic
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Animated Grid Overlay */}
        <motion.div
          className="absolute inset-0 bg-transparent pointer-events-none"
          animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:80px_80px] opacity-10"></div>
        </motion.div>

        {/* Main Content */}
        <div className="relative flex flex-col z-10 pt-20">
          {/* Navbar */}
         
            <Navbar />
        

          {/* Hero Section - Optimized for Speed & Smoothness */}
          <motion.div 
            className="top-[20px] will-change-transform will-change-opacity"
            initial={{ opacity: 0, y: 30, scale: 0.98 }} // ✅ Prevents pop-in effect
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }} // ✅ Faster yet smooth
          >
            <Hero />
          </motion.div>
        </div>

        {/* Model Section - Improved Scroll Performance */}
        <div className="relative sm:mx-20 mt-0">
          <motion.div
            initial={{ y: 80, opacity: 0, scale: 0.95 }} // ✅ Makes it load faster
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }} 
            viewport={{ once: false, amount: 0.3 }} // ✅ Triggers sooner
            className="will-change-transform will-change-opacity"
          >
            <ModelContainer className="w-full h-full" />
          </motion.div>
        </div>

        {/* Overview Section - Better Performance */}
        <motion.div
          initial={{ y: 80, opacity: 0, scale: 0.95 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="will-change-transform will-change-opacity"
        >
          <Overview />
        </motion.div>

        {/* Work Section - Instant Smoothness */}
        <motion.div
          initial={{ y: 80, opacity: 0, scale: 0.95 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="will-change-transform will-change-opacity"
        >
          <Work />
        </motion.div>

      </motion.div>
    </BrowserRouter>
  );
};

export default App;

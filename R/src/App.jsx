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
          animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }} // Shift grid position
          transition={{ repeat: Infinity, duration: 5, ease: "linear" }} // Continuous animation
        >
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:80px_80px] opacity-10"></div>
        </motion.div>

        {/* Main Content */}
        <div className="relative flex flex-col z-10 pt-20">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <Navbar />
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
            <Hero />
          </motion.div>
        </div>

        <div className="relative sm:mx-20 mt-40">
          <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
            <ModelContainer className="w-full h-full" />
          </motion.div>
        </div>

        <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
          <Overview />
        </motion.div>

        <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
          <Work />
        </motion.div>

      </motion.div>
    </BrowserRouter>
  );
};

export default App;

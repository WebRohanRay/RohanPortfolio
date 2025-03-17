import React from "react";
import { BrowserRouter } from "react-router-dom";
import { motion } from "framer-motion"; 
import Navbar from "./Navbar";
import Hero from "./Hero";
import ModelContainer from "./ModelContainer";
import Overview from "./OverView/Overview";  // Represents About
import Work from "./Projects/Work";         // Represents Work
import Contact from "./Contact/Contact";    // Represents Contact
import Footer from "./Footer";

const App = () => {
  return (
    <BrowserRouter>
      {/* Animated Background Gradient */}
      <motion.div
        className="relative min-h-screen overflow-hidden"
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

        {/* Navbar */}
        <Navbar />

        {/* Sections */}
        {[
          { id: "hero", component: <Hero /> },
          { id: "model", component: <ModelContainer className="w-full h-full" /> },
          { id: "about", component: <Overview /> },
          { id: "work", component: <Work /> },
          { id: "contact", component: <Contact /> },
        ].map((section, index) => (
          <motion.div
            key={index}
            id={section.id}
            className="pt-[120px] will-change-transform will-change-opacity"
            initial={{ y: 80, opacity: 0, scale: 0.95 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {section.component}
          </motion.div>
        ))}

      </motion.div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

// Generate fixed particles initially
const particles = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  top: Math.random() * 100 + "%",
  left: Math.random() * 100 + "%",
  size: Math.random() * 8 + 3,
  color: ["#6366F1", "#14B8A6", "#F43F5E", "#9333EA"][Math.floor(Math.random() * 4)],
}));

const Hero = () => {
  return (
    <motion.div
      className="relative flex justify-center items-center h-[70vh] mt-16 px-6 overflow-hidden bg-gradient-to-b from-[#090909] via-[#121212] to-[#090909] rounded-2xl shadow-lg mx-auto max-w-4xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(99,102,241,0.2)_10%,rgba(0,0,0,0)_80%)] opacity-50"></div>

      {/* Circular Glow at Bottom */}
      <motion.div
        className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 w-[400px] h-[250px] bg-[radial-gradient(circle,rgba(99,102,241,0.3)_10%,rgba(0,0,0,0)_80%)] blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Smooth Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size + "px",
            height: particle.size + "px",
            backgroundColor: particle.color,
            top: particle.top,
            left: particle.left,
            opacity: 0.5,
            filter: "blur(3px)",
            boxShadow: `0 0 8px ${particle.color}`,
          }}
          animate={{
            x: [0, Math.random() * 50 - 25, Math.random() * 50 - 25],
            y: [0, Math.random() * 50 - 25, Math.random() * 50 - 25],
            opacity: [0, 0.8, 0],
            scale: [0.6, 1, 0.6],
          }}
          transition={{
            duration: Math.random() * 6 + 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* ✅ React-Tilt with Closer Borders */}
      <Tilt
        options={{
          max: 5, // ✅ Reduced tilt effect
          scale: 1.02, // ✅ Minimal hover scale
          speed: 300, // ✅ Smooth effect
          glare: true, 
          "max-glare": 0.1, // ✅ Reduced glare
        }}
        className="w-full"
      >
        {/* Hero Content */}
        <motion.div
          className="text-center py-8 px-36 sm:px-40 relative z-10"
          whileHover={{ scale: 1.01, boxShadow: "0px 5px 20px rgba(99,102,241,0.2)" }} // ✅ Softer hover effect
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight">
            Hi, I am{" "}
            <span className="text-blue-400 text-6xl sm:text-7xl relative inline-block">
              Rohan
              <motion.span
                className="absolute inset-0 blur-lg opacity-60 text-blue-400"
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                Rohan
              </motion.span>
            </span>
          </h1>

          <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            I am a <span className="text-blue-400 font-bold">Web Developer</span> and a{" "}
            <span className="text-blue-400 font-bold">UI/UX Designer</span>. <br className="sm:block" />
            I create <span className="text-teal-400 font-bold">beautiful</span> and{" "}
            <span className="text-pink-400 font-bold">functional</span> digital experiences.
          </p>
        </motion.div>
      </Tilt>
    </motion.div>
  );
};

export default Hero;

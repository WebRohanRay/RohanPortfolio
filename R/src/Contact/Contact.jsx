import React from "react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="flex items-center flex-col py-6 px-10 sm:px-40">
      {/* Title with Faster Animation */}
      <motion.h1 
        className="text-center text-6xl text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}  // Reduced duration
        viewport={{ once: false, amount: 0.3 }}
      >
        Contact Me
      </motion.h1>

      <div className="flex flex-col items-center justify-center mt-6 w-full max-w-4xl gap-8">
        {/* Faster Animated Contact Form with Blue Shadow */}
        <motion.div
          className="w-full max-w-lg p-6 bg-gradient-to-br from-[#121212] to-[#1a1a1a]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}  // Reduced duration
          viewport={{ once: false, amount: 0.3 }}
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(0, 123, 255, 0.5)" }} // Blue shadow
        >
          <ContactForm />
        </motion.div>

        {/* Faster Animated Social Icons with Blue Shadows */}
        <motion.div
          className="flex flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}  // Reduced duration and delay
          viewport={{ once: false, amount: 0.3 }}
        >
          {[
            { href: "https://github.com/", img: "https://img.icons8.com/ios-filled/50/github.png", alt: "GitHub" },
            { href: "https://www.instagram.com/", img: "https://img.icons8.com/fluency/48/instagram-new.png", alt: "Instagram" },
            { href: "https://www.linkedin.com/", img: "https://img.icons8.com/color/48/linkedin.png", alt: "LinkedIn" },
            { href: "https://twitter.com/", img: "https://img.icons8.com/ios-filled/50/twitterx--v1.png", alt: "Twitter" },
          ].map((icon, index) => (
            <motion.a
              key={index}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, boxShadow: "0px 0px 20px rgba(0, 123, 255, 0.6)" }} // Blue shadow
              transition={{ duration: 0.2 }}  // Faster hover effect
            >
              <img width="50" height="50" src={icon.img} alt={icon.alt} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

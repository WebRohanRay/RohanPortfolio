import React from "react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="flex items-center flex-col py-6 px-10 sm:px-40">
      {/* Title with animation */}
      <motion.h1 
        className="text-center text-6xl text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Contact Me
      </motion.h1>

      <div className="flex flex-col items-center justify-center mt-6 w-full max-w-4xl gap-12">
        {/* Animated Contact Form */}
        <motion.div
          className="w-full max-w-lg p-6 rounded-lg bg-gray-900 shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          whileHover={{ scale: 1.02, boxShadow: "0px 0px 15px rgba(255,255,255,0.3)" }}
        >
          <ContactForm />
        </motion.div>

        {/* Social Icons in Flex Row with animation */}
        <motion.div
          className="flex flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
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
              whileHover={{ scale: 1.2, boxShadow: "0px 0px 15px rgba(255,255,255,0.5)" }}
              transition={{ duration: 0.3 }}
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

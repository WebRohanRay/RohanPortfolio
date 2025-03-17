import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const ContactForm = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_evlu5ue",   // Replace with your EmailJS service ID
        "template_ugea0bx",  // Replace with your EmailJS template ID
        formRef.current,
        "PHCLiGcZYTb8rUNMt"   
      )
      .then(
        () => {
          setLoading(false);
          setStatus("✅ Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          setStatus("❌ Failed to send message. Try again.");
          console.error(error);
        }
      );
  };

  return (
    <motion.div 
      className="max-w-lg mx-auto p-6 bg-gradient-to-br from-[#121212] to-[#1a1a1a] text-white rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-2xl font-bold text-center mb-4">Contact Form</h2>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Email Field */}
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Message Field */}
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          rows="4"
          className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        {/* Compact Submit Button */}
        <button
          type="submit"
          className="bg-gray-600 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-md transition-all duration-300"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>

      {/* Status Message */}
      {status && (
        <motion.p
          className={`text-center mt-4 ${status.includes("failed") ? "text-red-500" : "text-green-500"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {status}
        </motion.p>
      )}
    </motion.div>
  );
};

export default ContactForm;

import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="min-h-full w-full bg-[#1d1d1f] text-white px-6 md:px-20 py-16 flex flex-col justify-between relative">
      <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-20">
        {/* Left: Contact Info */}
        <div className="flex-1 space-y-4 text-sm md:text-base">
          <div>
            <p className="text-gray-400 font-medium font-mono">Phone</p>
            <p>+91 95803 98286</p>
          </div>
          <div>
            <p className="text-gray-400 font-medium font-mono">Email</p>
            <p>harshakya56@example.com</p>
          </div>
          <div>
            <p className="text-gray-400 font-medium font-mono">Location</p>
            <p>New Delhi, India</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 pt-6 text-xl">
            <a
              href="https://github.com/Harsh-sh7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/harshit-shakya/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com/harshit_07_7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition"
            >
              <FaInstagram />
            </a>
          </div>
          <h2 className="text-[5rem] md:text-[7rem] font-bold text-white opacity-90 absolute bottom-9 left-2 md:left-10 pointer-events-none select-none">
            contact
        </h2>
        </div>

        {/* Right: Contact Form */}
        <div className="flex-1">
          <p className="text-lg font-medium mb-4 font-mono">
            Do not hesitate to reach out for a collaboration or just to say hi!
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-transparent border-b border-gray-600 py-1 outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border-b border-gray-600 py-1 outline-none"
            />
            <input
              type="text"
              placeholder="Company (optional)"
              className="w-full bg-transparent border-b border-gray-600 py-1 outline-none"
            />
            <textarea
              placeholder="Your message..."
              className="w-full bg-transparent border-b border-gray-600 py-1 h-20 resize-none outline-none"
            />
            <button
              type="submit"
              className="mt-2 border border-gray-500 px-5 py-2 hover:bg-white hover:text-black transition-all"
            >
              Send
            </button>
          </form>

        </div>
      </div>

      {/* Bottom: Large Contact Text */}
        
    </section>
  );
};

export default Contact;
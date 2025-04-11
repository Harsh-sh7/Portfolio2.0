import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/Main-Image.png"; // <-- replace with your actual image path

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-[#f9f9f9] flex flex-col justify-center items-start px-6 md:px-20 py-10"
    >
      {/* Background "about" text */}
      <h1 className="absolute bottom-10 left-6 md:left-20 text-[12vw] font-extrabold text-black/5 select-none pointer-events-none">
        about
      </h1>

      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-10 md:gap-20 z-10">
        {/* Left: Image */}
        <motion.img
          src={profileImage}
          alt="profile"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-[400px] h-auto object-cover rounded-xl"
        />

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex-1 text-left"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
          Frontend developer on a journey to craft seamless, interactive, and thoughtful user interfaces.
          </h2>
          <p className="text-black/70 text-base md:text-lg leading-relaxed">
            I’m a frontend developer with a passion for building clean, responsive, and interactive web experiences. I’ve worked on a variety of projects using technologies like <b>React, HTML/CSS, JavaScript, and Tailwind CSS</b>, constantly refining both my design sense and code quality.
            <br />
            <br />
            Beyond development, I have a strong foundation in competitive programming, with a <b>Codeforces rating of 1338</b> and <b>LeetCode rating of 1643</b>, and over <b>300+ problems</b> solved across platforms.
          </p>
          <br />
          <p>
          I love solving challenges that push me to grow — whether it’s building pixel-perfect UIs or cracking algorithmic puzzles.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
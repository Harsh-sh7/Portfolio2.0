import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";

const projects = [
  {
    id: 1,
    title: "Blog Website",
    description: "MyBlogs is a React-based platform to explore blogs using the NewsAPI. Users can read and view detailed articles in a clean, responsive interface.\nTech Stack: React, CSS ,News API",
    image: project1,
    github: "https://github.com/Harsh-sh7/MyBlogs",
    live: "https://skytrails-psknjuj7m-harshakya56-gmailcoms-projects.vercel.app/",
  },
  {
    id: 2,
    title: "Loudness Meter",
    description: "A sleek, real-time Decibel & Frequency Meter that visualizes sound intensity and dominant frequencies using meters and live graphs. Built with WebAudio API for an immersive audio experience.Tech Stack: HTML, CSS, JavaScript, WebAudio API",
    image: project2,
    github: "https://github.com/Harsh-sh7/Loudness-Meter",
    live: "https://harsh-sh7.github.io/Loudness-Meter/",
  },
  {
    id: 3,
    title: "Movie Finder",
    description: "A sleek Movie App that displays popular films and allows users to search titles using the TMDb API. View detailed movie info in a responsive modal interface.\nTech Stack: HTML, CSS, JavaScript,TMDb API",
    image: project3,
    github: "https://github.com/Harsh-sh7/MovieFinder",
    live: "https://harsh-sh7.github.io/MovieFinder/",
  },
  {
    id: 4,
    title: "Hospital Data",
    description: "A Hospital Management System built with Python and MySQL to manage patient registrations, doctor appointments, and secure doctor access—designed during high school for efficient healthcare data handling. Tech Stack: Python, MySQL",
    image: project4,
    github: "https://github.com/Harsh-sh7/Hospital-Management",
    live: "https://github.com/Harsh-sh7/Hospital-Management",
  },
];

export default function Projects() {
  return (
    <div id="projects" className="w-full">
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  );
}

function ProjectItem({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="relative h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Background Title */}
      <h1 className="absolute text-[20vw] font-bold text-gray-300 uppercase z-20 pointer-events-none transition-all duration-500 opacity-50">
        {project.title}
      </h1>

      {/* Gradient background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full animate-gradient-move bg-pink-200 opacity-40" />
      </div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-10 right-10 max-w-md text-right z-20 "
      >
        <p className="text-gray-700 text-lg font-mono">{project.description}</p>
      </motion.div>

      {/* Image + Hover Effects */}
      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        animate={{
          zIndex: hovered ? 30 : 10,
          scale: hovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute transition-transform transform-gpu"
        style={{ transformOrigin: "center" }}
      >
        {/* Blurred image on hover */}
        <motion.img
          src={project.image}
          alt={project.title}
          initial={{ scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          animate={{
            filter: hovered ? "blur(4px)" : "blur(0px)",
            transition: { duration: 0.4, ease: "easeOut" },
          }}
          className="max-w-[50vw] max-h-[80vh] object-cover rounded-[32px] border-[10px] border-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-300"
        />

        {/* Icons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center gap-8 z-50"
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black bg-white p-4 rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            <FaGithub size={28} />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black bg-white p-4 rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            <FaExternalLinkAlt size={24} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
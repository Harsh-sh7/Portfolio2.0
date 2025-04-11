import { useEffect, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import heroImage from "../assets/Main-Image.png";

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useMotionValue(1);
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const offsetX = (e.clientX - innerWidth / 2) / 10;
      const offsetY = (e.clientY - innerHeight / 2) / 10;
      x.set(offsetX);
      y.set(offsetY);

      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [x, y]);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-white cursor-none">
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed w-4 h-4 bg-black rounded-full pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-100 ease-out"
      />

      {/* Background gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full animate-gradient-move bg-gradient-to-br from-purple-300 via-pink-300 to-white opacity-40" />
      </div>

      {/* Hero Image */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.img
          src={heroImage}
          alt="product"
          style={{ x, y, scale }}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 0.7, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="w-[650px] h-auto object-contain border-[12px] border-white rounded-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] transition-transform duration-300 ease-out"
        />
      </div>

      {/* Name & Info */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 flex flex-col md:flex-row justify-between items-end px-6 pb-10 z-10"
      >
        <h1 className="text-[48px] md:text-[96px] leading-none font-black text-black opacity-20">
          Harshit<br />Shakya
        </h1>
        <p className="text-sm md:text-base max-w-sm text-gray-700 font-light mt-4 md:mt-0 text-right font-mono">
          Frontend developer, passionate about developing and always eager to build & learn more.
        </p>
      </motion.div>
    </section>
  );
}
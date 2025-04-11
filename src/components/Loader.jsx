import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onFinish }) {
  const [show, setShow] = useState(true);
  const [text, setText] = useState("");
  const name = "H arshit Shakya.......";

  useEffect(() => {
    let timeout;

    let index = 0;
    const interval = setInterval(() => {
      if (index < name.length) {
        setText((prev) => prev + name[index]);
        index++;
      } else {
        clearInterval(interval);
        timeout = setTimeout(() => {
          setShow(false);
          onFinish();
        }, 700);
      }
    }, 100);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-pink-200 via-white to-pink-100"
        >
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black tracking-widest"
          >
            {text}
            <span className="animate-pulse text-black">|</span>
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
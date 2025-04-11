import { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Loader from "./components/Loader";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  const [loadingDone, setLoadingDone] = useState(false);

  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-white text-black">
      {!loadingDone && <Loader onFinish={() => setLoadingDone(true)} />}
      {loadingDone && (
        <>
          <Navbar />

          <Hero />
          
          <Projects />

          <About />

          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
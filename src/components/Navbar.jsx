export default function Navbar() {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex items-center justify-between bg-white/10 backdrop-blur-md shadow-sm">
        {/* Logo / Name */}
        <div className="text-black text-sm md:text-base font-bold tracking-widest uppercase">
          HARSHIT
        </div>
  
        {/* Navigation Links */}
        <div className="flex gap-6 text-gray-700 text-sm md:text-base font-light">
          {["Home", "About", "Contact", "Projects"].map((item, idx) => (
            <a
              key={idx}
              href={`#${item.toLowerCase()}`}
              className="relative px-3 py-1 rounded-md transition-all duration-400 hover:bg-black hover:text-white group"
            >
              <span>{item}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black transition-all group-hover:w-full duration-300"></span>
            </a>
          ))}
        </div>
      </nav>
    );
  }
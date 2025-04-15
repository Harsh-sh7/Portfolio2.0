export default function Navbar() {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-8 py-4 md:py-6 bg-white/10 backdrop-blur-md shadow-sm">
        <div className="relative">
          <input type="checkbox" id="menu-toggle" className="peer hidden" />
          <div className="flex items-center justify-between">
            <div className="text-black md:text-lg font-bold tracking-widest uppercase">
              HARSHIT
            </div>
  
            <label
              htmlFor="menu-toggle"
              className="flex flex-col justify-center items-center w-8 h-6 cursor-pointer md:hidden"
            >
              <span className="w-6 h-[2px] bg-black mb-[5px] block transition-all duration-300 peer-checked:rotate-45 peer-checked:translate-y-[6px]"></span>
              <span className="w-6 h-[2px] bg-black block transition-all duration-300 peer-checked:opacity-0"></span>
              <span className="w-6 h-[2px] bg-black mt-[5px] block transition-all duration-300 peer-checked:-rotate-45 peer-checked:-translate-y-[6px]"></span>
            </label>
  
            {/* Desktop Nav */}
            <div className="hidden md:flex gap-6 text-gray-700 text-sm md:text-base">
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
          </div>
  
          {/* Mobile Nav */}
          <div className="hidden peer-checked:block md:hidden mt-4 text-center text-black font-medium bg-pink/40 backdrop-blur-md rounded-md py-4 shadow-md transition-all duration-300">
            {["Home", "About", "Contact", "Projects"].map((item, idx) => (
              <a
                key={idx}
                href={`#${item.toLowerCase()}`}
                className="block px-4 py-2 hover:bg-black hover:text-white transition-all rounded-md"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>
    );
  }
function Navbar() {
  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-white/70 border-b border-zinc-200/50 shadow-[0_2px_20px_rgba(0,0,0,0.02)] z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Premium Brand Logo Sign-off */}
        <h1 className="text-4xl font-bold tracking-[0.15em] font-mono text-zinc-900 select-none">
          SAQIB RASHID BHAT<span className="text-blue-500"></span>
        </h1>

        {/* Clean, Modern Navigation Menu List */}
        <ul className="hidden md:flex items-center gap-8 font-mono text-[15px] font-medium uppercase tracking-wider text-zinc-700">
          <li>
            <a href="#home" className="hover:text-zinc-900 transition-colors duration-200">
              Home
            </a>
          </li>
            <li>
            <a href="#about" className="hover:text-zinc-900 transition-colors duration-200">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-zinc-900 transition-colors duration-200">
              Projects
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-zinc-900 transition-colors duration-200">
              Skills
            </a>
          </li>

          <li>
            <a href="#experience" className="hover:text-zinc-900 transition-colors duration-200">
              Journey
            </a>
          </li>
         

          {/* Premium Standalone Button Style for Contact */}
          <li>
            <a 
              href="#contact" 
              className="bg-zinc-950 text-white px-10 py-4 rounded-full hover:bg-zinc-800 shadow-sm transition-all duration-200"
            >
              Contact
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;

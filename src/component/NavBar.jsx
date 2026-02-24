import { useState } from "react";
import { Link } from "react-router-dom";
import { User, LogIn, Menu, X } from "lucide-react";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Reviews", path: "/reviews" },
    { name: "Book Us", path: "/book-us" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Glass Background */}
      <div className="absolute inset-0 -z-10 bg-black/60 backdrop-blur-xl border-b border-white/10" />

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-semibold tracking-tight text-white hover:opacity-80 transition"
        >
          <span className="text-yellow-400">Randy’s</span>
          Decor
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 text-white/90 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="relative group transition"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 text-white">
          
          {/* Login Button */}
          <button className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full bg-yellow-400 text-black font-medium hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/30 transition-all duration-300">
            <LogIn size={18} />
            Login
          </button>

          {/* Profile Icon */}
          <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300 cursor-pointer">
            <User size={18} />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black/90 backdrop-blur-xl border-b border-white/10 px-6 py-6 flex flex-col gap-6 text-white text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className="hover:text-yellow-400 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
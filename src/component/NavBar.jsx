import { Link } from "@tanstack/react-router";
import { User, LogIn } from "lucide-react";

function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT - Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          <span className="text-yellow-400">Randy's</span>
          <span className="text-white">Decor</span>
        </Link>

        {/* CENTER - Navigation Links */}
        <div className="hidden md:flex space-x-10 text-white font-medium">
          <Link to="/" className="hover:text-yellow-400 transition duration-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-yellow-400 transition duration-300">
            About
          </Link>
          <Link to="/gallery" className="hover:text-yellow-400 transition duration-300">
            Gallery
          </Link>
          <Link to="/shop" className="hover:text-yellow-400 transition duration-300">
            Shop
          </Link>
          <Link to="/book" className="hover:text-yellow-400 transition duration-300">
            Book Us
          </Link>
        </div>

        {/* RIGHT - Login & Profile */}
        <div className="flex items-center space-x-6 text-white">
          
          <Link
            to="/login"
            className="hidden md:flex items-center space-x-2 border border-yellow-400 px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition duration-300"
          >
            <LogIn size={18} />
            <span>Login</span>
          </Link>

          <Link
            to="/profile"
            className="w-10 h-10 rounded-full bg-yellow-400/20 backdrop-blur-md flex items-center justify-center border border-yellow-400 hover:bg-yellow-400 hover:text-black transition duration-300 cursor-pointer"
          >
            <User size={18} />
          </Link>

        </div>
      </div>

      {/* Glass Effect Background */}
      <div className="absolute inset-0 -z-10 backdrop-blur-md bg-black/40 border-b border-white/10" />
    </nav>
  );
}

export default Navbar;
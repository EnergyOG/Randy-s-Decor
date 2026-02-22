import Navbar from "../component/NavBar";
import heroBg from "../assets/max-titov-9VNiKIWDWs0-unsplash.jpg";

function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-white">
      <Navbar />

      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center animate-slowZoom"
          style={{
            backgroundImage: `url(${heroBg})`,
          }}
        />

        {/* Soft white overlay instead of dark */}
        <div className="absolute inset-0 bg-white/60" />

        {/* Elegant light gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-yellow-200/30" />
      </div>

      {/* Soft Floating Light Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-72 h-72 bg-yellow-300/30 blur-3xl rounded-full top-20 left-20 animate-floatSlow" />
        <div className="absolute w-96 h-96 bg-white/40 blur-3xl rounded-full bottom-20 right-20 animate-floatSlow delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 drop-shadow-lg">
          Randy's Decor
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
          Creating timeless wedding ceremonies, elegant receptions & unforgettable celebrations across Ghana.
        </p>

        <div className="mt-8 flex flex-col items-center gap-6">
          <button className="w-64 px-8 py-3 rounded-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold transition duration-300 shadow-lg hover:scale-105">
            Book Consultation
          </button>

          <button className="w-64 px-8 py-3 rounded-full border border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white transition duration-300">
            View Gallery
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
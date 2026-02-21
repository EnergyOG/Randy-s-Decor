import Navbar from "./Navbar";

function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <Navbar />

      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center animate-slowZoom"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2000')",
          }}
        />

        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-transparent to-yellow-600/20" />
      </div>

      {/* Floating Lights */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-72 h-72 bg-yellow-400/20 blur-3xl rounded-full top-20 left-20 animate-floatSlow" />
        <div className="absolute w-96 h-96 bg-white/10 blur-3xl rounded-full bottom-20 right-20 animate-floatSlow delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 drop-shadow-xl">
          Randy's Decor
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
          Creating unforgettable weddings, birthdays & corporate celebrations across Ghana.
        </p>

        <div className="mt-8 flex gap-6 flex-wrap justify-center">
          <button className="px-8 py-3 rounded-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold transition duration-300 shadow-xl hover:scale-105">
            Book Consultation
          </button>

          <button className="px-8 py-3 rounded-full border border-yellow-400 text-yellow-300 hover:bg-yellow-500 hover:text-black transition duration-300">
            View Gallery
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
import image1 from "../assets/pexels-fauxels-3184398.jpg";
function About() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-yellow-50 via-yellow-100 to-gray-200 pt-18 overflow-hidden">
      {/* Animated Glow Ball - Large floating yellow orb */}
      <div
        className="pointer-events-none"
        aria-hidden="true"
      >
        {/* Animate the ball diagonally from top to bottom, left to right */}
        <div className="absolute w-80 h-80 bg-yellow-300/30 blur-3xl rounded-full left-[-10%] top-[-10%] animate-glow-ball"></div>
        {/* Optionally add subtle white/yellow glow overlays for more modern effect */}
        <div className="absolute w-64 h-64 bg-yellow-200/10 blur-2xl rounded-full right-10 bottom-0 animate-glow-ball2"></div>
      </div>

      <style>
        {`
          @keyframes glowBallMove {
            0% {
              left: -10%;
              top: -10%;
              opacity: 0.77;
            }
            35% {
              left: 55%;
              top: 10%;
              opacity: 0.95;
            }
            65% {
              left: 10%;
              top: 75%;
              opacity: 0.88;
            }
            90% {
              left: 70%;
              top: 80%;
              opacity: 0.60;
            }
            100% {
              left: -10%;
              top: -10%;
              opacity: 0.77;
            }
          }
          .animate-glow-ball {
            animation: glowBallMove 17s ease-in-out infinite;
          }
          @keyframes glowBallMove2 {
            0% {
              right: 10px; 
              bottom: 0; 
              opacity: 0.82;
            }
            50% {
              right: 70%;
              bottom: 60%;
              opacity: 0.40;
            }
            100% {
              right: 10px;
              bottom: 0;
              opacity: 0.82;
            }
          }
          .animate-glow-ball2 {
            animation: glowBallMove2 18s ease-in-out infinite;
          }
        `}
      </style>
      
      <div>
        <img src={image1} alt="About Us" className="w-full h-[250px] sm:h-[350px] md:h-[500px] object-cover object-top" />
      </div>
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100 py-20 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent">
              About Randy’s Decor
            </h1>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
              Transforming ordinary spaces into extraordinary experiences since 2021.
            </p>
          </div>

          {/* Main Card */}
          <div className="backdrop-blur-xl bg-white/70 border border-white/40 shadow-2xl rounded-3xl p-10 md:p-16">

            <div className="grid md:grid-cols-2 gap-14">

              {/* Left Column */}
              <div className="space-y-10">

                {/* Our Story */}
                <div>
                  <h2 className="text-2xl font-bold text-yellow-700 mb-4 border-l-4 border-yellow-600 pl-4">
                    Our Story
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold">Founded on 4th July 2021</span>, Randy’s Decor was built from passion and vision.
                    After completing graduate school in Business Administration, Mr. Randy
                    launched the company in Lapaz alongside his wife.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    What began as a two-person venture has grown into a thriving decor agency
                    with close to seven dedicated professionals, serving clients with creativity,
                    excellence, and precision.
                  </p>
                </div>

                {/* Mission */}
                <div>
                  <h2 className="text-2xl font-bold text-yellow-700 mb-4 border-l-4 border-yellow-600 pl-4">
                    Our Mission
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    To bring your vision to life with style, creativity, and professionalism.
                    Whether it’s an intimate gathering or a grand celebration,
                    we focus on delivering excellence in every detail.
                  </p>
                </div>

                {/* Contact Card */}
                <div className="bg-yellow-600 text-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
                  <p className="text-2xl font-bold">+233 24 666 402</p>
                  <p className="mt-2 text-yellow-100">
                    Let us make your next event beautiful and unforgettable.
                  </p>
                </div>

              </div>

              {/* Right Column */}
              <div className="space-y-10">

                {/* Services Grid */}
                <div>
                  <h2 className="text-2xl font-bold text-yellow-700 mb-6 border-l-4 border-yellow-600 pl-4">
                    What We Do
                  </h2>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "Weddings",
                      "Birthdays",
                      "Corporate Events",
                      "Naming Ceremonies",
                      "Funerals",
                      "Private Parties"
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="bg-white shadow-md hover:shadow-xl transition duration-300 rounded-xl p-4 text-center font-medium text-gray-700 hover:text-yellow-700"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Services */}
                <div>
                  <h3 className="text-xl font-semibold text-yellow-700 mb-5">
                    Additional Offerings
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>✔ Rental services (chairs, tables, tents)</li>
                    <li>✔ Professional ushering services</li>
                    <li>✔ Complete event planning</li>
                    <li>✔ Interior décor for homes & offices</li>
                  </ul>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
      <div className="w-full text-center py-4 bottom-0 left-0 bg-white/70 text-gray-700 text-sm z-50 shadow-inner">
        Randy&apos;s Decor © 2026 &nbsp;|&nbsp; All rights reserved &nbsp;|&nbsp; Privacy Policy &nbsp;|&nbsp; Terms of Service &nbsp;|&nbsp; Contact Us &nbsp;|&nbsp; Follow Us
      </div>
    </div>
  );
}

export default About;

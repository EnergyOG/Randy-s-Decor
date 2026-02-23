import image1 from "../assets/pexels-fauxels-3184398.jpg";
function About() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-yellow-50 via-yellow-100 to-gray-200 pt-18 overflow-hidden">
      {/* Animated Decorative Orbs - Yellow, Blue, Red (moving nicely) */}
      <div className="pointer-events-none" aria-hidden="true">
        {/* Yellow Glow Ball */}
        <div className="absolute w-64 h-64 bg-yellow-300/40 blur-3xl rounded-full left-[-8%] top-[-6%] animate-glow-yellow"></div>
        {/* Blue Glow Ball */}
        <div className="absolute w-52 h-52 bg-blue-400/30 blur-3xl rounded-full right-[-6%] top-[20%] animate-glow-blue"></div>
        {/* Red Glow Ball */}
        <div className="absolute w-72 h-72 bg-red-400/20 blur-3xl rounded-full left-[60%] bottom-[-10%] animate-glow-red"></div>
      </div>

      <style>
        {`
          /* Yellow ball: sweeping diagonal path, soft fade */
          @keyframes glowYellowMove {
            0% {
              left: -8%;
              top: -6%;
              opacity: 0.8;
            }
            35% {
              left: 60%;
              top: 12%;
              opacity: 1;
            }
            60% {
              left: 25%;
              top: 40%;
              opacity: 0.85;
            }
            100% {
              left: -8%;
              top: -6%;
              opacity: 0.8;
            }
          }
          .animate-glow-yellow {
            animation: glowYellowMove 20s ease-in-out infinite;
          }

          /* Blue ball: smooth movement right to left, descending and ascending */
          @keyframes glowBlueMove {
            0% {
              right: -6%;
              top: 20%;
              opacity: 0.7;
            }
            25% {
              right: 20%;
              top: 38%;
              opacity: 0.83;
            }
            60% {
              right: 40%;
              top: 10%;
              opacity: 0.55;
            }
            80% {
              right: 18%;
              top: 30%;
              opacity: 0.90;
            }
            100% {
              right: -6%;
              top: 20%;
              opacity: 0.7;
            }
          }
          .animate-glow-blue {
            animation: glowBlueMove 21s ease-in-out infinite;
          }

          /* Red ball: gliding along the bottom, gentle up and down */
          @keyframes glowRedMove {
            0% {
              left: 60%;
              bottom: -10%;
              opacity: 0.66;
            }
            30% {
              left: 10%;
              bottom: 12%;
              opacity: 0.84;
            }
            65% {
              left: 35%;
              bottom: 20%;
              opacity: 0.78;
            }
            100% {
              left: 60%;
              bottom: -10%;
              opacity: 0.66;
            }
          }
          .animate-glow-red {
            animation: glowRedMove 17s ease-in-out infinite;
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

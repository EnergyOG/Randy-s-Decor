import image1 from "../assets/pexels-fauxels-3184398.jpg";
function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-yellow-100 to-gray-200 pt-18">
      <div>
      <img src={image1} alt="About Us" className=" w-full h-[250px] sm:h-[350px] md:h-[500px] object-cover object-top"/>      
      </div>
      <div className="max-w-5xl mx-auto px-6 py-12 h-[100vh]">
        <h1 className="text-5xl font-bold text-yellow-700 mb-10 text-center">About Randy’s Decor</h1>
        <div className="bg-white/90 rounded-3xl shadow-lg p-8 flex flex-col gap-8 md:flex-row md:gap-14">
          <div className="flex-1 flex flex-col gap-6 justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-yellow-600 mb-4">Our Story</h2>
              <p className="text-gray-800 mb-3">
                <span className="font-semibold">Founded on 4th July 2021</span>, Randy’s Decor was born out of passion, creativity, and a vision to transform ordinary spaces into extraordinary experiences. After completing graduate school in Business Administration, Mr. Randy took a bold step to build a decor agency that would bring elegance, organization, and beauty to every event.
              </p>
              <p className="text-gray-800 mb-3">
                Starting in Lapaz with just two people — Mr. Randy and his wife — the company began as a small but determined venture. Through dedication, hard work, and a commitment to excellence, Randy’s Decor has grown steadily over the years. Today, the company proudly operates with a team of close to seven skilled and passionate professionals, delivering quality services to clients across various occasions.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-yellow-600 mb-4">Our Mission</h2>
              <p className="text-gray-800 mb-3">
                Our mission is simple: <span className="font-medium italic">to bring your vision to life with style, creativity, and professionalism.</span> Whether you are planning a grand celebration or an intimate gathering, Randy’s Decor is committed to delivering excellence in every detail.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-yellow-600 mb-2">Contact Us</h2>
              <div className="flex items-center gap-2 text-lg text-yellow-800">
                <span role="img" aria-label="phone" className="text-yellow-500 font-bold text-2xl">📞</span>
                <span className="font-medium">+233 24 666 402</span>
              </div>
              <p className="text-gray-600 mt-1">Let us make your next event beautiful, organized, and unforgettable.</p>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-semibold text-yellow-600 mb-4">What We Do</h2>
              <p className="text-gray-800">
                At Randy’s Decor, we specialize in creating memorable event experiences. Our services include decoration for:
              </p>
              <ul className="list-disc pl-7 mt-2 text-gray-700 space-y-1">
                <li>Birthdays</li>
                <li>Weddings</li>
                <li>Parties</li>
                <li>Funerals</li>
                <li>Naming ceremonies</li>
                <li>Corporate events</li>
                <li>And many more</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-yellow-600 mb-3 mt-7">Additional Offerings</h3>
              <ul className="list-disc pl-7 text-gray-700 space-y-1">
                <li>Rental services for chairs, tables, tents, and other event essentials</li>
                <li>Professional ushering services</li>
                <li>Complete event planning solutions</li>
                <li>Interior décor for homes, offices, and workspaces</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

import Navbar from "../component/NavBar";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-yellow-100 to-gray-200 pt-20">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-yellow-700 mb-6">About Us</h1>
        <p className="text-lg text-gray-800 mb-4">
          Welcome to Randy's Decor, where luxury meets elegance. We specialize in creating unforgettable moments for your special events.
        </p>
        <p className="text-lg text-gray-800">
          With years of experience in event decoration, we bring your vision to life with premium designs and attention to detail.
        </p>
      </div>
    </div>
  );
}

export default About;

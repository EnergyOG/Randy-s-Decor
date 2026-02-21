import Navbar from "../component/NavBar";

function BookUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-yellow-100 to-gray-200 pt-20">
      <Navbar />
      <div className="max-w-2xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-yellow-700 mb-10">Book Us</h1>
        <form className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-6">
            <label className="block text-gray-800 font-semibold mb-2">Event Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
              placeholder="Enter event name"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-800 font-semibold mb-2">Event Date</label>
            <input
              type="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-800 font-semibold mb-2">Event Type</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500">
              <option>Wedding</option>
              <option>Birthday</option>
              <option>Corporate Event</option>
              <option>Other</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-gray-800 font-semibold mb-2">Message</label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
              rows="4"
              placeholder="Tell us about your event..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 rounded-lg transition"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookUs;
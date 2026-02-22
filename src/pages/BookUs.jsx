import { useState } from "react";

function BookUs() {
  const [formData, setFormData] = useState({
    eventName: "",
    eventDate: "",
    eventType: "Wedding",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ eventName: "", eventDate: "", eventType: "Wedding", message: "" });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-yellow-100 to-gray-200 pt-20">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-yellow-700 mb-10">Book Us</h1>
        {submitted ? (
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <p className="text-xl text-green-700 font-semibold">Thank you! We&apos;ll get back to you soon.</p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-4 text-yellow-600 hover:underline"
            >
              Submit another request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-6">
              <label className="block text-gray-800 font-semibold mb-2">Event Name</label>
              <input
                name="eventName"
                type="text"
                value={formData.eventName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                placeholder="Enter event name"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-800 font-semibold mb-2">Event Date</label>
              <input
                name="eventDate"
                type="date"
                value={formData.eventDate}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-800 font-semibold mb-2">Event Type</label>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
              >
                <option>Wedding</option>
                <option>Birthday</option>
                <option>Corporate Event</option>
                <option>Other</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-gray-800 font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                rows="4"
                placeholder="Tell us about your event..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 rounded-lg transition"
            >
              Book Now
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default BookUs;
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
    setFormData({
      eventName: "",
      eventDate: "",
      eventType: "Wedding",
      message: "",
    });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-yellow-50 via-yellow-100 to-gray-200 flex flex-col">

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-xl">

          <h1 className="text-4xl md:text-5xl font-bold text-yellow-700 mb-6 text-center">
            Book Us
          </h1>

          {submitted ? (
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <p className="text-lg text-green-700 font-semibold">
                Thank you! We’ll get back to you soon.
              </p>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 text-yellow-600 hover:underline"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-xl p-6 space-y-4"
            >
              {/* Event Name */}
              <div>
                <label className="block text-gray-800 font-medium mb-1">
                  Event Name
                </label>
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

              {/* Event Date */}
              <div>
                <label className="block text-gray-800 font-medium mb-1">
                  Event Date
                </label>
                <input
                  name="eventDate"
                  type="date"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                  required
                />
              </div>

              {/* Event Type */}
              <div>
                <label className="block text-gray-800 font-medium mb-1">
                  Event Type
                </label>
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

              {/* Message */}
              <div>
                <label className="block text-gray-800 font-medium mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                  placeholder="Tell us about your event..."
                />
              </div>

              {/* Button */}
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

      {/* Footer (now inside 100vh) */}
      <footer className="text-center py-4 bg-white/70 text-gray-700 text-sm shadow-inner">
        Randy&apos;s Decor © 2026 | All rights reserved | Privacy Policy | Terms of Service | Contact Us | Follow Us
      </footer>

    </div>
  );
}

export default BookUs;
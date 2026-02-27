const reviews = [
  {
    name: "Amaka & Chidi",
    event: "Wedding Reception",
    rating: 5,
    quote:
      "Randy Decor transformed our hall into a dreamy, elegant space. Every guest kept asking who did our decor.",
  },
  {
    name: "Bola Adeyemi",
    event: "40th Birthday Party",
    rating: 5,
    quote:
      "Professional, creative and on time. They handled everything so well that I could just relax and enjoy my day.",
  },
  {
    name: "Kofi Mensah",
    event: "Corporate End-of-Year Party",
    rating: 4.5,
    quote:
      "The ambience matched our brand perfectly. Classy, modern and very Instagram-worthy. Highly recommended.",
  },
  {
    name: "The Johnson Family",
    event: "Naming Ceremony",
    rating: 5,
    quote:
      "Soft colours, beautiful florals and a warm, intimate setup. They paid attention to every small detail.",
  },
  {
    name: "Blessing Okoro",
    event: "Private Dinner Party",
    rating: 4.5,
    quote:
      "From the candles to the table runners, everything looked luxurious. My guests were blown away.",
  },
  {
    name: "Tunde A.",
    event: "Funeral Celebration of Life",
    rating: 5,
    quote:
      "Tasteful and respectful. They created an atmosphere that truly celebrated our loved one’s memory.",
  },
];

function Shop() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-yellow-100 to-gray-200 pt-24">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-700 mb-3">
            Reviews
          </h1>
          <p className="text-gray-700 max-w-2xl">
            Hear from clients who trusted <span className="font-semibold">Randy's Decor</span>{" "}
            with their most important moments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <article
              key={review.name + review.event}
              className="bg-white/90 rounded-2xl shadow-md border border-yellow-100 p-6 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {review.name}
                    </h3>
                    <p className="text-sm text-yellow-700 font-medium">
                      {review.event}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-500 text-sm font-semibold">
                    <span>{"★".repeat(Math.floor(review.rating))}</span>
                    {review.rating % 1 !== 0 && <span>☆</span>}
                    <span className="ml-1 text-xs text-gray-500">
                      {review.rating.toFixed(1)}/5
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  “{review.quote}”
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
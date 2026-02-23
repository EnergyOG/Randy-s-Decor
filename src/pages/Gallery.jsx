import { useState } from "react";
import fauxels from "../assets/pexels-fauxels-3184398.jpg";
import vaibhav from "../assets/vaibhav-nagare-0ci9am-l-Dk-unsplash copy.jpg";
import maxTitov from "../assets/max-titov-9VNiKIWDWs0-unsplash.jpg";

const categories = [
  "All",
  "Wedding",
  "Marriage",
  "Birthday",
  "Funeral",
  "Private Parties",
  "Naming Ceremonies",
  "Corporate Events",
];

const galleryItems = [
  {
    id: 1,
    title: "Elegant Wedding Reception",
    category: "Wedding",
    image: vaibhav,
  },
  {
    id: 2,
    title: "Traditional Marriage Ceremony",
    category: "Marriage",
    image: vaibhav,
  },
  {
    id: 3,
    title: "Vibrant Birthday Setup",
    category: "Birthday",
    image: fauxels,
  },
  {
    id: 4,
    title: "Intimate Funeral Tribute",
    category: "Funeral",
    image: maxTitov,
  },
  {
    id: 5,
    title: "Chic Private Party",
    category: "Private Parties",
    image: fauxels,
  },
  {
    id: 6,
    title: "Joyful Naming Ceremony",
    category: "Naming Ceremonies",
    image: vaibhav,
  },
  {
    id: 7,
    title: "Corporate Event Styling",
    category: "Corporate Events",
    image: maxTitov,
  },
];

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-yellow-100 to-gray-200 pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Top heading + subtext */}
        <div className="mb-8 sm:mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-3">
            Gallery
          </h1>
          <p className="text-gray-600 max-w-2xl">
            Browse our event decor portfolio, curated in categories just like
            Pexels to help you quickly find inspiration for your special
            moments.
          </p>
        </div>

        {/* Category nav bar */}
        <div className="sticky top-16 z-20 bg-gradient-to-r from-yellow-50/95 via-yellow-100/95 to-gray-200/95 backdrop-blur-md border-b border-yellow-200/60 mb-6">
          <div className="flex gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`flex-shrink-0 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium border transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-yellow-500 text-white border-yellow-500 shadow-sm"
                    : "bg-white/70 text-gray-700 border-gray-200 hover:bg-yellow-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Pexels-style responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="group relative overflow-hidden rounded-2xl bg-gray-900 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[3/4] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />

                {/* Top category pill (like Pexels tag) */}
                <div className="absolute left-3 top-3 flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                    {item.category}
                  </span>
                </div>

                {/* Bottom gradient overlay with text */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3 sm:p-4">
                  <div className="rounded-xl bg-gradient-to-t from-black/80 via-black/50 to-transparent px-3 sm:px-4 py-3 sm:py-4">
                    <h3 className="text-sm sm:text-base font-semibold text-white line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-gray-200/90">
                      Premium decor inspiration for {item.category.toLowerCase()}
                      .
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
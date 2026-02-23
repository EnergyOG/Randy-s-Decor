import { useState } from "react";
import img1 from "../assets/gallery/178b7845-7a7d-4b6b-b231-de5659040def.jpg";
import img2 from "../assets/gallery/91668493-6168-49e5-8d3e-724fa76cfa92.jpg"
import img3 from "../assets/gallery/evelina-friman-hw_sKmjb0ns-unsplash.jpg"
import img4 from "../assets/gallery/iskra-photography-iXTkKQyVqbM-unsplash.jpg"
import img5 from "../assets/gallery/morrow-solutions-e0-MjQe6fnA-unsplash.jpg"
import img6 from "../assets/gallery/pexels-soulseeker-14703685.jpg"
import img7 from "../assets/gallery/photos-by-lanty-O38Id_cyV4M-unsplash.jpg"
import img8 from "../assets/gallery/colorful-birthday-setup-stockcake.jpg.webp"
import img9 from "../assets/gallery/Corporate Events.jpg"
import img10 from "../assets/gallery/corporate-event-2-1.jpg"
import img11 from "../assets/gallery/corporate-party-floor-setup.jpg"
import img12 from "../assets/gallery/Happy_birthday4 copy.png"
import img13 from "../assets/gallery/66618054_478905222683357_5482248106414872597_n.jpg"
import img14 from "../assets/gallery/attachment-1721740057364-2.webp"
import img15 from "../assets/gallery/Setting-up-stage.jpg"
import img16 from "../assets/gallery/Wedding.jpeg"
import img17 from "../assets/gallery/zigzag-img-2.jpg"

const categories = [
  "All",
  "Wedding",
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
    category: "Funeral",
    image: img1,
  },
  {
    id: 2,
    title: "Traditional Marriage Ceremony",
    category: "Funeral",
    image: img2,
  },
  {
    id: 3,
    title: "Vibrant Birthday Setup",
    category: "Wedding",
    image: img3,
  },
  {
    id: 4,
    title: "Intimate Funeral Tribute",
    category: "Private Parties",
    image: img4,
  },
  {
    id: 5,
    title: "Chic Private Party",
    category: "Naming Ceremonies",
    image: img5,
  },
  {
    id: 6,
    title: "Joyful Naming Ceremony",
    category: "Wedding",
    image: img6,
  },
  {
    id: 7,
    title: "Corporate Event Styling",
    category: "Birthday",
    image: img7,
  },
  {
    id: 8,
    title: "Corporate Event Styling",
    category: "Birthday",
    image: img8,
  },
  {
    id: 9,
    title: "Corporate Event Styling",
    category: "Corporate Events",
    image: img9,
  },
  {
    id: 10,
    title: "Corporate Event Styling",
    category: "Corporate Events",
    image: img10,
  },
  {
    id: 11,
    title: "Corporate Event Styling",
    category: "Corporate Events",
    image: img11,
  },
  {
    id: 12,
    title: "Corporate Event Styling",
    category: "Birthday",
    image: img12,
  },
  {
    id: 13,
    title: "Corporate Event Styling",
    category: "Naming Ceremonies",
    image: img13,
  },
  {
    id: 14,
    title: "Corporate Event Styling",
    category: "Naming Ceremonies",
    image: img14,
  },
  {
    id: 15,
    title: "Intimate Funeral Tribute",
    category: "Private Parties",
    image: img15,
  },
  {
    id: 16,
    title: "Intimate Funeral Tribute",
    category: "Private Parties",
    image: img16,
  },
  {
    id: 17,
    title: "Intimate Funeral Tribute",
    category: "Private Parties",
    image: img17,
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
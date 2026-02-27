import { useState } from "react";
import img1 from "../assets/gallery/178b7845-7a7d-4b6b-b231-de5659040def.jpg";
import img2 from "../assets/gallery/91668493-6168-49e5-8d3e-724fa76cfa92.jpg"
import img3 from "../assets/gallery/evelina-friman-hw_sKmjb0ns-unsplash.jpg"
import img4 from "../assets/gallery/elizabeth-kendall-wedding-ceremony-1221-83dd56098d6b451d84aad5ed21fcef2b.jpg"
import img5 from "../assets/gallery/1767705169948.webp"
import img6 from "../assets/gallery/pexels-soulseeker-14703685.jpg"
import img7 from "../assets/gallery/3-1.jpg.webp"
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
    title: "Funeral Reception Floral Decor",
    category: "Funeral",
    image: img1,
  },
  {
    id: 2,
    title: "Funeral Ceremony Arrangement",
    category: "Funeral",
    image: img2,
  },
  {
    id: 3,
    title: "Outdoor Wedding Aisle Decor",
    category: "Wedding",
    image: img3,
  },
  {
    id: 4,
    title: "Wedding Ceremony Flower Arch",
    category: "Wedding",
    image: img4,
  },
  {
    id: 5,
    title: "Naming Ceremony Balloons",
    category: "Naming Ceremonies",
    image: img5,
  },
  {
    id: 6,
    title: "Rustic Wedding Table Setup",
    category: "Wedding",
    image: img6,
  },
  {
    id: 7,
    title: "Birthday Celebration Table Decor",
    category: "Birthday",
    image: img7,
  },
  {
    id: 8,
    title: "Colorful Birthday Party Setup",
    category: "Birthday",
    image: img8,
  },
  {
    id: 9,
    title: "Corporate Banquet Event Decor",
    category: "Corporate Events",
    image: img9,
  },
  {
    id: 10,
    title: "Modern Corporate Event Lounge",
    category: "Corporate Events",
    image: img10,
  },
  {
    id: 11,
    title: "Corporate Party Floor Lighting",
    category: "Corporate Events",
    image: img11,
  },
  {
    id: 12,
    title: "Birthday Cake and Balloons",
    category: "Birthday",
    image: img12,
  },
  {
    id: 13,
    title: "Naming Ceremony Traditional Decor",
    category: "Naming Ceremonies",
    image: img13,
  },
  {
    id: 14,
    title: "Naming Ceremony Stage Flowers",
    category: "Naming Ceremonies",
    image: img14,
  },
  {
    id: 15,
    title: "Private Party Stage Setup",
    category: "Private Parties",
    image: img15,
  },
  {
    id: 16,
    title: "Elegant Wedding Table Decor",
    category: "Private Parties",
    image: img16,
  },
  {
    id: 17,
    title: "Private Party Zigzag Canopy",
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
    <div className="relative min-h-screen bg-gradient-to-br from-yellow-50 via-yellow-100 to-gray-200 pt-24 overflow-hidden">
      {/* Animated color-changing glow orb */}
      <div className="pointer-events-none" aria-hidden="true">
        <div className="absolute w-72 h-72 blur-3xl rounded-full -top-24 -left-16 animate-gallery-glow" />
      </div>

      <style>
        {`
          @keyframes galleryGlowMoveAndColor {
            0% {
              transform: translate3d(0, 0, 0) scale(1);
              background: radial-gradient(circle at center, rgba(250, 204, 21, 0.45), transparent 70%);
            }
            25% {
              transform: translate3d(40%, 20%, 0) scale(1.1);
              background: radial-gradient(circle at center, rgba(59, 130, 246, 0.4), transparent 70%);
            }
            50% {
              transform: translate3d(10%, 50%, 0) scale(1.15);
              background: radial-gradient(circle at center, rgba(248, 113, 113, 0.42), transparent 70%);
            }
            75% {
              transform: translate3d(-20%, 30%, 0) scale(1.05);
              background: radial-gradient(circle at center, rgba(16, 185, 129, 0.4), transparent 70%);
            }
            100% {
              transform: translate3d(0, 0, 0) scale(1);
              background: radial-gradient(circle at center, rgba(250, 204, 21, 0.45), transparent 70%);
            }
          }

          .animate-gallery-glow {
            animation: galleryGlowMoveAndColor 24s ease-in-out infinite;
          }
        `}
      </style>

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
      <div className="w-full text-center py-4 bottom-0 left-0 bg-white/70 text-gray-700 text-sm z-50 shadow-inner">
        Randy&apos;s Decor © 2026 &nbsp;|&nbsp; All rights reserved &nbsp;|&nbsp; Privacy Policy &nbsp;|&nbsp; Terms of Service &nbsp;|&nbsp; Contact Us &nbsp;|&nbsp; Follow Us
      </div>
    </div>
  );
}

export default Gallery;
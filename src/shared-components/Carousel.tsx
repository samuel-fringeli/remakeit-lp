import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import heroImage1 from "../assets/hero/hero-image-1.avif";
import heroImage2 from "../assets/hero/hero-image-2.avif";
import heroImage3 from "../assets/hero/hero-image-3.avif";
import heroImage4 from "../assets/hero/hero-image-4.avif";
import heroImage5 from "../assets/hero/hero-image-5.avif";
import heroImage6 from "../assets/hero/hero-image-6.avif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const videos = [
  {
    id: 1,
    src: heroImage1,
    views: "27K",
  },
  {
    id: 2,
    src: heroImage2,
    views: "325K",
  },
  {
    id: 3,
    src: heroImage3,
    views: "9.7M",
  },
  {
    id: 4,
    src: heroImage4,
    views: "748K",
  },
  {
    id: 5,
    src: heroImage5,
    views: "1.1M",
  },
  {
    id: 6,
    src: heroImage6,
    views: "24M",
  },
];

// We need to render MORE items than the original array length to cover the viewport
// and allow for the seamless transition. We'll render 15 items (3 sets of 5, or 2.5 sets of 6).
const ITEMS_TO_RENDER = 21;
const originalLength = videos.length; // 6

const Carousel = () => {
  const [x, setX] = useState(0);

  const videoWidth = 140;
  const gapWidth = 16;
  const numVideos = videos.length; // 6

  const totalScrollWidth = numVideos * videoWidth + (numVideos - 1) * gapWidth;

  useEffect(() => {
    const interval = setInterval(() => {
      setX((prev) => {
        const next = prev - 1;

        return -(Math.abs(next) % totalScrollWidth);
      });
    }, 15);

    return () => clearInterval(interval);
  }, [totalScrollWidth]);

  // Create an array of length ITEMS_TO_RENDER
  // to cover the viewport and transition seamlessly.
  const renderedItems = Array.from({ length: ITEMS_TO_RENDER });

  return (
    <div className="relative overflow-hidden w-full flex items-center justify-center">
      {/* motion scroll */}
      <motion.div
        className="flex gap-4"
        animate={{ x }}
        transition={{ ease: "linear", duration: 0 }}
      >
        {/* Map over the static array, using the index (i) modulo the original array length */}
        {renderedItems.map((_, i) => {
          const videoIndex = i % originalLength;
          const v = videos[videoIndex];

          return (
            <div
              key={i}
              className="relative w-[80px] h-[137px] flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-sm"
            >
              <img
                src={v.src}
                alt=""
                className="object-cover w-full h-full opacity-90"
              />
              <div className="absolute bottom-1 left-1 flex items-center text-white text-sm font-semibold px-2 py-1 rounded-md">
                <FontAwesomeIcon icon={faPlay} className="me-1" /> {v.views}
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Carousel;

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const texts = ["in 1 click.", "in 1 prompt.", "in 1 url."];

export default function HeroText() {
  const [index, setIndex] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="text-4xl md:text-7xl text-white font-bold text-center px-4">
        <div className="flex flex-col md:flex-row md:space-x-4 items-center justify-center">
          <span>{t("Create")}</span>
          <span className="text-primary bg-white px-4 rounded-2xl">
            {t("viral clips")}
          </span>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            className="mt-2 md:mt-4 justify-center items-center"
            key={texts[index]}
            initial={{ rotateX: 90, opacity: 0, y: 20 }}
            animate={{ rotateX: 0, opacity: 1, y: 0 }}
            exit={{ rotateX: -90, opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "backInOut" }}
          >
            {t(texts[index])}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="text-white text-base md:text-xl font-bold text-center max-w-120 px-4">
        {t(
          "Instantly turn your videos and ideas into viral and monetizable short content"
        )}
      </div>
    </>
  );
}

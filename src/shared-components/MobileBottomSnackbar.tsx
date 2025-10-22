import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

const MobileBottomSnackbar: React.FC = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const generateSection = document.getElementById("generate-tiktok-section");
      if (generateSection) {
        const rect = generateSection.getBoundingClientRect();
        // Show snackbar when the Generate TikTok button is not visible (scrolled past)
        setIsVisible(rect.bottom < 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Check on mount
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.open("https://app.remakeit.io/gen/videos/new", "_blank");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          <div className="w-full bg-white/70 backdrop-blur p-4 flex flex-col gap-3 items-center">
            <button
              onClick={handleClick}
              className="w-full bg-primary rounded-2xl shadow-lg p-4 cursor-pointer active:scale-95 transition-transform"
              aria-label={t("Start generating your first video")}
            >
              <p className="text-center text-sm font-medium text-white">
                {t("Start generating your first video")}
                {" ! 🎁"}
              </p>
            </button>
            <p className="text-xs text-gray-700 text-center font-medium">
              {t("800K video creators trust us")}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileBottomSnackbar;


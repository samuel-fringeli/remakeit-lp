import React from "react";
import { motion } from "framer-motion";

import Carousel from "../shared-components/Carousel";
import ctaIcon from "../assets/hero/cta-icon.svg";
import HeroText from "../shared-components/HeroText";
import PromptOrYoutube from "../shared-components/PromptOrYoutube";
import { useTranslation } from "react-i18next";

const Hero: React.FC = () => {
  const { t } = useTranslation();
  return (
    <motion.section
      id="hero"
      className="relative min-h-[calc(100vh-100px)] md:min-h-screen space-y-8 flex flex-col items-center justify-center pb-8 pt-22 bg-white overflow-hidden"
      initial={{ y: 10 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Primary color cloud background with opacity */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-2/9 md:top-1/12 left-1/2 -translate-x-1/2 w-full md:w-[1200px] h-[100px] md:h-[300px] bg-primary opacity-60 md:opacity-40 rounded-full blur-3xl"></div>
      </div>

      {/* Content with relative positioning */}
      <div className="relative z-10 w-full space-y-8 flex flex-col items-center">
        {/* CTA */}
        <div className="flex items-center justify-center gap-2 text-xs bg-gray-400/50 w-fit px-2 py-1 text-white rounded-full">
          <img src={ctaIcon} alt="cta" className="size-3" />
          {t("800K users")}
        </div>

        {/* Title */}
        <HeroText />

        {/* Desktop: Prompt then Carousel, Mobile: Carousel then Prompt */}
        <div className="w-full flex flex-col md:flex-col-reverse gap-8 items-center">
          <Carousel />
          <PromptOrYoutube />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;

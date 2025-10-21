import React from "react";
import { motion } from "framer-motion";

import Carousel from "../shared-components/Carousel";
import ctaIcon from "../assets/hero/cta-icon.svg";
import bgImage from "../assets/hero-bg.svg";
import HeroText from "../shared-components/HeroText";
import PromptOrYoutube from "../shared-components/PromptOrYoutube";
import { useTranslation } from "react-i18next";

const Hero: React.FC = () => {
  const { t } = useTranslation();
  return (
    <motion.section
      id="hero"
      className={"space-y-8 flex flex-col items-center pb-8 pt-22"}
      style={{ background: `url(${bgImage})` }}
      initial={{ y: 10 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* CTA */}
      <div className="flex items-center justify-center gap-2 text-xs bg-white/20 backdrop-blur-sm w-fit px-2 py-1 text-white rounded-lg border border-white/30">
        <img src={ctaIcon} alt="cta" className="size-4 text-yellow-500" />
        {t("800K users")}
      </div>

      {/* Title */}
      <HeroText />

      {/* Desktop: Prompt then Carousel, Mobile: Carousel then Prompt */}
      <div className="w-full flex flex-col md:flex-col-reverse gap-8 items-center">
        <Carousel />
        <PromptOrYoutube />
      </div>
    </motion.section>
  );
};

export default Hero;

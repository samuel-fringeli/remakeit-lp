import React from "react";

import Carousel from "../shared-components/Carousel";
import ctaIcon from "../assets/hero/cta-icon.svg";
import bgImage from "../assets/hero-bg.svg";
import HeroText from "../shared-components/HeroText";
import PromptOrYoutube from "../shared-components/PromptOrYoutube";

const Hero: React.FC = () => {
  return (
    <section
      className={"space-y-8 flex flex-col items-center pb-8 pt-22"}
      style={{ background: `url(${bgImage})` }}
    >
      {/* CTA */}
      <div className="flex items-center justify-center gap-2 text-sm bg-primary/80 w-fit px-2 py-1 text-white rounded-lg">
        <img src={ctaIcon} alt="cta" className="size-6 text-yellow-500" />
        800K users
      </div>

      {/* Title */}
      <HeroText />

      <Carousel />

      {/* prompt input */}
      <PromptOrYoutube />
    </section>
  );
};

export default Hero;

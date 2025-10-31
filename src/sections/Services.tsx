import { useTranslation } from "react-i18next";
import SectionNameRenderer from "../shared-components/SectionNameRenderer";
import { Grid } from "@mui/material";
import servicesCardVeo3 from "../assets/services/services-card-veo-3.avif";
import promptToVideoAnim from "../assets/services/Prompt to video_1.mp4";
import autoPublishAnim from "../assets/services/Auto_publish_V1.mp4";
import remakeitShortsAnim from "../assets/services/Remakeit-shorts.mp4";
import Subtext from "../shared-components/Subtext";
import TitleRenderer from "../shared-components/TitleRenderer";

const Card = ({
  title,
  description,
  imageSrc,
  videoSrc,
  gridSize,
  className,
}: {
  title: string;
  description: string;
  imageSrc?: string;
  videoSrc?: string;
  gridSize: number;
  className?: string;
}) => {
  let mediaContent;
  
  if (videoSrc) {
    mediaContent = (
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        className="rounded-2xl w-full h-auto"
      />
    );
  } else if (imageSrc) {
    mediaContent = (
      <img src={imageSrc} alt={title} className="rounded-2xl h-64 w-full object-cover" />
    );
  } else {
    mediaContent = (
      <div className="bg-white text-gray-800 !text-sm rounded-lg px-8 py-4">
        {"Youtube video URL / Video idea"}
      </div>
    );
  }

  return (
    <Grid
      size={{ xs: 12, md: gridSize }}
      className={`p-8 rounded-2xl shadow-md space-y-8 cursor-default text-lg ${className}`}
    >
      <h3 className="font-semibold text-2xl">{title}</h3>
      <p className="mb-8">{description}</p>
      {mediaContent}
    </Grid>
  );
};

const Services = () => {
  const { t } = useTranslation();

  const cardsData = [
    {
      title: t("Remakeit Shorts"),
      description:
        t("Turn any YouTube video or idea into videos that are ready to post. Detection of the best moments, optimized formats and instant export"),
      imageSrc: "",
      videoSrc: remakeitShortsAnim,
    },
    {
      title: t("Prompt to video"),
      description:
        t("Describe your idea: the AI generates the script and the content. Ideal for launching new series or formats in a few minutes"),
      imageSrc: "",
      videoSrc: promptToVideoAnim,
    },
    {
      title: t("Auto-publish"),
      description:
        t("Seamlessly publish your content across multiple platforms. See how automated scheduling and publishing works in just one click"),
      imageSrc: "",
      videoSrc: autoPublishAnim,
    },
    // {
    //   title: t("Speech synthesis"),
    //   description:
    //     t("Generate a natural voiceover with style and personality. Choose voice, intonation, and export narration ready to be integrated into your videos"),
    //   imageSrc: "",
    //   videoSrc: "",
    // },
    {
      title: t("VEO 3 power"),
      description:
        t("Access the new technology of Google Veo3 directly in RemakeIt. Generation of realistic videos, spectacular settings and living characters"),
      imageSrc: servicesCardVeo3,
      videoSrc: "",
    },
  ];

  return (
    <section
      id="services"
      className="container flex flex-col items-center justify-center py-8 space-y-8"
    >
      <SectionNameRenderer name={t("Services")} />

      <TitleRenderer
        title={t("All of your video tools, at same place")}
        highlightIndexes={[3, 4, -1, -2]}
      />

      <Subtext
        text={t("Generate, improve, and publish your content in a single workflow. Choose a service below to find out the details and a short usage demo")}
      />

      <Grid container spacing={2}>
        {cardsData.map((card, index) => {
          let cardClassName;
          let cardGridSize;
          let mobileOrder;

          if ([0, 3].includes(index)) {
            cardClassName = "bg-primary/80 text-white hover:bg-primary/90";
            cardGridSize = 5;
          } else {
            cardClassName = "bg-black/90 text-white hover:bg-gray-800";
            cardGridSize = 7;
          }

          // Mobile order: 1, 2, 4, 3 (indices: 0, 1, 3, 2)
          if (index === 2) {
            mobileOrder = "order-4 md:order-none";
          } else if (index === 3) {
            mobileOrder = "order-3 md:order-none";
          } else {
            mobileOrder = "";
          }

          return (
            <Card
              key={card.title}
              title={card.title}
              description={card.description}
              imageSrc={card.imageSrc}
              videoSrc={card.videoSrc}
              gridSize={cardGridSize}
              className={`${cardClassName} ${mobileOrder}`}
            />
          );
        })}
      </Grid>
    </section>
  );
};

export default Services;

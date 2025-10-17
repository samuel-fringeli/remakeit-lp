import { useTranslation } from "react-i18next";
import SectionNameRenderer from "../shared-components/SectionNameRenderer";
import { Grid } from "@mui/material";
import promptToVideo from "../assets/services/prompt-to-video.avif";
import servicesCardVeo3 from "../assets/services/services-card-veo-3.avif";
import Subtext from "../shared-components/Subtext";
import TitleRenderer from "../shared-components/TitleRenderer";

const cardsData = [
  {
    title: "Remakeit Shorts",
    description:
      "Turn any YouTube video or idea into videos that are ready to post. Detection of the best moments, optimized formats and instant export",
    imageSrc: "",
  },
  {
    title: "Prompt to video",
    description:
      "Describe your idea: the AI generates the script and the content. Ideal for launching new series or formats in a few minutes",
    imageSrc: promptToVideo,
  },
  {
    title: "Speech synthesis",
    description:
      "Generate a natural voiceover with style and personality. Choose voice, intonation, and export narration ready to be integrated into your videos",
    imageSrc: "",
  },
  {
    title: "VEO 3 power",
    description:
      "Access the new technology of Google Veo3 directly in RemakeIt. Generation of realistic videos, spectacular settings and living characters",
    imageSrc: servicesCardVeo3,
  },
];

const Card = ({
  title,
  description,
  imageSrc,
  gridSize,
  className,
}: {
  title: string;
  description: string;
  imageSrc?: string;
  gridSize: number;
  className?: string;
}) => {
  const { t } = useTranslation();
  return (
    <Grid
      size={{ xs: 12, md: gridSize }}
      className={`p-8 rounded-2xl shadow-md space-y-8 cursor-default text-lg ${className}`}
    >
      <h3 className="text-white font-semibold text-2xl">{t(title)}</h3>
      <p className="mb-8">{t(description)}</p>
      {imageSrc ? (
        <img src={imageSrc} alt={title} className="rounded-2xl h-36" />
      ) : (
        <div className="bg-white text-gray-800 !text-sm rounded-lg px-8 py-4">
          {t("Youtube video URL / Video idea")}
        </div>
      )}
    </Grid>
  );
};

const Services = () => {
  return (
    <section
      id="services"
      className="container flex flex-col items-center justify-center py-8 space-y-8"
    >
      <SectionNameRenderer name="Services" />

      <TitleRenderer
        title="All of your video tools, at same place"
        highlightIndexes={[3, 4, -1, -2]}
      />

      <Subtext
        text="Generate, improve, and publish your content in a single workflow. Choose a service below to find out the details and a short usage demo"
        width="1/3"
      />

      <Grid container spacing={2}>
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageSrc={card.imageSrc}
            gridSize={[0, 3].includes(index) ? 5 : 7}
            className={
              [0, 3].includes(index)
                ? "bg-primary/80 text-white/60 hover:bg-black/90"
                : "bg-black/90 text-white/60 hover:bg-primary/80"
            }
          />
        ))}
      </Grid>
    </section>
  );
};

export default Services;

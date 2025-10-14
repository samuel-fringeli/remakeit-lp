import { useTranslation } from "react-i18next";
import SectionNameRenderer from "../shared-components/SectionNameRenderer";
import { Grid } from "@mui/material";

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
    imageSrc: "",
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
    imageSrc: "",
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
  imageSrc: string;
  gridSize: number;
  className?: string;
}) => {
  const { t } = useTranslation();
  return (
    <Grid
      size={gridSize}
      className={`p-4 rounded-lg shadow-md space-y-8 cursor-default text-lg ${className}`}
    >
      <h3 className="text-white font-semibold text-2xl">{t(title)}</h3>
      <p className="mb-4">{t(description)}</p>
      {!!imageSrc && <img src={imageSrc} alt={title} />}
    </Grid>
  );
};

const Services = () => {
  return (
    <div className="container flex flex-col items-center justify-center py-8 space-y-8">
      <SectionNameRenderer name="Services" />
      <div className="text-6xl font-bold uppercase text-center">
        All of your <span className="text-primary">video tools</span>, at
        <span className="text-primary ms-4">same place</span>
      </div>
      <div className="text-lg w-1/3 text-gray-400 font-semibold text-center">
        Generate, improve, and publish your content in a single workflow. Choose
        a service below to find out the details and a short usage demo
      </div>

      <Grid container spacing={2}>
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageSrc={card.imageSrc}
            gridSize={[0, 3].includes(index) ? 7 : 5}
            className={
              [0, 3].includes(index)
                ? "bg-primary/80 text-white/60 hover:bg-black/90 w-2/3"
                : "bg-black/90 text-white/60 hover:bg-primary/80 w-1/3"
            }
          />
        ))}
      </Grid>
    </div>
  );
};

export default Services;

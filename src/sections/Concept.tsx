import SectionNameRenderer from "../shared-components/SectionNameRenderer";
import conceptCardImage from "../assets/concept/concept-card-2-image.avif";
import { Button, TextField } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Subtext from "../shared-components/Subtext";
import TitleRenderer from "../shared-components/TitleRenderer";

const cardsData = [
  {
    title: "Write your video idea",
    description:
      "Simply share a keyword, topic, or idea. RemakeIt understands your intent and prepares the magic in the background.",
    innerComponent: (
      <div className="w-full flex flex-col gap-2">
        <TextField
          fullWidth
          size="small"
          placeholder="Write your idea"
          slotProps={{ input: { className: "bg-white" } }}
        />
        <Button
          variant="contained"
          className="!bg-primary rounded w-full"
          children={"Find video"}
        />
      </div>
    ),
  },
  {
    title: "RemakeIt does everything for you",
    description:
      "No need to search, cut, or edit. The AI automatically selects the best moments and creates your videos.",
    innerComponent: (
      <img
        src={conceptCardImage}
        alt="concept image"
        className="rounded-lg h-full"
      />
    ),
  },
  {
    title: "Publish everywhere in one click",
    description:
      "With RemakeIt, you can schedule or post directly to your favorite social networks, without ever leaving the app",
    innerComponent: (
      <div className="w-full flex flex-col gap-2">
        <div className="flex items-center justify-evenly">
          <FontAwesomeIcon
            className="!size-8 p-2 rounded-lg bg-primary/30 text-white"
            icon={faTiktok}
          />
          <FontAwesomeIcon
            className="!size-8 p-2 rounded-lg bg-primary/30 text-white"
            icon={faInstagram}
          />
          <FontAwesomeIcon
            className="!size-8 p-2 rounded-lg bg-primary/30 text-white"
            icon={faYoutube}
          />
        </div>
        <Button
          variant="contained"
          className="!bg-primary rounded w-full"
          children={"Publish now"}
        />
      </div>
    ),
  },
];

const Concept = () => {
  return (
    <section
      id="concept"
      className="container flex flex-col space-y-8 items-center py-8"
    >
      <SectionNameRenderer name="Concept" />
      <TitleRenderer title="Get your videos viral" highlightIndexes={[-1]} />
      <Subtext
        text="In 3 simple steps, go from your idea to a viral video ready to post"
        width="1/3"
      />

      <div className="flex w-full gap-6 flex-col lg:flex-row justify-center">
        {cardsData.map((card, index) => (
          <div key={index} className="flex flex-col gap-4 w-full">
            <div className="px-3 py-2 border border-primary text-primary w-fit rounded-lg font-extrabold text-5xl">
              {index + 1}
            </div>
            <div className="w-full bg-primary/20 border border-primary/20 rounded-2xl p-4 h-60 flex items-center justify-center">
              {card.innerComponent}
            </div>
            <div className="text-lg font-bold">{card.title}</div>
            <div className="text-lg text-gray-400">{card.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Concept;

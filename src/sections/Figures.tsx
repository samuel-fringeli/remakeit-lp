import { Button, Grid } from "@mui/material";
import SectionNameRenderer from "../shared-components/SectionNameRenderer";
import type { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPlayCircle, faUser } from "@fortawesome/free-solid-svg-icons";

const cardData = [
  {
    number: 600,
    subtext: "videos created per day",
    icon: <FontAwesomeIcon className="!size-8" icon={faPlayCircle} />,
  },
  {
    number: 25,
    subtext: "billion views generated",
    postfix: "B",
    icon: <FontAwesomeIcon className="!size-8" icon={faEye} />,
  },
  {
    number: 550,
    subtext: "users",
    postfix: "K",
    icon: <FontAwesomeIcon className="!size-8" icon={faUser} />,
  },
];

const Card = ({
  icon,
  number,
  postfix = "",
  subtext,
}: {
  icon?: ReactNode;
  number: number;
  postfix?: string;
  subtext: string;
}) => (
  <Grid
    size={{ xs: 12, md: 4 }}
    className="bg-primary relative text-white rounded-lg px-16 pb-8 pt-16 space-y-2 cursor-default"
  >
    <div className="absolute top-4 left-4">{icon}</div>
    <div className="flex items-center justify-center text-2xl font-bold">
      + <span className="text-7xl font-bold">{number}</span> {postfix}
    </div>
    <div className="text-center opacity-60 text-nowrap">{subtext}</div>
  </Grid>
);

const Figures = () => {
  return (
    <section className="container bg-black p-8 flex flex-col gap-8 items-center justify-center rounded-4xl">
      <SectionNameRenderer name="A few figures" isDark />
      <div className="uppercase text-6xl font-bold text-center text-white">
        Why choose
        <span className="text-primary mx-4">Remakeit</span>?
      </div>
      <div className="text-lg w-1/3 text-gray-400 font-semibold text-center">
        RemakeIt is thousands of videos created, billions of views generated and
        a large community of users who trust us every day
      </div>
      <Grid container spacing={2}>
        {cardData.map((card) => (
          <Card key={card.number} {...card} />
        ))}
      </Grid>
      <Button
        variant="contained"
        className="!bg-primary rounded-full hover:bg-primary/60"
        children={"Try it now"}
      />
    </section>
  );
};

export default Figures;

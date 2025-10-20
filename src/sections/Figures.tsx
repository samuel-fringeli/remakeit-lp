import { Grid } from "@mui/material";
import SectionNameRenderer from "../shared-components/SectionNameRenderer";
import type { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPlayCircle, faUser } from "@fortawesome/free-solid-svg-icons";
import TryCustomButton from "../shared-components/TryCustomButton";
import Subtext from "../shared-components/Subtext";
import TitleRenderer from "../shared-components/TitleRenderer";
import { useTranslation } from "react-i18next";

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
}) => {
  return (
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
};

const Figures = () => {
  const { t } = useTranslation();

  const cardData = [
    {
      number: 600,
      subtext: t("videos created per day"),
      icon: <FontAwesomeIcon className="!size-8" icon={faPlayCircle} />,
    },
    {
      number: 25,
      subtext: t("billion views generated"),
      postfix: "B",
      icon: <FontAwesomeIcon className="!size-8" icon={faEye} />,
    },
    {
      number: 550,
      subtext: t("users"),
      postfix: "K",
      icon: <FontAwesomeIcon className="!size-8" icon={faUser} />,
    },
  ];

  return (
    <section
      id="figures"
      className="container bg-black p-8 flex flex-col gap-8 items-center justify-center rounded-4xl"
    >
      <SectionNameRenderer name={t("A few figures")} isDark />
      <TitleRenderer
        isDark
        title={t("Why choose RemakeIt ?")}
        highlightIndexes={[-2]}
      />
      <Subtext
        text={t("RemakeIt is thousands of videos created, billions of views generated and a large community of users who trust us every day")}
        width="1/3"
      />
      <Grid container spacing={2}>
        {cardData.map((card) => (
          <Card key={card.number} {...card} />
        ))}
      </Grid>
      <TryCustomButton />
    </section>
  );
};

export default Figures;

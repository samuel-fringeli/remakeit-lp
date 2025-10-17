import { useTranslation } from "react-i18next";
import SectionNameRenderer from "../shared-components/SectionNameRenderer";
import { Divider } from "@mui/material";
import before from "../assets/before-after/before.png";
import after from "../assets/before-after/after.png";
import CustomButton from "../shared-components/CustomButton";
import Subtext from "../shared-components/Subtext";
import TitleRenderer from "../shared-components/TitleRenderer";

const ImageWithTitle = ({
  title,
  source,
}: {
  title: string;
  source: string;
}) => {
  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="uppercase font-bold text-5xl">{title}</div>
      <div className="aspect-video w-[450px] overflow-hidden rounded-xl">
        <img
          src={source}
          alt={title}
          className="w-full h-full object-fill"
          draggable={false}
        />
      </div>
    </div>
  );
};

const BeforeAfter = () => {
  const { t } = useTranslation();
  return (
    <section
      id="before-after"
      className="container my-8 flex flex-col items-center gap-8"
    >
      <SectionNameRenderer name="Before / After" />
      <TitleRenderer
        title="Of your videos Long to your content virals"
        highlightIndexes={[3, -1]}
        width="70%"
      />
      <Subtext
        text="With RemakeIt, your YouTube videos are given a second life. A single video can be transformed into several short clips, optimized for social networks"
        width="1/3"
      />
      <div className="w-full xl:flex space-y-8 lg:justify-center gap-16">
        <ImageWithTitle title={t("Before")} source={before} />
        <Divider
          orientation="vertical"
          flexItem
          sx={{ alignSelf: "stretch", borderColor: "gray.500" }}
        />
        <ImageWithTitle title={t("After")} source={after} />
      </div>
      <CustomButton />
    </section>
  );
};

export default BeforeAfter;

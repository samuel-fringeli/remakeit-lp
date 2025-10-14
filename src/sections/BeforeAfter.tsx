import { useTranslation } from "react-i18next";
import SectionNameRenderer from "../shared-components/SectionNameRenderer";
import { Button, Divider } from "@mui/material";
import before from "../assets/before-after/before.png";
import after from "../assets/before-after/after.png";

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
    <div className="container my-8 flex flex-col items-center gap-8">
      <SectionNameRenderer name="Before / After" />
      <div className="uppercase text-6xl font-bold text-center w-2/3">
        Of your videos <span className="text-primary">Long</span> to your
        content <span className="text-primary">virals</span>
      </div>
      <div className="text-lg text-gray-400 font-semibold text-center w-1/3">
        With RemakeIt, your YouTube videos are given a second life. A single
        video can be transformed into several short clips, optimized for social
        networks
      </div>
      <div className="w-full xl:flex space-y-8 lg:justify-center gap-16">
        <ImageWithTitle title={t("Before")} source={before} />
        <Divider
          orientation="vertical"
          flexItem
          sx={{ alignSelf: "stretch", borderColor: "gray.500" }}
        />
        <ImageWithTitle title={t("After")} source={after} />
      </div>
      <Button
        variant="contained"
        className="!bg-primary rounded-full hover:bg-primary/60"
        children={t("Try it now")}
      />
    </div>
  );
};

export default BeforeAfter;

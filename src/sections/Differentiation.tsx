import { Button } from "@mui/material";
import SectionNameRenderer from "../shared-components/SectionNameRenderer";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faXmarkCircle,
} from "@fortawesome/free-regular-svg-icons";
import Logo from "../assets/Logo";

const Differentiation = () => {
  const { t } = useTranslation();

  const differences = {
    remakeit: [
      "AI creates your video automatically",
      "Programming and direct publishing",
      "Optimizing formats (TikTok, Reels, Shorts)",
      "Simple and fast interface, with a single click",
    ],
    others: [
      "Time-consuming manual cutting",
      "No integrated multi-network publishing",
      "Several tools required",
      "Less efficient results",
    ],
  };

  return (
    <div className="container flex flex-col items-center my-8 gap-8 py-8">
      <SectionNameRenderer name="Differentiation" />
      <div className="text-6xl font-bold uppercase text-center">
        Why is Remakeit <span className="text-primary">Unique</span> ?
      </div>
      <div className="text-lg w-1/2 text-gray-400 font-semibold text-center">
        RemakeIt doesn't just cut your videos: our AI creates real short content
        optimized for TikTok, Instagram, and YouTube Shorts
      </div>

      <div className="flex w-full gap-6 flex-col lg:flex-row">
        <div className="lg:w-1/2 bg-primary/20 p-12 space-y-8 text-lg rounded-2xl border border-primary/30 shadow-xl">
          <div className="flex items-center">
            <span className="me-2">With</span>
            <div className="text-primary text-xl font-bold flex h-fit items-center">
              <Logo className="size-6" />
              Remakeit
            </div>
          </div>
          {differences.remakeit.map((item, index) => (
            <div key={index} className="flex gap-2 items-center">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="!text-primary size-6"
              />
              <div className="font-bold text-gray-900">{item}</div>
            </div>
          ))}
        </div>
        <div className="lg:w-1/2 border border-gray-200 rounded-2xl p-12 space-y-8 shadow-xl text-lg">
          <div>With the other tools</div>
          {differences.others.map((item, index) => (
            <div key={index} className="flex gap-2 items-center">
              <FontAwesomeIcon
                icon={faXmarkCircle}
                className="text-red-600 size-6"
              />

              <div className="font-bold text-gray-900">{item}</div>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="contained"
        className="!bg-primary rounded-full hover:!bg-primary/80"
        children={t("Try it now")}
      />
    </div>
  );
};

export default Differentiation;

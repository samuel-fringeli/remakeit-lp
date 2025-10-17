import SectionNameRenderer from "../shared-components/SectionNameRenderer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
import RemakeItLogo from "../shared-components/RemakeItLogo";
import CustomButton from "../shared-components/CustomButton";
import Subtext from "../shared-components/Subtext";
import TitleRenderer from "../shared-components/TitleRenderer";
import { useTranslation } from "react-i18next";

const Differentiation = () => {
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

  const { t } = useTranslation();

  return (
    <section
      id="differentiation"
      className="container flex flex-col items-center my-8 gap-8 py-8"
    >
      <SectionNameRenderer name="Differentiation" />
      <TitleRenderer title="Why is RemakeIt Unique ?" highlightIndexes={[-2]} />
      <Subtext
        text="RemakeIt doesn't just cut your videos: our AI creates real short content optimized for TikTok, Instagram, and YouTube Shorts"
        width="1/2"
      />

      <div className="flex w-full gap-6 flex-col lg:flex-row">
        <div className="lg:w-1/2 bg-primary/20 p-12 space-y-8 text-lg rounded-2xl border border-primary/30 shadow-xl">
          <div className="flex items-center">
            <span className="me-2">{t("With")}</span>
            <RemakeItLogo />
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
          <div>{t("With the other tools")}</div>
          {differences.others.map((item, index) => (
            <div key={index} className="flex gap-2 items-center">
              <FontAwesomeIcon
                icon={faXmarkCircle}
                className="text-red-600 size-6"
              />

              <div className="font-bold text-gray-900">{t(item)}</div>
            </div>
          ))}
        </div>
      </div>

      <CustomButton />
    </section>
  );
};

export default Differentiation;

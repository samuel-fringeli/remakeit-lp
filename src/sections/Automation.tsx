import SectionNameRenderer from "../shared-components/SectionNameRenderer";
import remakeItToOthers from "../assets/automation/remakeit-to-others.svg";
import TryCustomButton from "../shared-components/TryCustomButton";
import Subtext from "../shared-components/Subtext";
import TitleRenderer from "../shared-components/TitleRenderer";
import { useTranslation } from "react-i18next";

const Automation = () => {
  const { t } = useTranslation();

  return (
    <section
      id="automation"
      className="container flex flex-col space-y-8 items-center py-8"
    >
      <SectionNameRenderer name={t("Automation")} />

      <TitleRenderer
        title={t("Publish everywhere, automatically")}
        highlightIndexes={[-1]}
      />

      <Subtext
        text={t("With RemakeIt, you no longer need to open each application. Program or publish in one click, and your videos are automatically broadcast on your networks")}
      />

      <img
        draggable={false}
        src={remakeItToOthers}
        alt="platforms"
        className="overflow-auto max-w-3/4 object-cover h-fit"
      />

      <TryCustomButton />
    </section>
  );
};

export default Automation;

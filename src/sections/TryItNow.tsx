import TryCustomButton from "../shared-components/TryCustomButton";
import Subtext from "../shared-components/Subtext";
import TitleRenderer from "../shared-components/TitleRenderer";
import { useTranslation } from "react-i18next";

const TryItNow = () => {
  const { t } = useTranslation();

  return (
    <section id="try-it-now" className="container mx-auto my-16">
      <div className="rounded-4xl bg-black p-16 text-white space-y-16">
        <TitleRenderer
          title={t("Ready to create your viral videos?")}
          highlightIndexes={[-1, -2]}
          align="start"
        />
        <Subtext
          text={t("Join RemakeIt now and start generating your first content in one click. Register for free and test the platform")}
          align="left"
          width="1/2"
        />
        <TryCustomButton />
      </div>
    </section>
  );
};

export default TryItNow;

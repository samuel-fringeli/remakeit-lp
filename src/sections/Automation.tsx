import SectionNameRenderer from "../shared-components/SectionNameRenderer";
import remakeItToOthers from "../assets/automation/remakeit-to-others.svg";
import CustomButton from "../shared-components/CustomButton";
import Subtext from "../shared-components/Subtext";
import TitleRenderer from "../shared-components/TitleRenderer";

const Automation = () => {
  return (
    <section
      id="automation"
      className="container flex flex-col space-y-8 items-center py-8"
    >
      <SectionNameRenderer name="Automation" />

      <TitleRenderer
        title="Publish everywhere, automatically"
        highlightIndexes={[-1]}
      />

      <Subtext
        text="With RemakeIt, you no longer need to open each application. Program or publish in one click, and your videos are automatically broadcast on your networks"
        width="2/5"
      />

      <img
        draggable={false}
        src={remakeItToOthers}
        alt="platforms"
        className="overflow-auto max-w-3/4 object-cover h-fit"
      />

      <CustomButton />
    </section>
  );
};

export default Automation;

import { Button } from "@mui/material";
import SectionNameRenderer from "../shared-components/SectionNameRenderer";
import remakeItToOthers from "../assets/automation/remakeit-to-others.svg";

const Automation = () => {
  return (
    <div className="container flex flex-col  items-center py-8">
      <SectionNameRenderer name="Automation" />
      <div className="uppercase text-center text-6xl font-bold py-8">
        <span>Publish everywhere,</span>
        <span className="text-primary ms-4">automatically</span>
      </div>
      <div className="text-lg w-2/5 text-gray-400 font-semibold text-center">
        With RemakeIt, you no longer need to open each application. Program or
        publish in one click, and your videos are automatically broadcast on
        your networks
      </div>

      <img
        draggable={false}
        src={remakeItToOthers}
        alt="platforms"
        className="max-w-3/4"
      />

      <Button
        variant="contained"
        className="!bg-primary rounded-full hover:bg-primary/60"
        children={"Try it now"}
      />
    </div>
  );
};

export default Automation;

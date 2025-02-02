import ConstructionVidio from "@/assets/steel-frame.mp4";
import { Heading } from "./ui/heading";
import VidioSection from "./ui/vidioCard";

const SteelFraming = () => {
  return (
    <div className="mt-12" id="steel-framing">
      <Heading
        title={"#Steel Framing"}
        textSmall
        borderSide
        description={"Your Quality constrution products"}
        paragraph={
          " ensure a smooth, transparent journey from the first consultation to the final inspection."
        }
        widthFull
      />
      <div className="p-5 m-2">
        <VidioSection
          vidioPath={ConstructionVidio}
          title={"Your construction framing "}
          gradientFull
        />
      </div>
    </div>
  );
};

export default SteelFraming;

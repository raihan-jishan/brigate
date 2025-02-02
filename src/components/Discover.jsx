import ConstructionVidio from '@/assets/discover-vidio.mp4';
import { Heading } from "@/components/ui/heading";
import VidioSection from "./ui/vidioCard";

const Discover = () => {
  return (
    <div className="mt-12">
      <Heading
        title={"discover"}
        textSmall
        borderSide
        description={"Discover your dream plan"}
        paragraph={
          " ensure a smooth, transparent journey from the first consultation to the final inspection."
        }
        MobilewidthFull
      />
      <div className='p-5 m-2'>
        <VidioSection
        vidioPath={ConstructionVidio}
        title={'Your Vision, Our Expertise Let’s Build Together'}
        
        gradientFull
        />
      </div>
    </div>
  );
};

export default Discover;

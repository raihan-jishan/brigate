import HeroHeading from "./ui/heroHeading";
import HeroImage from "./ui/heroImage";

const Hero = () => {
  return (
    <div className="bg-orange-100">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12    max-lg:flex max-lg:flex-col-reverse mt-16">
        <HeroHeading />

        <HeroImage />
      </div>
    </div>
  );
};

export default Hero;

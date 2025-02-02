import { BtnPrimary } from "@/components/ui/button";
import { heroTextData } from "@/constants";
const HeroHeading = () => {
  return (
    <div className="mr-auto place-self-center lg:col-span-7">
      {heroTextData.map((item, index) => {
        return (
          <div key={index}>
            <h1 className="max-w-2xl mb-4 text-4xl  tracking-tight leading-[20px] max-lg:leading-[38px] md:text-5xl xl:text-6xl dark:text-black font-bold font-Poppins">
              {item.heroText}
            </h1>
            <p className="max-w-2xl mb-6    text-gray-900 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-500   ">
              {item.heroDescription}
            </p>
            <div className="flex gap-3 max-lg:flex-col" key={index}>
              {item.btnData.map((item, index) => {
                return <BtnPrimary label={item.btnText}  key={index} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HeroHeading;

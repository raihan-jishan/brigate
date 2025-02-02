import { pricingCardData } from "@/constants/data";
import { PricingCard } from "./ui/card";
import { Heading } from "./ui/heading";

const Pricing = () => {
  return (
    <section id="pricing" className="mt-14">
      <Heading
        title={"#pricing table"}
        textSmall
        borderSide
        description={"How We Build Your Dream Home"}
        paragraph={
          " ensure a smooth, transparent journey from the first consultation to the final inspection."
        }
        widthMedium
      />
      <div className="flex items-center justify-center overflow-x-hidden">
        <div className="flex flex-col items-center justify-center py-12 relative">
          <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-blue-500 rounded-full blur-[10rem] -z-10"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 w-full md:gap-8 py-2   flex-wrap max-w-4xl">
            {pricingCardData.map((card, index) => (
              <PricingCard key={index} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

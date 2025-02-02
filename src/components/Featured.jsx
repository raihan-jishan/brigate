import { featuredLogos } from "@/constants/image";
import { FeaturedCard } from "./ui/card";
import { FeatureHeading } from "./ui/heading";
const Featured = () => {
  return (
    <div className="bg-orange-100" id="why-brigate">
      <FeatureHeading label={" Trusted by the World's Best Companies"} />
      <div className="   grid grid-cols-5 p-10 m-10 -mt-6 max-lg:-mt-12  max-lg:grid-cols-1 max-lg:p-8  ">
         {featuredLogos.map((item, index) =>{
          return (
            <FeaturedCard key={index} ImageUrl={item.image}/>
          )
         })}
      </div>
    </div>
  );
};

export default Featured;

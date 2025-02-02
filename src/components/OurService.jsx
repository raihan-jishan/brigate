import { serviceCardData } from "@/constants/data";
import { ServiceCard } from "./ui/card";
import { Heading } from "./ui/heading";

const OurService = () => {
  return (
    <div>
      <Heading
        title={"Our service's"}
        textSmall
        borderSide
        description={"Steps that we do for our clients"}
        paragraph={
          " ensure a smooth, transparent journey from the first consultation to the final inspection."
        }
      />
      <div className="grid grid-cols-2 gap-2 m-5 p-5  max-lg:grid-cols-1 max-lg:m-2 max-lg:p-2 ">
        {serviceCardData.map((item, index) => {
          return (
            <ServiceCard
              key={index}
              Icon={item.imageUrl}
              label={item.title}
              status={item.status}
              percentage={item.percentage}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OurService;

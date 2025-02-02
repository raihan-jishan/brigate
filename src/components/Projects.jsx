import { houseData } from "@/constants/data";
import { useState } from "react";
import { FaSortAmountDown, FaSortAmountUpAlt } from "react-icons/fa";
import { BtnPrimary } from "./ui/button";
import { WorkCard } from "./ui/card";
import { Heading } from "./ui/heading";

const Projects = () => {
  // initialize useState hook
  const [showAll, setShowAll] = useState(false); // State to control showing all items or just 4

  // Slice the array to show only the first 4 items initially
  const displayedData = showAll ? houseData : houseData.slice(0, 4);
  return (
    <section id="houses">
      <Heading
        title={"#House's"}
        description={"Our all works that prove our skills"}
        paragraph={
          " ensure a smooth, transparent journey from the first consultation to the final inspection."
        }
        textSmall
        borderSide
        MobilewidthFull
        widthMedium
      />

      <div className="grid grid-cols-2 gap-2 m-5 p-5  max-lg:grid-cols-1 max-lg:m-2 max-lg:p-2 transition-all ">
        {displayedData.map((item, index) => {
          return (
            <WorkCard
              key={index}
              ImageUrl={item.imageUrl}
              label={item.name}
              status={item.status}
              percentage={item.percentage}
              description={item.description}
            />
          );
        })}
      </div>
      {/* Toggle Button */}
      <div className="flex items-center justify-center">
        {/* <BtnPrimary onClick={alert('hello world')} label={'See More'} /> */}
        <BtnPrimary
          label={showAll ? "show less" : "show more"}
          onClick={() => setShowAll((prevState) => !prevState)}
          icon={
            showAll ? (
              <FaSortAmountUpAlt size={25} />
            ) : (
              <FaSortAmountDown size={25} />
            )
          }
        />
      </div>
      {/* <button
        onClick={() => setShowAll((prevState) => !prevState)}
        className="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        {showAll ? "Show Less" : "Show More"}
      </button> */}
    </section>
  );
};

export default Projects;

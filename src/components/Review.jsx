import { clientReviewsData } from "@/constants/data";

import { ReviewCard } from "./ui/card";
import { Heading } from "./ui/heading";
const Review = () => {
  return (
    <div className={"mt-5 p-5"}>
      <Heading
        title={"#Review's"}
        description={"What people think about brigate"}
        widthMedium
      />
      <div
        className=" m-2 p-3  grid grid-cols-1 lg:grid-cols-3   w-full     flex-wrap max-lg:p-0 max-lg:m-0 "
        id="reviews"
      >
        {clientReviewsData.map((item, index) => {
          return (
            <ReviewCard
              key={index}
              name={item.name}
              handle={item.twitterHandle}
              review={item.review}
              Avatar={item.imageUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Review;

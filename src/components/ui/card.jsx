import { CardSvgIcon } from "@/constants/svg-icon";
import { cn } from "@/lib/utils";
import * as React from "react";
import { CiTwitter } from 'react-icons/ci';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RiEmotionHappyLine } from "react-icons/ri";
import { TbToolsOff } from "react-icons/tb";
// featureCard
export const FeaturedCard = ({ ImageUrl }) => {
  return (
    <div className="">
      <img
        src={ImageUrl}
        width={400}
        height={100}
        className="w-[80%] h-[50%] object-cover max-lg:w-full max-lg:h-full max-lg:object-contain"
        alt="404 feature logo image was not found!"
      />
    </div>
  );
};
// serviceCard
export const ServiceCard = ({
  Icon,
  label,
  status,
  percentage,
  description,
}) => {
  return (
    <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-300 hover:bg-orange-400/70 rounded-lg max-w-2xl shadow-lg transition-all  max-lg:max-w-3xl">
      <CardSvgIcon />
      <div className="relative pt-10 px-10 flex items-center justify-center">
        <div
          className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
          style={{
            background: "radial-gradient(black, transparent 60%)",
            transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
            opacity: 0.2,
          }}
        ></div>
        {Icon}
      </div>
      <div className="relative font-semibold text-gray-950 px-6 pb-6 mt-6">
        <span className="block opacity-75 border-b-2 border-black w-[15%] -mb-1 ">
          {status}
        </span>
        <div className="flex justify-between">
          <span className="block font-semibold text-xl mt-2 ">{label}</span>
          <span className="text-gray-950 max-lg:rounded-full rounded-xl text-lg font-bold border-2 border-black p-2 px-3 leading-none flex  items-center -mt-2 bg-black/5  ">
            <TbToolsOff size={20} /> {percentage}{" "}
            <span className="max-lg:hidden">work success rate</span>
          </span>
        </div>
        <div className="mt-3 text-[1rem] text-gray-800">
          <h4>{description}</h4>
        </div>
      </div>
    </div>
  );
};
// works card
export const WorkCard = ({
  ImageUrl,
  label,
  status,
  percentage,
  description,
}) => {
  return (
    <div className="flex-shrink-0 m-6 relative overflow-hidden      rounded-lg max-w-2xl bg-orange-200  transition-all  max-lg:max-w-3xl h-fit">
      <div className="relative pt-8 px-10 flex items-center justify-center">
        <div
          className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
          style={{
            background: "radial-gradient(black, transparent 60%)",
            transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
            opacity: 0.2,
          }}
        ></div>
        <img
          src={ImageUrl}
          alt="404 image url was not found!"
          className="w-full h-full"
        />
      </div>
      <div className="relative font-semibold text-gray-950 px-6 pb-6 mt-12">
        <span className="block opacity-75 border-b-2 border-black w-[15%] -mb-1 ">
          {status}
        </span>
        <div className="flex justify-between">
          <span className="block font-semibold text-xl mt-2 ">{label}</span>
          <span className="text-gray-950 max-lg:rounded-full text-lg font-bold border-2 border-black p-2 px-3 leading-none flex  items-center -mt-2 bg-black/5 gap-2 rounded-full max-lg:border-none">
            <RiEmotionHappyLine size={30} />{" "}
            <span className="text-lg">{percentage}</span>{" "}
            <span className="max-lg:hidden"> </span>
          </span>
        </div>
        <div className="mt-3 text-[1rem] text-gray-800">
          <h4>{description}</h4>
        </div>
      </div>
    </div>
  );
};
// pricing card's and all components
const Card = React.forwardRef((props, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      props.className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef((props, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", props.className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef((props, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      props.className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef((props, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", props.className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef((props, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", props.className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef((props, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", props.className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";
export const PricingCard = ({ card }) => {
  return (
    <Card
      key={card.title}
      className={cn(
        "flex flex-col w-full border-neutral-700 p-6 bg-orange-200",
        card.title === "Unlimited Saas" && "border-2 border-primary"
      )}
    >
      <CardHeader className="  border-border">
        <span className="text-xl text-gray-600 ">{card.title}</span>
        <CardTitle
          className={cn(
            card.title !== "Unlimited Saas  " && "text-muted-foreground"
          )}
        >
          <span className="  text-3xl font-semibold tracking-tight text-black  font-Poppins">
            {card.price}
          </span>
        </CardTitle>
        <div className="mt-2 text-xl   text-black">
          <CardDescription>{card.description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="pt-10 space-y-2">
        {card.features.map((feature) => (
          <div key={feature} className="flex items-center gap-3">
            <span className="w-4 h-4 fill-primary text-primary">
              <IoMdCheckmarkCircleOutline size={20} />
            </span>
            <p>{feature}</p>
          </div>
        ))}
      </CardContent>
      <div className="mt-auto">
        <CardFooter className=" mt-10 ">
          <a
            href={"/"}
            className={cn(
              "w-full text-center flex items-center justify-center font-semibold  bg-white text-black  p-3 rounded-md text-sm hover:scale-95 transition-all ",
              card.title === "Unlimited Saas" && "bg-primary text-white"
            )}
          >
            {card.buttonText}
          </a>
        </CardFooter>
      </div>
    </Card>
  );
};
// reviewCard
// review card
export const ReviewCard = ({ name, handle, review, Avatar }) => {
  return (
    <div className="flex flex-col justify-between rounded-xl      text-black p-5 shadow-lg max-w-sm mx-auto mt-24 bg-orange-300/70">
      <div className="mt-6 flex items-center gap-6 bg-gray-800/10 p-2">
        <div className="h-10 w-10 overflow-hidden rounded-full shadow-sm outline-neutral-800">
          <div className="relative inline-block overflow-hidden rounded-lg border-neutral-800">
            <img
              alt=""
              src={Avatar}
              width="50"
              height="50"
              decoding="async"
              data-nimg="1"
              className="inline-block "
              loading="lazy"
            />
          </div>
        </div>
        <div>
          <h2 className="leading-relaxed tracking-wide text-xl text-black font-semibold">
            {name}
          </h2>
          <p className="text-[1rem] leading-relaxed tracking-wide text-black flex gap-3  ">
            <CiTwitter size={25} className="text-primary " /> @{handle}
          </p>
        </div>
      </div>
      <p className="my-4 mb-0 text-base font-normal leading-relaxed tracking-wide text-black">
        {review}
      </p>
    </div>
  );
};

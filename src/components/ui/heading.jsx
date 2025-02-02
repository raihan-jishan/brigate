// FeatureHeading
export const FeatureHeading = ({ label }) => {
  return (
    <span className="flex items-center justify-center p-2 text-gray-700 font-extrabold text-xl max-lg:p-4   tracking-normal leading-normal    ">
      {label}
    </span>
  );
};
// heading
export const Heading = ({
  title,
  widthMedium,
  textLarge,
  textMedium,
  textSmall,
  description,
  paragraph,
  MobilewidthFull,
  widthFull,
}) => {
  return (
    <div className="text-center ">
      <h1
        className={` ${textLarge ? "text-4xl" : ""} ${
          textMedium ? "text-3xl" : ""
        } ${
          textSmall ? "text-xl" : ""
        } font-bold   text-center capitalize tracking-wide `}
      >
        <span className="text-gray-700 "> {title} </span>
      </h1>
      <div className=" flex items-center justify-center">
        <h2
          className={`font-semibold ${
            widthMedium ? "w-[30%]" : "w-1/4"
          } ${widthFull ? "w-[35%]" : "w-1/4"} mt-2 text-[2.5rem] leading-[2.7rem] ${
            MobilewidthFull ? "max-lg:w-[100%] " : "max-lg:w-[70%] "
          }  max-lg:p-4 max-lg:text-gray-800`}
        >
          {description}
        </h2>
      </div>
      <p className="mt-2 text-gray-600 w-1/3 m-auto max-lg:w-full max-lg:p-3 max-lg:-mt-3">
        {paragraph}
      </p>
    </div>
  );
};

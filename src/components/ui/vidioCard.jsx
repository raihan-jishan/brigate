import { IoConstructOutline } from "react-icons/io5";
import { BtnPrimary } from "./button";
const VidioSection = ({ title, btnTitle, icon, vidioPath, gradientFull }) => {
  return (
    <div className="relative flex flex-col items-start justify-end h-screen overflow-hidden rounded-xl">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-3/4  ">
        <video
          muted
          autoPlay
          loop
          className="border-none w-full h-full object-cover  shadow-md shadow-black/20 "
        >
          <source src={vidioPath} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Black Gradient Overlay */}
        <div
          className={`absolute inset-0 bg-black ${
            gradientFull ? "opacity-60" : "opacity-20"
          }`}
        />
      </div>

      {/* Text Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-gray-100/90 z-10">
        <h1 className="text-4xl font-Poppins  mb-4 w-[100%] font-semibold">
          {title}
        </h1>
        <div className="flex items-center justify-center mt-5 max-lg:mt-10">
          <BtnPrimary
            label={"get start"}
            variant={"vidio-btn"}
            icon={<IoConstructOutline size={25} />}
          />
        </div>
      </div>
    </div>
  );
};

export default VidioSection;

// import Image from "../../assets/hero-image.png";
import Image from "../../assets/Construction.gif";
const HeroImage = () => {
  return (
    <div className=" lg:mt-0 lg:col-span-5 lg:flex">
      <img
        src={Image}
        className="-mt-12  "
        width={600}
        height={100}
        alt="mockup"
      />
    </div>
  );
};

export default HeroImage;

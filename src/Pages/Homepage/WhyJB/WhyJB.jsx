import WhyJBCard from "./WhyJBCard";
import solutionPng from "../../../assets/whyUs/solutions.png";
import uxPng from "../../../assets/whyUs/ux.png";
import crossPlatformUx from "../../../assets/whyUs/Cross-platform software-pana.png";
import serverUx from "../../../assets/whyUs/Secure Server-cuate.png";
const WhyJB = () => {
  const whyMavericksCards = [
    {
      onlineHeading: "Innovative Solutions",
      description: "Delivering cutting-edge software solutions.",
      imageUrl: solutionPng,
    },
    {
      onlineHeading: "Seamless User Experience",
      description: "Creating intuitive and user-friendly applications.",
      imageUrl: uxPng,
    },
    {
      onlineHeading: "Cross-Platform Expertise",
      description: "Specializing in seamless cross-platform development.",
      imageUrl: crossPlatformUx,
    },
    {
      onlineHeading: "Reliable Server Maintenance",
      description: "Ensuring secure and optimized server infrastructure.",
      imageUrl: serverUx,
    },
  ];

  return (
    <div className="my-20">
      <div className=" w-1/2 text-center mx-auto">
        <h2 className="text-5xl font-semibold mb-8">Why Mavericks?</h2>
        <p className="text-gray-500 text-xl">
          Produce high impact outcomes much more efficiently (time & cost) and
          with greater value. Build services quickly that transforms data into
          business impacting decisions.
        </p>
      </div>
      {/* cards */}
      <div className="grid grid-cols-4 gap-6 my-16 px-8">
        {whyMavericksCards.map((item) => (
          <WhyJBCard key={(Math.random * 100009999).toString()} item={item} />
        ))}
      </div>
    </div>
  );
};

export default WhyJB;

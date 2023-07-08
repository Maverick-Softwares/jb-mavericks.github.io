import React from "react";
import ServicesCard from "./ServicesCard";
import serviceVideo from "../../assets/services/services.mp4";
import webGif from "../../assets/services/web.gif";
import mobileGif from "../../assets/services/mobile.gif";
import serverGif from "../../assets/services/server.gif";
import desktopGif from "../../assets/services/desktop.gif";
const Services = () => {
  const servicesArr = [
    {
      title: "Desktop Application",
      img: desktopGif,
      description:
        "Delivering cutting-edge software solutions that transform businesses. We leverage the latest technologies and our expertise to provide innovative solutions tailored to your specific needs.",
    },
    {
      title: "Mobile Application",
      img: mobileGif,
      description:
        "Creating intuitive and user-friendly applications that delight users. Our focus on user experience ensures that your software is not only visually appealing but also easy to navigate, resulting in higher user engagement and satisfaction.",
    },
    {
      title: "Web Application",
      img: webGif,
      description:
        "Specializing in seamless cross-platform development for web, desktop, and mobile applications. Our expertise allows us to create software that provides a consistent experience across multiple platforms, reaching a wider audience.",
    },
    {
      title: "Server Maintainance",
      img: serverGif,
      description:
        "Ensuring secure and optimized server infrastructure to keep your business running smoothly. Our dedicated team of experts takes care of server maintenance, monitoring, and optimization, allowing you to focus on your core business.",
    },
  ];
  return (
    <div>
      {/* banner */}
      <div>
        {" "}
        <div className="relative h-screen">
          <video
            className="absolute top-0 left-0 w-full h-full"
            style={{ objectFit: "cover" }}
            autoPlay
            muted
            loop
          >
            <source src={serviceVideo} type="video/mp4" />
          </video>

          <div className="w-full h-full flex lg:px-16 items-center backdrop-brightness-50">
            <div className="text-white font-bold lg:w-1/2">
              <h1
                className="text-5xl font-[nunito]"
                style={{ lineHeight: "3.4rem" }}
              >
                Services
              </h1>
              <h6 className="my-8 text-xl text-gray-300">
                Mavericks Software: Empowering your digital success with
                seamless web, desktop, mobile apps, and expert server
                maintenance.
              </h6>
              <button className="btn rounded-sm font-bold">Get In Toch</button>
            </div>
          </div>
        </div>
      </div>

      {/* cards */}
      <div className="grid grid-cols-2 gap-8 justify-items-center  my-16">
        {servicesArr.map((data) => (
          <ServicesCard data={data} key={Math.random.toString()} />
        ))}
      </div>
    </div>
  );
};

export default Services;

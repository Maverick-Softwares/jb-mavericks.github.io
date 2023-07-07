import React from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <div>
      {/* banner */}
      <div>
        {" "}
        <div className="bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80')] bg-cover bg-no-repeat bg-center h-screen">
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
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
      </div>
    </div>
  );
};

export default Services;

import React from "react";
import RadialProgress from "./RadialProgress";
const OurTeam = () => {
  return (
    <div className="my-16">
      <div className=" w-1/2 text-center mx-auto">
        <h2 className="text-5xl font-semibold mb-8">Our Team</h2>
        <p className="text-gray-500 text-xl">
          Our team consists of visionaries, software engineers experienced in
          developing highly scalable systems, proven track record in building
          products maximizing user satisfaction.
        </p>
      </div>
      <RadialProgress />
    </div>
  );
};

export default OurTeam;

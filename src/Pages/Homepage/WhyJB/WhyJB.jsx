import React from "react";
import WhyJBCard from "./WhyJBCard";

const WhyJB = () => {
  return (
    <div>
      <div className=" w-1/2 text-center mx-auto">
        <h2 className="text-5xl font-semibold mb-8">Why JB?</h2>
        <p className="text-gray-500 text-xl">
          Produce high impact outcomes much more efficiently (time & cost) and
          with greater value. Build services quickly that transforms data into
          business impacting decisions.
        </p>
      </div>
      {/* cards */}
      <div className="grid grid-cols-4 gap-6">
        <WhyJBCard />
        <WhyJBCard />
        <WhyJBCard />
        <WhyJBCard />
      </div>
    </div>
  );
};

export default WhyJB;

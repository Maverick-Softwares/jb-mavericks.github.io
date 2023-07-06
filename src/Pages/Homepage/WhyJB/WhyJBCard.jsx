import React from "react";

const WhyJBCard = () => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src="https://cdn-icons-png.flaticon.com/512/681/681656.png?w=740&t=st=1688649446~exp=1688650046~hmac=deee6884dcc06c3a78f0927d4d3c062f2fff481a8c2ed9f787a946c95afc1cdd"
          alt="Shoes"
          className="rounded-xl w-1/2"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Shoes!</h2>
        <p className="text-gray-500">
          If a dog chews shoes whose shoes does he choose?
        </p>
      </div>
    </div>
  );
};

export default WhyJBCard;

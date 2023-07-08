import React from "react";

const WhyJBCard = ({ item }) => {
  const { onlineHeading, description, imageUrl } = item || {};
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={imageUrl} alt="Shoes" className="rounded-xl w-3/4" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{onlineHeading}</h2>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default WhyJBCard;

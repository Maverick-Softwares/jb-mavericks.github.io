import React from "react";

const ContactUsCard = ({ card }) => {
  const { icon, content } = card;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <div>{icon}</div>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default ContactUsCard;

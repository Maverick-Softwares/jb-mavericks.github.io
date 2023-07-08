import React from "react";
import ContactUsCard from "./ContactUsCard";
import { BiCode, BiNews } from "react-icons/bi";
import { MdDevices } from "react-icons/md";
import ContactForm from "./ContactForm";
const ContactUs = () => {
  const cardsArr = [
    {
      icon: <BiCode size={50} color="#50C878" />,
      content: "Unleashing the power of elegant and efficient solutions.",
      id: 1,
    },
    {
      icon: <BiNews size={50} color="#50C878" />,
      content: "Delivering seamless experiences across devices and platforms.",
      id: 2,
    },
    {
      icon: <MdDevices size={50} color="#50C878" />,
      content: "Ensuring dependable performance for your critical needs.",
      id: 3,
    },
  ];
  return (
    <div className="my-16 px-8">
      <div className=" w-1/2 text-center mx-auto">
        <h2 className="text-5xl font-semibold mb-8">Contact Us</h2>
      </div>

      {/* cards */}
      <div className="grid grid-cols-3 gap-8">
        {cardsArr.map((card) => (
          <ContactUsCard card={card} key={card.id} />
        ))}
      </div>

      {/* ===== */}
      <ContactForm />
    </div>
  );
};

export default ContactUs;

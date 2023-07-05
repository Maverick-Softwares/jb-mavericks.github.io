import React from "react";

const SolutionCarouselCard = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://img.freepik.com/free-vector/businessmans-hand-holding-question-mark-person-asking-answer-help-support-flat-vector-illustration-faq-interrogation-difficulty-concept-banner-website-design-landing-web-page_74855-24358.jpg?w=900&t=st=1688564164~exp=1688564764~hmac=c78f79f6ab4509477d200de36e116443d2be5144606900c6455278acc88795d3"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default SolutionCarouselCard;

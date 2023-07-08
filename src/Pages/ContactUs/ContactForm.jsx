import React from "react";

const ContactForm = () => {
  return (
    <div className="hero min-h-screen bg-base-100 mt-16">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Send Us Your Queries!</h1>
          <p className="py-6">
            Have a question or need assistance? We're here to help! Drop us a
            line and let our team of experts provide you with the answers you're
            looking for.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                className="textarea textarea-bordered"
                placeholder="Bio"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

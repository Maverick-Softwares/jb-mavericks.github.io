import React from "react";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
const ContactForm = () => {
  return (
    <div className="hero min-h-screen bg-base-100 mt-6 lg:px-32">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Send Us Your Queries!</h1>
          <p className="py-6">
            Have a question or need assistance? We're here to help! Drop us a
            line and let our team of experts provide you with the answers you're
            looking for.
          </p>
          <div className="flex">
            <a href="">
              <BsFacebook size={35} className="text-gray-700" />
            </a>
            <a href="https://github.com/Maverick-Softwares">
              <BsGithub size={35} className="text-gray-700 mx-5" />
            </a>
            <a href="https://github.com/Maverick-Softwares">
              <BsLinkedin size={35} className="text-gray-700 mx-5" />
            </a>
          </div>
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
                placeholder="Please share your thoughts"
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

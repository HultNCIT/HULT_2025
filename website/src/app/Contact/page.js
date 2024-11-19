import React from "react";
import Pill_outline from "@/components/common/Pill_outline";

const Contact = () => {
  return (
    <div className="contact-container mt-16 mx-auto lg:max-w-7xl py-5 px-10 bg-secondaryContainer">
      <div className="head-container flex flex-col items-start gap-4">
        <Pill_outline name={'Contact Us'} className="max-w-fit" color={'accent'} />
        <div className="head">
          <h1>
            Contact <span className="text-accent">Us</span>
          </h1>
        </div>
        <div className="content sm:max-w-xl md:max-w-2xl lg:max-w-4xl lg:text-xl">
          <p className="text-content">
            Feel free to reach out to us with any questions, comments, or
            concerns. Your feedback is important to us, and we're here to assist
            you. Whether you have inquiries about our event or if there's
            anything else you'd like to discuss, we're always ready.
          </p>
        </div>
      </div>

      <div className="form-container flex my-4 flex-col gap-8 items-center md:flex-row w-full">
        <div className="form-fields flex-auto w-full">
          <form action="" className="flex flex-col">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              id="message"
              rows={5}
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit">Submit Now</button>
           
          </form>
        </div>
        <div className="contact-tiles flex-auto max-w-lg w-full">
          <div className="tile-container">
            <div className="tile-text">
              <div className="tile-head">
                <h4>Address</h4>
              </div>
              <div className="tile-content">
                <p>hultprize@ncit.edu.com</p>
              </div>
            </div>
          </div>
          <div className="tile-container">
            <div className="tile-head">
              <h4>Mail Us</h4>
            </div>
            <div className="tile-content">
              <p>hultprize@ncit.edu.com</p>
            </div>
          </div>
          <div className="tile-container">
            <div className="tile-head">
              <h4>Telephone</h4>
            </div>
            <div className="tile-content">
              <p>(+977) 9862695444</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

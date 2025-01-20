"use client";
import React from "react";
import Pill_outline from "../../components/common/Pill_outline";
import Footer from "../../components/footer/Footer";
import Button from "../../components/common/Button";
import FadeInWrapper from "../../components/common/fadeinwrapper";

const ContactPage = () => {
  return (
    <section className="flex flex-col min-h-screen  justify-between">
      <div className="contact-container mx-auto lg:max-w-8xl my-auto py-12 px-10">
        <FadeInWrapper>
          <div className="head-container flex flex-col items-start gap-4">
            <Pill_outline
              name={"Connect with Us"}
              className="max-w-fit"
              color={"border-color"}
            />
            <div className="head">
              <h1 className="font-extrabold">
                Contact <span className="text-accent">Us</span>
              </h1>
            </div>
            <div className="content sm:max-w-xl md:max-w-2xl lg:max-w-4xl lg:text-xl">
              <p className="text-content">
                Feel free to reach out to us with any questions, comments, or
                concerns. Your feedback is important to us, and we're here to
                assist you. Whether you have inquiries about our event or if
                there's anything else you'd like to discuss, we're always ready.
              </p>
            </div>
          </div>
          <div className="form-container flex my-4 flex-col gap-8 items-stretch md:flex-row w-full">
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
                  spellCheck={false}
                  required
                ></textarea>
                <button className="button-anime mt-2 max-w-3xl" type="submit">
                  Submit Now
                </button>
              </form>
            </div>
            <div className="contact-tiles flex-auto justify-center max-w-lg w-full">
              <div className="tile-container">
                <div className="tile-head">
                  <h5>Address:</h5>
                </div>
                <div className="tile-content">
                  <p>Balkumari, Kathmandu</p>
                </div>
              </div>
              <div className="tile-container">
                <div className="tile-head">
                  <h5>Mail Us:</h5>
                </div>
                <div className="tile-content">
                  <p>hultprize@ncit.edu.com</p>
                </div>
              </div>
              <div className="tile-container">
                <div className="tile-head">
                  <h5>Telephone:</h5>
                </div>
                <div className="tile-content">
                  <p>(+977) 9862695444</p>
                </div>
              </div>
            </div>
          </div>
        </FadeInWrapper>
      </div>
      <Footer />
    </section>
  );
};

export default ContactPage;

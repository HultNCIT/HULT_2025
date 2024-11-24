import React from "react";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="h-[300px]">
      <div className="bg-tertiary text-white h-full w-full flex flex-col justify-center gap-3 md:flex-row md:justify-between items-center tracking-wider text-lg px-6 md:px-28 py-7 ">
        <div className="space-y-2">
          <Image
            src={"/hult_image/hultprize_logo_light.png"}
            width={316}
            height={4}
            alt="hultprize"
          />
          <div className="media">
            <a href="#">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <div className="flex justify-between items-start gap-16">
          <div className="text-sm flex flex-col gap-4">
            <h5 className="font-semibold">Quick Links</h5>
            <Link className="footer-link-modify text-sm" href="/">
              Home
            </Link>
            <Link className="footer-link-modify text-sm" href={"/about"}>
              About
            </Link>
            <Link className="footer-link-modify text-sm" href={"/"}>
              Events
            </Link>
            <Link className="footer-link-modify text-sm" href="/Contact">
              Contact
            </Link>
          </div>
          <div className="text-sm flex flex-col gap-4">
            <h5 className="font-semibold ">Contact Us</h5>
            <p className="text-base">
              <i className="fa-solid fa-location-dot pr-1"></i>Balkumari,
              Lalitpur
            </p>
            <p className="text-base ">
              <i className="fa-solid fa-phone pr-1"></i>+977-9862695444
            </p>
            <p className="text-base ">
              <i className="fa-solid fa-envelope pr-1"></i>hultprize@ncit.edu.np
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

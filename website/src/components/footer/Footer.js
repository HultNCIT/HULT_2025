import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    
      <div className="bg-tertiary text-white h-full w-full flex flex-col justify-center gap-3 md:flex-row md:justify-between items-center tracking-wider text-lg px-6 md:px-28 py-7 ">
        <div className="space-y-2">
          <img
            src={"/hult_image/hultprize_logo_light.png"}
            width={316}
            height={4}
            alt="hultprize"
          />
          <div className="media">
            <Link href="https://www.facebook.com/HultPrizeNcit" target="_blank" className=" text-center mr-5">
              <i className="fa-brands fa-facebook-f my-auto mx-auto"></i>
            </Link>
            <Link href="https://github.com/HultNCIT" target="_blank" className=" text-center mr-5">
              <i className="fa-brands fa-github mx-auto"></i>
            </Link>
            <Link href="https://www.instagram.com/ht.atncit/" target="_blank" className=" text-center mr-5">
              <i className="fa-brands fa-instagram mx-auto"></i>
            </Link>
            <Link href="https://np.linkedin.com/company/hult-prize-at-ncit-pokhara-university" target="_blank" className=" text-center mr-5">
              <i className="fa-brands fa-linkedin-in mx-auto"></i>
            </Link>
            <Link href="mailto:hultprize@ncit.edu.np" className=" text-center mr-5">
              <i className="fa-solid fa-envelope mx-auto"></i>
            </Link>
          </div>
        </div>
        <div className="flex justify-between items-start gap-16">
          <div className="text-sm flex flex-col gap-4">
            <h5 className="font-semibold flex justify-center">Quick Links</h5>
            <Link className="footer-link-modify link-hover-anim text-sm "  href="/">
              Home
            </Link>
            <Link className="footer-link-modify link-hover-anim text-sm " href={"/about"}>
              About
            </Link>
            <Link className="footer-link-modify link-hover-anim text-sm " href={"/gallery"}>
              Gallery
            </Link>
            <Link className="footer-link-modify link-hover-anim text-sm" href={"/#event"}>
              Events
            </Link>
            <Link className="footer-link-modify text-sm" href="/contact">
              Contact
            </Link>
          </div>
          <div className="text-sm flex flex-col justify-center md:justify-start gap-4">
            <h5 className="font-semibold flex justify-center md:justify-start">Contact Us</h5>
            <a className=" link-hover-anim opacity-75 hover:opacity-100 hover:text-white text-base md:text-lg text-content  flex items-center justify-start " href="https://www.google.com/maps/place/Nepal+College+of+Information+Technology/@27.6713817,85.3361634,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb19e8af4a5fe3:0x963d00cdf478c6b6!8m2!3d27.6713817!4d85.3387383!16s%2Fm%2F0hr0sch?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D" target='_blank' >
              <i className="fa-solid fa-location-dot pr-0.5 mt-0.5"></i><p className="text-sm">
                Balkumari,
                Lalitpur
              </p>
            </a>
            <a className=" link-hover-anim opacity-75 hover:opacity-100 hover:text-white text-base md:text-lg text-content flex justify center" href="tel:+977-9862695444">
              <i className="fa-solid fa-phone pr-0.5 mt-1 text-sm"></i><p className="text-sm">+977-9849951556</p>
            </a>
            <a className="link-hover-anim opacity-75 hover:opacity-100 hover:text-white text-base md:text-lg text-content flex justify-end items-center md:justify-start" href="mailto:hultprize@ncit.edu.np" target='blank' >
              <i className="fa-solid fa-envelope pr-0.5 mt-0.5 text-sm"></i><p className="text-sm">hultprize@ncit.edu.np</p>
            </a>
          </div>
        </div>
      </div>
 
  );
};

export default Footer;

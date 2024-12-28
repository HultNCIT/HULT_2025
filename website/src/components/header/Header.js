"use client";
import Link from "next/link";
import Button from "../common/Button";
import SildeBar from "../common/SildeBar";
import Menu from "../common/Menu";
function Header() {
  const colorStyle = {
    color: "black",
  };
  return (
    <nav className="fixed z-50 right-0 left-0 top-0 bg-white flex justify-between px-8 tb:px-16 py-2 items-center shadow-sm">
      <Menu hidden={"hidden"} flex={"md:flex"} />
      <Link href="/" className="text-[30px]">
        <img
          src={"/hult_image/hult1.png"}
          width={200}
          height={5}
          style={colorStyle}
          alt="hult"
          className="w-[150px] sm:w-[170px]  md:w-[200px]"
        />
      </Link>
      <div className="flex gap-2 lg:gap-8 justify-between items-center">
        <a
          className="common"
          href="/#event"
        >
          Events
        </a>
        <Button link={'https://www.hultprize.org/startup-pre-registration-is-now-open/'} state/>
        {/**slidebar */}
        <SildeBar />
      </div>
    </nav>
  );
}

export default Header;

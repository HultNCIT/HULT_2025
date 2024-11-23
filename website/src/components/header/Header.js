import Link from "next/link";
import Button from "../common/Button";
import Image from "next/image";
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
        <Image
          src={"/hult_image/hult_logo.jpg"}
          width={200}
          height={5}
          style={colorStyle}
          alt="hult"
          className="w-[150px] sm:w-[170px]  md:w-[200px]"
        />
      </Link>
      <div className="flex md:w-[250px] space-x-4 justify-between items-center">
        <Link
          className="hidden md:block text-[20px] font-medium transition-all duration-400 hover:text-accent "
          href="#"
        >
          Events
        </Link>
        <Button />
        {/* <Image
          src={"/icons/hamburger.png"}
          width={30}
          height={30}
          alt="hamburger"
          className="md:hidden block ml-2"
        /> */}
        {/* <span className="block md:hidden ml-2"><i className="fa-solid fa-bars"></i></span> */}
        <SildeBar />
      </div>
    </nav>
  );
}

export default Header;

import Image from "next/image";
import logo from "@/public/logo.svg";
import Link from "next/link";

function Footer() {
  return (
    <>
      <div className="w-full flex flex-col sm:flex-row justify-between items-center bg-pgh-black ph py-24 gap-5 text-pgh-white">
        <div className="flex flex-col sm:flex-row sm:justify-between w-full gap-2 items-center">
          <Link href={"/"}>
          <Image alt="" src={logo} width={150}></Image>
          </Link>
          <span className="text-xs text-pxa-white sm:pt-2 pt-5">
            <span className="text-opacity-50 opacity-50">
              Designed & Developed by &nbsp;{" "}
            </span>
            <Link
              className="text-opacity-100 tracking-widest font-bold"
              href={"https://zerokelvin.studio"}
            >
              ZEROKELVIN
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}

export default Footer;

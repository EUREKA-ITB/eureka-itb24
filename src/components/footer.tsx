import logo_eureka from "@/../public/logo_eureka.svg";
import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="w-full px-20 pb-10 xl:container ">
      <div className="flex flex-col justify-between  md:flex-row md:items-center ">
        <div className="flex flex-col items-center">
          <Image
            src={logo_eureka}
            width={300}
            alt=""
          />
        </div>
        <div className="flex flex-col items-center space-y-2 pt-16 md:items-end md:pt-0 ">
          <p>The Physics Multiverse </p>
          <h1 className="text-4xl font-bold italic">EUREKA! ITB 2024</h1>
          <h2 className="pt-10 text-2xl font-bold">COMPETITIONS</h2>
          <Link
            href="#"
            className="hover:underline"
          >
            Physics Olympiad
          </Link>
          <Link
            href="#"
            className="hover:underline"
          >
            Scientific Writing Competition
          </Link>
          <h2 className="pt-10 text-2xl font-bold">ACKNOWLEDGEMENTS</h2>
          <Link
            href="#"
            className="hover:underline"
          >
            Sponsors
          </Link>
          <Link
            href="#"
            className="hover:underline"
          >
            Media Partners
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between pt-10 md:flex-row md:pt-5">
        <div className="flex">
          <Link
            href="https://www.instagram.com/eurekaitb/"
            className="px-3 text-gray-400 hover:text-gray-200"
          >
            <BsInstagram />
          </Link>
          <div className="icon-instagram"></div>
          <Link
            href="https://twitter.com/eurekaitb"
            className="px-3 text-gray-400 hover:text-gray-200"
          >
            <BsTwitterX />
          </Link>
          <Link
            href="https://www.facebook.com/EurekaITB/"
            className="px-3 text-gray-400 hover:text-gray-200"
          >
            <BsFacebook />
          </Link>
        </div>
        <span className="pt-4 text-sm text-gray-400 sm:text-center md:pt-0">
          © 2024 EUREKA! ITB
        </span>
      </div>
    </footer>
  );
}

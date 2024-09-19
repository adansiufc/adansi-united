import React from "react";
import WidthConstraint from "./ui/width-constraint";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#1cba18f5] py-10 lg:py-20 text-white relative">
      <Image
        className="absolute top-0 right-0 object-cover bg-center bg-cover -z-10 w-full h-full"
        src="/assets/footer.svg"
        width={1000}
        height={1000}
        alt=""
      />
      <WidthConstraint className="flex flex-col lg:flex-row justify-between lg:items-center gap-10 py-20">
        <div className="grid-cols-1 items-center justify-items-center lg:items-start lg:justify-items-start md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-10 grid flex-1">
          <div className="">
            <Image
              src="/assets/logo.svg"
              alt="Footer-Logo"
              width={150}
              height={150}
              className="w-[120px]"
            />
          </div>
          <section className="space-y-4">
            <div className="font-light flex flex-wrap gap-5 md:flex-col text-nowrap">
              <Link href="/story">
                <p>Home</p>
              </Link>
              <Link href="#apartments">
                <p>Club</p>
              </Link>
              <Link href="#">
                <p>Uniform</p>
              </Link>
              <Link href="#contact">
                <p>Partners</p>
              </Link>
            </div>
          </section>
          <section className=" space-y-4">
            <div className="font-light flex flex-wrap gap-5 md:flex-col text-nowrap">
              <Link href="#">
                <p>TEAM (ACADEMIES & CLUBS)</p>
              </Link>
              <Link href="#">
                <p>Academy (Training)</p>
              </Link>
            </div>
          </section>
          <section className=" space-y-4">
            <Link href="#">
              <p>News & Blog</p>
            </Link>
          </section>{" "}
          <section className=" space-y-4">
            <div className="font-light text-nowrap flex gap-4">
              <FaFacebookF size={25} />
              <FaInstagram size={25} />
              <FaXTwitter size={25} />
              <FaWhatsapp size={25} />
            </div>
          </section>
        </div>
      </WidthConstraint>
      <WidthConstraint className="py-4 flex border-t flex-col lg:flex-row border-[#ffffff66] mx-5 lg:mx-auto items-center justify-between gap-4  ">
        <h3 className="text-center lg:text-start font-semibold">
          <span className="font-normal">Copyright &copy; {new Date().getFullYear()}</span>{" "}
          &nbsp; Adansi United FC
        </h3>
        <p>Privacy Policy | Terms and Condition</p>
        <p className="">
          Designed by{" "}
          <Link href="https://www.bithubinc.com/">
            <strong>BitHub Works Inc., USA</strong>
          </Link>
        </p>
      </WidthConstraint>
    </footer>
  );
};

export default Footer;

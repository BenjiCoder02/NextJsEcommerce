'use client';
import { BsGithub, BsGlobe, BsLink, BsLinkedin, BsYoutube } from "react-icons/bs"
import { Container } from "./Container"
import { Logo } from "./Logo"
import Link from "next/link";
import Image from "next/image";
import Payment from '@/images/payment.png';

export const Footer = () => {
  return (
    <div className="w-full bg-darkText text-slate-100">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="flex flex-col gap-y-4">
          <Logo />
          <p>
            Brandify is a dynamic e-commerce clothing brand that blends style, quality, and affordability. Our mission is to empower individuals to express their unique identities through fashion. At Brandify, we believe that clothing is more than just fabric; it's a statement of who you are.
            Shopping with Brandify is a seamless experience, thanks to our user-friendly website, easy navigation, and secure payment options. With fast shipping and hassle-free returns, we aim to make fashion accessible and enjoyable.
          </p>
          <div className="flex items-center gap-x-4">
            <a href="https://youtube.com" target="_blank">
              <span className="socialLink">
                <BsYoutube />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/benjamin-daniel-koshy/" target="_blank">
              <span className="socialLink">
                <BsLinkedin />
              </span>
            </a>
            <a href="https://github.com/BenjiCoder02" target="_blank">
              <span className="socialLink">
                <BsGithub />
              </span>
            </a>
            <a href="https://benjicoder02.github.io/Portfolio3D/" target="_blank">
              <span className="socialLink">
                <BsLink />
              </span>
            </a>
            <a href="https://benjicoder02.github.io/Portfolio2.0/" target="_blank">
              <span className="socialLink">
                <BsGlobe />
              </span>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <p className="text-lg">Latest posts</p>
          <ul className="text-sm font-light mt-2 flex flex-col gap-y-2">
            <li className="flex flex-col">
              <span className="text-slate hover:text-orange-600 cursor-pointer duration-200">
                Where Music Is Headed Next
              </span>
              <span className="text-orange-600">January 31, 2022</span>
            </li>
            <li className="flex flex-col">
              <span className="text-slate hover:text-orange-600 cursor-pointer duration-200">
                Where Music Is Headed Next
              </span>
              <span className="text-orange-600">January 31, 2022</span>
            </li>
            <li className="flex flex-col">
              <span className="text-slate hover:text-orange-600 cursor-pointer duration-200">
                Where Music Is Headed Next
              </span>
              <span className="text-orange-600">January 31, 2022</span>
            </li>
            <li className="flex flex-col">
              <span className="text-slate hover:text-orange-600 cursor-pointer duration-200">
                Where Music Is Headed Next
              </span>
              <span className="text-orange-600">January 31, 2022</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-4">
          <p className="text-lg">Links</p>
          <ul className="text-base font-medium mt-2 flex flex-col gap-y-2">
            <Link href={"/"}>
              <li className="hover:text-orange-500 cursor-pointer duration-200">
                Home
              </li>
            </Link>
            <Link href={"/cart"}>
              <li className="hover:text-orange-500 cursor-pointer duration-200">
                Cart
              </li>
            </Link>
            <Link href={"/about"}>
              <li className="hover:text-orange-500 cursor-pointer duration-200">
                About
              </li>
            </Link>
            <li className="hover:text-orange-500 cursor-pointer duration-200">
              Newsletter
            </li>
            <li className="hover:text-orange-500 cursor-pointer duration-200">
              Contact
            </li>
          </ul>

        </div>
        <div className="flex flex-col gap-y-4">
          <p className="text-lg mb-2">Pay with trusted services</p>
          <Image
            src={Payment}
            alt="payment banner image"
            className="w-full h-10 object-cover"
          />
        </div>
      </Container>
    </div>
  );
};

import React from "react";
import MagicButton from "./ui/MagicButton";
import { socialMedia } from "@/data";
import Image from "next/image";
import { BiMessageRounded } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-96 md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading text-2xl md:text-4xl text-center font-bold">
          Let&apos;s Build Your Digital{" "}
          <span className="text-purple">Future</span> Together
        </h1>
        <p className="mt-2 md:text-sm text-white-200 text-center">
          Message me and let&apos;s begin crafting the digital presence of your
          dreams right away!
        </p>
        <a href="mailto:saifsep17@gmail.com">
          <MagicButton
            title="Get in touch"
            icon={<BiMessageRounded />}
            position={"left"}
          />
        </a>
        <p className="text-xs mt-14">&copy;2024 Saif Z. All rights reserved.</p>
        <div className="flex flex-row gap-4 justify-center items-center py-8">
          {socialMedia.map((item) => (
            <div
              key={item.id}
              className="bg-black-100 rounded-full items-center text-center"
            >
              <a href={item.link} target="_blank">
                <Image
                  src={item.image}
                  alt="Social Media Icon"
                  width={30}
                  height={30}
                  className="object-contain object-center hover:cursor-pointer"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

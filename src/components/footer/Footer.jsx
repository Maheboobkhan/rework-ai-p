import React, { useState } from "react";
import { FacebookSharp, Instagram, Telegram, WhatsApp, X } from "@mui/icons-material";
import NormalFeature from "./features/NormalFeature";
import AccordianFeature from "./features/AccordianFeature";
import telegram from '../../assets/telegram.png'

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    // Your logic for handling the email submission goes here
  };

  return (
    <footer className="flex flex-col items-center py-12">
      <div className="flex gap-5 justify-between items-start px-5 mt-1.5 max-md:flex-wrap">
        {/* Talent Finder */}
        <div className="flex flex-col basis-0">
          <div className="text-3xl font-extrabold whitespace-nowrap">
            <span className="grow font-Raleway text-teal-600">Talent </span>
            <span className="grow font-Raleway sm:text-white text-opacity-90">Finder</span>
            <p className='font-Caveat text-xs text-end mr-16 max-sm:mr-4 font-[14] max-sm:font[9.11] sm:text-white italic text-[C7C7C7] w-[101.42] h-[23.7]'>by rework</p>
          </div>

          <p className="font-Roboto font-[15.38] max-sm:font-[12] mt-8 text-base leading-6 text-white px-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
          <div className="mt-9 text-lg font-bold leading-7 text-white px-2">Follow us</div>
          <div className="flex gap-1.5 justify-between pr-16 mt-4 max-md:pr-5">
            <Telegram fontSize="large" className="text-white rounded-full bg-black p-1" />
            <WhatsApp fontSize="large" className="text-white rounded-3xl bg-black p-1" />
            <X fontSize="large" className="text-white rounded-full bg-black p-1" />
            <FacebookSharp fontSize="large" className="text-white  rounded-full bg-black p-1" />
            <Instagram fontSize="large" className="text-white  rounded-full bg-black p-1" />
          </div>
        </div>

        {/* RESOURCES */}
        <div className="flex flex-col self-stretch">
          <div className="max-sm:hidden">
            <NormalFeature />
          </div>
          <div className="sm:hidden">
            <AccordianFeature />
          </div>
          {/* NEWS LETTER */}
          <div className="flex flex-col self-end px-px mt-2 whitespace-nowrap">
            <div className="font-Inter self-start ml-6 text-lg font-bold leading-7 text-white max-md:ml-2.5">
              Newsletter
            </div>
            <form onSubmit={handleSubmit} className="flex justify-between mt-7 text-base leading-6">
              <input
                type="email"
                className="justify-center px-3.5 py-3 bg-white rounded-lg border border-solid shadow-sm text-neutral-500"
                id="emailInput"
                aria-label="Your Email"
                placeholder="abc123@gmail.com"
                value={email}
                onChange={handleEmailChange}
                required
              />
              <div className="grow justify-center px-5 py-3 font-medium text-green-50 rounded-md shadow-sm bg-neutral-950 hover:bg-slate-800">
                <button type="submit" aria-label="Subscribe">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* COPY RIGHT */}
      <div className="font-Poppins font-[14] sm:font-[12] mt-11 text-sm leading-5 whitespace-nowrap text-slate-400 max-md:mt-10">© 2022 TalentFinder. All rights reserved.</div>
    </footer>
  );
}

export default Footer;

import React, { useState } from "react";
import { FacebookSharp, Instagram, Telegram, WhatsApp, X } from "@mui/icons-material";
import NormalFeature from "./features/NormalFeature";
import AccordianFeature from "./features/AccordianFeature";

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
          <h1 className="flex justify-between text-3xl font-extrabold text-center whitespace-nowrap">
            <span className="grow text-teal-600">Talent</span>
            <span className="flex-auto text-white text-opacity-90">Finder</span>
          </h1>
          <p className="mt-8 text-base leading-6 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
          <div className="mt-9 text-lg font-bold leading-7 text-white">Follow us{" "}</div>
          <div className="flex gap-1.5 justify-between pr-16 mt-4 max-md:pr-5">
            <Telegram fontSize="large" className="text-white  rounded-full" />
            <WhatsApp fontSize="large" className="text-white rounded-full" />
            <X fontSize="large" className="text-white rounded-full" />
            <FacebookSharp fontSize="large" className="text-white  rounded-full" />
            <Instagram fontSize="large" className="text-white  rounded-full" />
          </div>
        </div>

        {/* RESOURCES */}
        <div className="flex flex-col self-stretch basis-0">
          <div className="max-sm:hidden">
            <NormalFeature />
          </div>
          <div className="sm:hidden">
            <AccordianFeature />
          </div>
          {/* NEWS LETTER */}
          <div className="flex flex-col self-start px-px mt-2 whitespace-nowrap">
            <div className="self-start ml-6 text-lg font-bold leading-7 text-white max-md:ml-2.5">
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
      <div className="mt-11 text-sm font-medium leading-5 whitespace-nowrap text-slate-400 max-md:mt-10">© 2022 TalentFinder. All rights reserved.</div>
    </footer>
  );
}

export default Footer;

import React, { useState } from "react";
import NormalFeature from "./features/NormalFeature";
import AccordianFeature from "./features/AccordianFeature";
import SocialMedia from "./features/SocialMedia";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    // Your logic for handling the email submission goes here
  };

  return (
    <footer className="flex flex-col items-center p-12 max-sm:ml-4">
      <div className="flex gap-5 justify-between items-start px-5 mt-1.5 max-md:flex-wrap">
        {/* Talent Finder */}
        <div className="flex flex-col basis-0">
          <div className="text-3xl font-extrabold whitespace-nowrap">
            <span className="grow font-Raleway text-teal-600 max-sm:text-white">Talent </span>
            <span className="grow font-Raleway sm:text-white text-opacity-90">Finder</span>
            <p className='font-Caveat text-xs text-end mr-4 font-[14px] max-sm:font-[9.11px] sm:text-white italic text-[#fff] w-[101.42] h-[23.7]'>by rework</p>
          </div>

          <p className="font-Roboto font-[15.38px] max-sm:font-[12px] mt-8 text-base leading-6 text-white px-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
          <div className="max-sm:hidden">
            <SocialMedia />
          </div>
        </div>

        {/* RESOURCES */}
        <div className="flex flex-col">
          <div className="max-sm:hidden">
            <NormalFeature />
          </div>
          <div className="sm:hidden w-screen">
            <AccordianFeature />
          </div>
          {/* NEWS LETTER */}
          {/* <div className="flex flex-col self-end px-px mt-7 whitespace-nowrap">
            <div className="font-Inter self-start text-lg font-bold leading-7 text-white">
              Newsletter
            </div>
            <form onSubmit={handleSubmit} className="flex justify-between text-base leading-6 mt-2 gap-5 max-sm:gap-3">
              <input
                type="email"
                className="justify-center p-3 bg-white rounded-lg border border-solid shadow-sm text-neutral-500"
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
          </div> */}
          <div className="sm:hidden">
            <SocialMedia />
            <div className="font-Poppins font-[14px] max-sm:font-[12px] text-sm leading-5 whitespace-nowrap text-slate-400 max-md:mt-10">
              © 2022 TalentFinder. All rights reserved.
            </div>
          </div>
        </div>
      </div>
      {/* COPY RIGHT */}
      <div className="font-Poppins font-[14px] mt-11 text-sm leading-5 whitespace-nowrap text-slate-400 max-md:mt-10 max-sm:hidden">© 2022 TalentFinder. All rights reserved.</div>
    </footer>
  );
}

export default Footer;

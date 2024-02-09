import React from "react";
import NavbarButton from "./NavbarButton";

function MainSection() {
  return (
    <main className="z-10 self-center sm:mt-20 md:mt-20 w-full max-w-[1920px] max-md:max-w-full">
      <section className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex z-10 flex-col self-stretch md:pl-20 sm:px-5 px-5 my-auto text-black max-md:mt-10 max-md:max-w-full">
            <div className="text-6xl leading-[69px] max-md:max-w-full max-md:text-4xl max-md:leading-10 md:text-left sm:text-left text-center">
              <span className="font-Archivo-400">Unlock Your Career </span>
              <span className="font-Archivo-400"> Potential with </span>
              <span className="font-Archivo font-semibold">Expert Mentorship!</span>
            </div>
            <p className="mt-7 font-Archivo-400 text-2xl leading-7 max-md:max-w-full md:text-left sm:text-left text-center">
              Elevate your career journey with personalized mentorship from
              industry experts. 🚀
            </p>
            <button className="hidden md:block sm:block justify-center font-Archivo-700 self-start hover:border-2 hover:border-violet-800 px-7 py-2.5 mt-14 text-lg leading-7 text-white whitespace-nowrap bg-violet-800 max-md:px-5 max-md:mt-10 hover:bg-violet-200 hover:text-violet-800 cursor-pointer transition-all transition-duration: 400ms; md:mx-0 sm:mx-0 mx-auto">
              Book a trial
            </button>
            <div className="flex flex-col sm:flex sm:flex-row md:flex md:flex-row md:gap-5 gap-2 sm:gap-5 justify-between items-center md:self-start sm:self-start mt-6 text-lg text-center text-indigo-400 whitespace-nowrap">
              <div className="flex gap-1.5 justify-between items-center">
                <img
                  loading="lazy"
                  src="\images\verified.svg"
                  className="aspect-[0.88] fill-indigo-500 w-[23px]"
                />
                <span className="grow my-auto font-Archivo font-400">7-days free trail</span>
              </div>
              <div className="flex gap-1.5 justify-between items-center">
                <img
                  loading="lazy"
                  src="\images\verified.svg"
                />
                <span className="grow self-start font-Archivo font-400">
                  100% Placement Assistance
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="\images\right-image.svg"
            className="grow w-full aspect-[1.1] max-md:max-w-full"
          />
        </div>
      </section>
      <NavbarButton />
    </main>
  );
}

export default MainSection;

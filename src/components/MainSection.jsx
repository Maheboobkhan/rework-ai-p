import React from "react";
import NavbarButton from "./NavbarButton";

function MainSection() {
  return (
    <main className="z-10 self-center mt-0 w-full max-w-[1920px] max-md:max-w-full">
      <section className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex z-10 flex-col self-stretch px-5 my-auto font-bold text-black max-md:mt-10 max-md:max-w-full">
            <h1 className="text-6xl leading-[69px] max-md:max-w-full max-md:text-4xl max-md:leading-10 text-center">
              <span className="">Unlock Your Career </span>
              <span className="text-black ">Potential</span>
              <span className=""> with </span>
              <span className="font-semibold">Expert Mentorship!</span>
            </h1>
            <p className="mt-7 text-2xl leading-7 max-md:max-w-full text-center">
              Elevate your career journey with personalized mentorship from
              industry experts. 🚀
            </p>
            <button className="justify-center self-start px-7 py-2.5 mt-14 text-lg mx-auto leading-7 text-white whitespace-nowrap bg-violet-800 rounded-xl max-md:px-5 max-md:mt-10 hover:bg-violet-200 hover:text-violet-800 cursor-pointer transition-all transition-duration: 400ms;">
              Book a trial
            </button>
            <div className="flex gap-5 flex-wrap justify-between items-center self-start mt-6 text-lg text-center text-indigo-400 whitespace-nowrap mx-auto">
              <div className="flex gap-1.5 justify-between items-center mx-auto">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/97b26dbce0e3f9b07aea5a56e2a764b8a5a8ba837ff18c64a156d17af537a278?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&"
                  className="aspect-[0.88] fill-indigo-500 w-[23px]"
                />
                <span className="grow my-auto">7-days free trail</span>
              </div>
              <div className="flex gap-1.5 justify-between items-center mx-auto">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/97b26dbce0e3f9b07aea5a56e2a764b8a5a8ba837ff18c64a156d17af537a278?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&"
                  className="aspect-[0.88] fill-indigo-400 w-[23px]"
                />
                <span className="grow self-start">
                  100% Placement Assistance
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2d1bfff3b83fc17e5b945a0eb13246fc33dff51749ef076ef7037d6aadedb968?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d1bfff3b83fc17e5b945a0eb13246fc33dff51749ef076ef7037d6aadedb968?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d1bfff3b83fc17e5b945a0eb13246fc33dff51749ef076ef7037d6aadedb968?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d1bfff3b83fc17e5b945a0eb13246fc33dff51749ef076ef7037d6aadedb968?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d1bfff3b83fc17e5b945a0eb13246fc33dff51749ef076ef7037d6aadedb968?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d1bfff3b83fc17e5b945a0eb13246fc33dff51749ef076ef7037d6aadedb968?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d1bfff3b83fc17e5b945a0eb13246fc33dff51749ef076ef7037d6aadedb968?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d1bfff3b83fc17e5b945a0eb13246fc33dff51749ef076ef7037d6aadedb968?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&"
            className="grow w-full aspect-[1.1] max-md:max-w-full"
          />
        </div>
      </section>
      <NavbarButton />
    </main>
  );
}

export default MainSection;

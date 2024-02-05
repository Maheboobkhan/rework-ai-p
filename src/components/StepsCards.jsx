import React from "react";

function StepsCards() {
  return (
    <div className="flex flex-col items-center px-16 py-11 bg-white max-md:px-5">
      <div className="justify-center p-2.5 text-lg leading-7 text-center whitespace-nowrap bg-purple-100 rounded-xl text-indigo-700 text-opacity-50">
        How it works?
      </div>
      <div className="mt-7 text-5xl font-semibold text-center text-black leading-[62.4px] max-md:max-w-full max-md:text-4xl">
        Get Placed in 4 Steps
      </div>
      <div className="mt-3.5 text-xl leading-6 text-center text-black max-md:max-w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod
        orci vel quam sagittis
        <br />
      </div>
      <div className="self-stretch mt-20 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full hover:scale-[0.95] hover:cursor-pointer hover:transition-all transition-duration: 500ms transition-all transition-duration">
            <div className="flex flex-col grow px-8 py-12 w-full text-center bg-violet-800 rounded-xl shadow-sm backdrop-blur-[2px] max-md:px-5 max-md:mt-6">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8b95cb710c43ff3261632ab4629f27624133d6c1deb262979389c0b26218584?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&"
                className="self-center mt-10 aspect-square w-[84px]"
              />
              <div className="mt-16 text-2xl font-bold leading-7 text-gray-200 max-md:mt-10">
                Application
              </div>
              <div className="mt-5 text-lg text-white">
                Fill out a brief application form to help us understand your
                background and goals.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full hover:scale-[0.95] hover:cursor-pointer hover:transition-all transition-duration: 500ms transition-all transition-duration">
            <div className="flex flex-col grow px-8 py-12 w-full text-center bg-violet-100 rounded-xl shadow-sm max-md:px-5 max-md:mt-6">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d751df8f5dd13ae1e9249597ff29166ad70f0bb27c2bfbd20116895270f2727?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&"
                className="self-center mt-10 aspect-square w-[84px]"
              />
              <div className="mt-16 text-2xl font-semibold leading-7 text-black max-md:mt-10">
                Matching
              </div>
              <div className="mt-5 text-lg text-zinc-600">
                 Our algorithm matches you with the ideal mentor based on your
                profile and aspirations.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full hover:scale-[0.95] hover:cursor-pointer hover:transition-all transition-duration: 500ms transition-all transition-duration">
            <div className="flex flex-col grow px-8 py-12 w-full text-center bg-violet-800 rounded-xl shadow-sm backdrop-blur-[2px] max-md:px-5 max-md:mt-6">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3817c7e6b82559e5762e7dd32d4ae1f96b4bd8e3e78669be2f62ecd068d2a1d9?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&"
                className="self-center mt-10 aspect-square w-[84px]"
              />
              <div className="mt-16 text-2xl font-bold leading-7 text-gray-200 max-md:mt-10">
                Sessions
              </div>
              <div className="mt-5 text-lg text-white">
                 Enjoy regular one-on-one sessions with your mentor to receive
                guidance, feedback, and support.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full hover:scale-[0.95] hover:cursor-pointer hover:transition-all transition-duration: 500ms transition-all transition-duration">
            <div className="flex flex-col grow px-8 py-12 w-full text-center bg-violet-100 rounded-xl shadow-sm max-md:px-5 max-md:mt-6">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9efac4174171658b2c0a431a71564cc31d9c5fd0ac815abfa3670e6d10c13023?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&"
                className="self-center mt-10 aspect-square w-[84px]"
              />
              <div className="mt-16 text-2xl font-semibold leading-7 text-black whitespace-nowrap max-md:mt-10">
                Progress Tracking
              </div>
              <div className="mt-5 text-lg text-zinc-600">
                Track your progress and celebrate your milestones with the help
                of your mentor.
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center px-7 py-2.5 mt-11 text-lg font-medium text-center hover:text-violet-800 text-neutral-100 bg-violet-800 whitespace-nowrap rounded-xl hover:border-2 hover:border-solid shadow-2xl hover:bg-neutral-100 hover:border-[color:var(--Primary-100,#5C27C0)] max-md:px-5 max-md:mt-10 cursor-pointer transition-all transition-duration: 400ms;">
        Get Started
      </div>
    </div>
  );
}

export default StepsCards;

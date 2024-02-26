import React from "react";

function PricingCardsSection() {
  return (
    <>
      <div className="flex justify-center items-center px-16 py-12 bg-slate-50 max-md:px-5">
        <div className="flex flex-col items-center mt-3 w-full max-w-[1197px] max-md:max-w-full">
          <div className="font-Archivo-400 justify-center p-2.5 text-lg leading-7 text-center whitespace-nowrap bg-purple-100 rounded-xl text-[#3222F0] text-opacity-50">
            Decided to join?
          </div>
          <div className="font-Archivo-600 mt-5 text-5xl font-semibold text-center text-black leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
            We've got a plan that's perfect for you
          </div>
          <div className="mt-2 text-xl leading-5 text-center lowercase text-neutral-700 max-md:max-w-full">
            <span className="font-Archivo-400 capitalize">choose</span> a plan tailored to your
            needs, Flexible payment options available.
          </div>
          <div className="justify-between self-stretch mt-12 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md: ">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full hover:scale-[0.95] hover:cursor-pointer hover:transition-all transition-duration: 500ms transition-all transition-duration">
                <div className="flex flex-col grow px-9 py-8 mx-auto w-full text-base rounded-xl shadow-2xl bg-neutral-100 text-zinc-600 max-md:px-5 max-md:mt-10">
                  <div className="flex gap-1.5 self-center text-2xl text-center text-violet-800 whitespace-nowrap">
                    <div className="font-SpaceGrotesk font-medium">1</div>
                    <div className="font-Archivo-400 grow my-auto">Month</div>
                  </div>
                  <div className="flex gap-0 self-center mt-5 text-4xl text-center whitespace-nowrap text-stone-900">
                    <div className="font-SpaceGrotesk font-medium">₹</div>
                    <div className="font-Archivo-400 flex-auto">199.00</div>
                    <div className="font-Archivo-400 self-start mt-3.5 text-base">/month</div>
                  </div>
                  <div className="font-Archivo-400 mt-12 text-lg leading-7 text-center text-violet-800 max-md:mt-10">
                    Suitable for companies with 5-10 openings
                  </div>
                  <div className="flex gap-2.5 justify-between mt-5 whitespace-nowrap">
                    <img
                      loading="lazy"
                      src="/images/right.svg"
                      className="w-6 aspect-square"
                    />
                    <div className="font-Poppins-400 grow">10 interview-ready candidates</div>
                  </div>
                  <div className="flex gap-2.5 justify-between mt-2.5 whitespace-nowrap">
                    <img
                      loading="lazy"
                      src="/images/right.svg"
                      className="w-6 aspect-square"
                    />
                    <div className="font-Poppins-400 grow">Unlimited job postings</div>
                  </div>
                  <div className="flex gap-2.5 justify-between mt-2.5">
                    <img
                      loading="lazy"
                      src="/images/right.svg"
                      className="self-start w-6 aspect-square"
                    />
                    <div className="font-Poppins-400 flex-auto">
                      Receive pre-vetted profiles within 48 hours
                    </div>
                  </div>
                  <div className="flex gap-2.5 justify-between mt-2.5 whitespace-nowrap">
                    <img
                      loading="lazy"
                      src="/images/wrong.svg"
                      className="w-6 aspect-square"
                    />
                    <div className="font-Poppins-400 grow">Dedicated account manager</div>
                  </div>
                  <div className="flex gap-2.5 justify-between mt-2.5">
                    <img
                      loading="lazy"
                      src="/images/wrong.svg"
                      className="self-start w-6 aspect-square"
                    />
                    <div className="font-Poppins-400 flex-auto">
                      Assistance with interview scheduling
                    </div>
                  </div>
                  <div className="flex gap-2.5 justify-between mt-2.5 whitespace-nowrap">
                    <img
                      loading="lazy"
                      src="/images/wrong.svg"
                      className="w-6 aspect-square"
                    />
                    <div className="font-Poppins-400 grow">Custom reports</div>
                  </div>
                  <div className="justify-center font-semibold items-center px-16 py-4 mt-16 text-lg text-center text-white whitespace-nowrap bg-violet-800 shadow-2xl max-md:px-5 max-md:mt-10 hover:bg-violet-200 hover:text-violet-800 cursor-pointer transition-all transition-duration: 400ms;">
                    Get Started
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full hover:scale-[0.95] hover:cursor-pointer hover:transition-all transition-duration: 500ms transition-all transition-duration">
                <div className="flex flex-col grow pb-8 pl-5 mx-auto w-full bg-violet-800 rounded-xl shadow-2xl max-md:mt-10">
                  <div className="flex gap-0.5 items-start self-end text-center whitespace-nowrap">
                    <div className="flex gap-1.5 self-end mt-9 text-2xl text-violet-800">
                      <div className="font-SpaceGrotesk font-medium text-white">3</div>
                      <div className="font-Archivo-400 grow my-auto text-white">Months</div>
                    </div>
                    <div className="grow justify-center self-start px-6 py-3 text-sm bg-amber-300 rounded-tr-xl text-stone-900 max-md:px-5">
                      Most Popular
                    </div>
                  </div>
                  <div className="flex gap-0 self-center mt-5 text-4xl text-center whitespace-nowrap text-neutral-100">
                    <div className="font-SpaceGrotesk font-medium">₹</div>
                    <div className="font-Archivo-400 flex-auto">149.00</div>
                    <div className="font-Archivo-400 self-start mt-3.5 text-base">/month</div>
                  </div>
                  <div className="font-Archivo-400 mt-12 text-lg leading-7 text-center text-white max-md:mt-10">
                    Suitable for companies with 5-10 openings
                  </div>
                  <div className="flex gap-2.5 justify-between mt-5 text-base text-stone-900">
                    <img
                      loading="lazy"
                      src="/images/right.svg"
                      className="w-6 aspect-square"
                    />
                    <div className="font-Poppins-400 flex-auto text-white">
                      10 interview-ready candidates
                    </div>
                  </div>
                  <div className="flex gap-2.5 justify-between mt-2.5 text-base text-violet-100">
                    <img
                      loading="lazy"
                      src="/images/right.svg"
                      className="w-6 aspect-square"
                    />
                    <div className="font-Poppins-400 flex-auto text-white">Unlimited job postings</div>
                  </div>
                  <div className="flex gap-2.5 justify-between mt-2.5 text-base text-violet-100">
                    <img
                      loading="lazy"
                      src="/images/right.svg"
                      className="self-start w-6 aspect-square"
                    />
                    <div className="font-Poppins-400 flex-auto text-white">
                      Receive pre-vetted profiles within 48 hours
                    </div>
                  </div>
                  <div className="flex gap-2.5 justify-between mt-2.5 text-base text-violet-100">
                    <img
                      loading="lazy"
                      src="/images/wrong.svg"
                      className="w-6 aspect-square"
                    />
                    <div className="font-Poppins-400 flex-auto text-white">Dedicated account manager</div>
                  </div>
                  <div className="flex gap-2.5 justify-between mt-2.5 text-base text-violet-100">
                    <img
                      loading="lazy"
                      src="/images/wrong.svg"
                      className="self-start w-6 aspect-square"
                    />
                    <div className="font-Poppins-400 flex-auto text-white">
                      Assistance with interview scheduling
                    </div>
                  </div>
                  <div className="flex gap-2.5 justify-between mt-2.5 text-base text-violet-100">
                    <img
                      loading="lazy"
                      src="/images/wrong.svg"
                      className="w-6 aspect-square"
                    />
                    <div className="font-Poppins-400 flex-auto text-white">Custom reports</div>
                  </div>
                  
                  <div className="justify-center items-center px-16 py-3.5 mt-20 text-lg mr-5 text-center text-violet-800 whitespace-nowrap bg-white shadow-2xl max-md:px-5 max-md:mt-10 hover:bg-violet-500 font-semibold hover:text-white cursor-pointer transition-all transition-duration: 400ms;">
                    Get Started
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full hover:scale-[0.95] hover:cursor-pointer hover:transition-all transition-duration: 500ms transition-all transition-duration">
                <div className="flex flex-col grow px-9 py-8 mx-auto w-full text-base rounded-xl shadow-2xl bg-neutral-100 text-zinc-600 max-md:px-5 max-md:mt-10">
                  <div className="flex gap-1.5 self-center text-2xl text-center text-violet-800 whitespace-nowrap">
                    <div className="font-SpaceGrotesk font-medium">6</div>
                    <div className="font-Archivo-400 grow my-auto">Months</div>
                  </div>
                  <div className="flex gap-0 self-center mt-5 text-4xl text-center whitespace-nowrap text-stone-900">
                    <div className="font-SpaceGrotesk font-medium">₹</div>
                    <div className="font-Archivo-400 flex-auto">169.00</div>
                    <div className="font-Archivo-400 self-start mt-3.5 text-base">/month</div>
                  </div>
                  <div className="font-Archivo-400 mt-12 text-lg leading-7 text-center text-violet-800 max-md:mt-10">
                    Suitable for companies with 5-10 openings
                  </div>
                  <div className="flex gap-2.5 justify-between mt-5 whitespace-nowrap">
                    <img
                      loading="lazy"
                      src="/images/right.svg"
                      className="w-6 aspect-square"
                    />
                    <div className="font-Poppins-400 grow">10 interview-ready candidates</div>
                  </div>
                  <div className="flex gap-2.5 justify-between mt-2.5 whitespace-nowrap">
                    <img
                      loading="lazy"
                      src="/images/right.svg"
                      className="w-6 aspect-square"
                    />
                    <div className="font-Poppins-400 grow">Unlimited job postings</div>
                  </div>
                  <div className="flex gap-2.5 justify-between mt-2.5">
                    <img
                      loading="lazy"
                      src="/images/right.svg"
                      className="self-start w-6 aspect-square"
                    />
                    <div className="font-Poppins-400 flex-auto">
                      Receive pre-vetted profiles within 48 hours
                    </div>
                  </div>
                  <div className="flex gap-2.5 justify-between mt-2.5 whitespace-nowrap">
                    <img
                      loading="lazy"
                      src="/images/wrong.svg"
                      className="w-6 aspect-square"
                    />
                    <div className="font-Poppins-400 grow">Dedicated account manager</div>
                  </div>
                  <div className="flex gap-2.5 justify-between mt-2.5">
                    <img
                      loading="lazy"
                      src="/images/wrong.svg"
                      className="self-start w-6 aspect-square"
                    />
                    <div className="font-Poppins-400 flex-auto">
                      Assistance with interview scheduling
                    </div>
                  </div>
                  <div className="flex gap-2.5 justify-between mt-2.5 whitespace-nowrap">
                    <img
                      loading="lazy"
                      src="/images/wrong.svg"
                      className="w-6 aspect-square"
                    />
                    <div className="font-Poppins-400 grow">Custom reports</div>
                  </div>
                  <div className="justify-center font-semibold items-center px-16 py-4 mt-16 text-lg text-center text-white whitespace-nowrap bg-violet-800 shadow-2xl max-md:px-5 max-md:mt-10 hover:bg-violet-200 hover:text-violet-800 cursor-pointer transition-all transition-duration: 400ms;">
                    Get Started
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:block md:block hidden font-Poppins-400 justify-center px-7 py-2.5 mt-24 text-lg text-center text-violet-800 hover:text-neutral-100 hover:bg-violet-800 whitespace-nowrap border-2 border-solid shadow-2xl bg-neutral-100 border-[color:var(--Primary-100,#5C27C0)] max-md:px-5 max-md:mt-10 cursor-pointer transition-all transition-duration: 400ms;">
            Enroll Now
          </div>
        </div>
      </div>
    </>
  );

}

export default PricingCardsSection;

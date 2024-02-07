import React from "react";

function BenefitsSection() {
  return (
    <div className="flex justify-center items-center px-16 py-12 bg-white max-md:px-5">
      <div className="flex flex-col items-center mt-12 w-full max-w-[1172px] max-md:mt-10 max-md:max-w-full">
        <div className="font-Archivo-400 justify-center p-2.5 text-lg leading-7 text-center whitespace-nowrap bg-purple-100 rounded-xl text-indigo-700 text-opacity-50">
          How will you benefit?
        </div>
        <div className="font-Archivo-600 mt-5 text-5xl font-semibold text-center leading-[62.4px] text-neutral-800 max-md:max-w-full max-md:text-4xl">
          What You'll Gain
        </div>
        <div className="font-Archivo-400 mt-2 text-xl leading-6 text-center text-neutral-700 w-[807px] max-md:max-w-full">
          Discover Success. Explore tailored opportunities and resources that
          make you job-ready. Join us to step into the career you've always
          wanted.
        </div>
        <div className="self-stretch mt-9 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">

            <div className="sm:flex flex gap-x-5 w-full justify-between">
              <div className="flex flex-col w-1/2 max-md:ml-0 max-md:w-full h-fit hover:scale-[0.95] hover:cursor-pointer hover:transition-all transition-duration: 500ms transition-all transition-duration">
                <div className="flex flex-col grow rounded-xl justify-center items-center px-5 py-14 w-full bg-purple-50 shadow-sm text-zinc-900 max-md:mt-9">
                  <img
                    loading="lazy"
                    src="/images/gain1.svg"
                    className="max-w-full aspect-square md:w-[100px] sm:w-[100px] w-[50px]"
                  />
                  <div className="font-Lato mt-6 text-lg font-bold leading-6 whitespace-nowrap text-wrap text-center">
                    Personalized Guidance
                  </div>
                  <div className="font-Lato self-stretch mt-6 text-sm leading-6 text-center text-wrap">
                    Tailored mentorship aligning with your career goals and
                    aspirations.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-1/2 max-md:ml-0 max-md:w-full h-fit hover:scale-[0.95] hover:cursor-pointer hover:transition-all transition-duration: 500ms transition-all transition-duration">
                <div className="flex flex-col grow rounded-xl justify-center items-center px-5 py-12 w-full bg-purple-50 shadow-sm text-neutral-800 max-md:mt-9">
                  <img
                    loading="lazy"
                    src="/images/gain2.svg"
                    className="max-w-full aspect-square md:w-[100px] sm:w-[100px] w-[50px]"
                  />
                  <div className="font-Lato mt-6 text-lg font-bold leading-6 whitespace-nowrap text-wrap text-center">
                    Industry Insights
                  </div>
                  <div className="font-Lato self-stretch mt-5 text-sm leading-6 text-center text-wrap">
                    Gain valuable insights into the current industry trends and
                    market demands.
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:flex flex gap-x-5 w-full justify-between">
              <div className="flex flex-col ml-5 w-1/2 max-md:ml-0 max-md:w-full hover:scale-[0.95] hover:cursor-pointer hover:transition-all transition-duration: 500ms transition-all transition-duration">
                <div className="flex flex-col grow rounded-xl justify-center items-center px-4 py-12 w-full bg-purple-50 shadow-sm text-zinc-800 max-md:mt-9">
                  <img
                    loading="lazy"
                    src="/images/gain3.svg"
                    className="max-w-full aspect-square md:w-[100px] sm:w-[100px] w-[50px]"
                  />
                  <div className="font-Lato mt-6 text-lg font-bold leading-6 whitespace-nowrap text-wrap text-center">
                    Resume Building
                  </div>
                  <div className="font-Lato self-stretch mt-5 text-sm leading-6 text-center">
                    Craft a compelling resume showcasing your unique skills and
                    achievements.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-1/2 max-md:ml-0 max-md:w-full hover:scale-[0.95] hover:cursor-pointer hover:transition-all transition-duration: 500ms transition-all transition-duration">
                <div className="flex flex-col grow rounded-xl justify-center items-center px-7 py-12 w-full bg-purple-50 shadow-sm text-zinc-800 max-md:px-5 max-md:mt-9">
                  <img
                    loading="lazy"
                    src="/images/gain4.svg"
                    className="max-w-full aspect-square md:w-[100px] sm:w-[100px] w-[50px]"
                  />
                  <div className="font-Lato mt-6 text-lg font-bold leading-6 whitespace-nowrap text-wrap text-center">
                    Mock Interviews
                  </div>
                  <div className="font-Lato self-stretch mt-6 text-sm leading-6 text-center text-wrap">
                    Hone your interview skills through personalized mock sessions.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="self-stretch mt-12 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">

            <div className="sm:flex flex gap-x-5 w-full justify-between">
              <div className="flex flex-col w-1/2 max-md:ml-0 max-md:w-full hover:scale-[0.95] hover:cursor-pointer hover:transition-all transition-duration: 500ms transition-all transition-duration">
                <div className="flex flex-col grow rounded-xl justify-center px-6 py-11 w-full bg-purple-50 shadow-sm text-zinc-900 max-md:px-5 max-md:mt-9">
                  <img
                    loading="lazy"
                    src="/images/gain5.svg"
                    className="self-center max-w-full aspect-square md:w-[100px] sm:w-[100px] w-[50px]"
                  />
                  <div className="font-Lato mt-6 mx-auto text-lg font-bold leading-6 whitespace-nowrap text-wrap text-center">
                    Networking Opportunities
                  </div>
                  <div className="font-Lato mt-5 text-sm leading-6 text-center">
                    Connect with industry professionals and build a strong
                    professional network.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-1/2 max-md:ml-0 max-md:w-full hover:scale-[0.95] hover:cursor-pointer hover:transition-all transition-duration: 500ms transition-all transition-duration">
                <div className="flex flex-col grow rounded-xl justify-center items-center px-4 py-10 w-full bg-purple-50 shadow-sm text-neutral-800 max-md:mt-9">
                  <img
                    loading="lazy"
                    src="/images/gain6.svg"
                    className="max-w-full aspect-square md:w-[100px] sm:w-[100px] w-[50px]"
                  />
                  <div className="font-Lato mt-6 text-lg font-bold leading-6 text-wrap text-center">Referral</div>
                  <div className="font-Lato self-stretch mt-6 text-sm leading-6 text-center">
                    Gain valuable insights and guidance from an expert mentor to
                    accelerate your professional growth and success.
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:flex flex gap-x-5 w-full justify-between">
              <div className="flex flex-col ml-5 w-1/2 max-md:ml-0 max-md:w-full hover:scale-[0.95] hover:cursor-pointer hover:transition-all transition-duration: 500ms transition-all transition-duration">
                <div className="flex flex-col grow rounded-xl justify-center items-center px-4 py-10 w-full bg-purple-50 shadow-sm text-zinc-800 max-md:mt-9">
                  <img
                    loading="lazy"
                    src="/images/gain7.svg"
                    className="max-w-full aspect-square md:w-[100px] sm:w-[100px] w-[50px]"
                  />
                  <div className="font-Lato mt-6 text-lg font-bold leading-6 whitespace-nowrap text-wrap text-center">
                    
                    interview Scheduling
                  </div>
                  <div className="font-Lato self-stretch mt-5 text-sm leading-6 text-center">
                    Gain valuable insights and guidance from an expert mentor to
                    accelerate your professional growth and success.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-1/2 max-md:ml-0 max-md:w-full hover:scale-[0.95] hover:cursor-pointer hover:transition-all transition-duration: 500ms transition-all transition-duration">
                <div className="flex flex-col grow rounded-xl justify-center items-center px-4 py-10 w-full bg-purple-50 shadow-sm text-zinc-800 max-md:mt-9">
                  <img
                    loading="lazy"
                    src="/images/gain8.svg"
                    className="max-w-full aspect-square md:w-[100px] sm:w-[100px] w-[50px]"
                  />
                  <div className="font-Lato mt-6 text-lg font-bold leading-6 whitespace-nowrap text-wrap text-center">
                    Placement Assistance
                  </div>
                  <div className="font-Lato self-stretch mt-6 text-sm leading-6 text-center">
                    Gain valuable insights and guidance from an expert mentor to
                    accelerate your professional growth and success.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default BenefitsSection;

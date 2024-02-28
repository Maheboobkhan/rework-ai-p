import React, { useRef, useState } from "react";

function CertificateSection() {
  const [isHovered, setIsHovered] = useState(false)

  const mouseover = () => {
    setIsHovered(!isHovered);

  };

  const mouseleave = () => {
    setIsHovered(!isHovered);
  };
  return (
    <header className="flex justify-center items-center px-16 py-12 bg-violet-200 max-md:px-5">
      <div className="mt-1 w-full max-w-[1162px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md: items-center">
          <div className="flex flex-col w-[64%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-start mt-12 text-3xl font-medium text-zinc-800 max-md:mt-10 max-md:max-w-full">
              <span className="self-stretch text-4xl font-bold text-stone-800 max-md:max-w-full md:text-start sm:text-start text-center">
                <span className="font-Archivo-500 font-medium text-stone-800">

                  Unlock the Power of Our Features and get
                </span>

                <span className="font-Archivo-800 font-extrabold ml-[6px] text-stone-800">
                  Certified by us
                </span>
                <span className="font-medium text-stone-800">!</span>
              </span>
            </div>
            <p className="font-Lato-400 mt-2 text-xl text-stone-800 w-[468px] max-md:max-w-full md:text-start sm:text-start text-center">
              Lorem ipsum dolor sit amet consectetur. Dolor nisl vitae est
              mauris varius.
            </p>

            <div className="flex z-10 gap-2.5 justify-center p-2 whitespace-nowrap mt-12">
              <img
                loading="lazy"
                src="/images/checked.svg"
                className="aspect-square w-[25px]"
              />
              <div className="text-[20px] font-medium font-Archivo-500 grow self-start mt-1.5">
                Find the right Program
              </div>
            </div>

            <div className="flex z-10 gap-2.5 justify-center p-2 whitespace-nowrap">
              <img
                loading="lazy"
                src="/images/checked.svg"
                className="aspect-square w-[25px]"
              />
              <div className="text-[20px] font-medium font-Archivo-500 grow self-start mt-1.5">

                Earn a valuable credential
              </div>
            </div>

            <div className="flex z-10 gap-2.5 justify-center p-2 whitespace-nowrap">
              <img
                loading="lazy"
                src="/images/checked.svg"
                className="aspect-square w-[25px]"
              />
              <div className="text-[20px] font-medium font-Archivo-500 grow self-start mt-1.5">

                Learn & gain expertise
              </div>
            </div>

            <div className="flex z-10 gap-2.5 justify-center p-2 whitespace-nowrap">
              <img
                loading="lazy"
                src="/images/checked.svg"
                className="aspect-square w-[25px]"
              />
              <div className="text-[20px] font-medium font-Archivo-500 grow self-start mt-1.5">

                Get certification
              </div>
            </div>

            <div className="flex gap-2.5 justify-center p-2 whitespace-nowrap">
              <img
                loading="lazy"
                src="/images/checked.svg"
                className="aspect-square w-[25px]"
              />
              <div className="text-[20px] font-medium font-Archivo-500 grow my-auto">Stand out in your field </div>
            </div>
            <div onMouseOver={mouseover} onMouseLeave={mouseleave} className="w-fit flex gap-4 justify-center px-8 py-4 mt-4 ml-2 text-lg text-center whitespace-nowrap bg-violet-800 border-2 border-violet-800 border-solid shadow-2xl text-neutral-50 max-md:px-5 max-md:ml-2.5 hover:bg-white hover:text-violet-900 cursor-pointer transition-all transition-duration: 400ms;">
              <div className="font-Poppins-500 my-auto">Get Certified</div>
              {isHovered ? <img 
                loading="lazy"
                src="/images/right-arrow1.svg"
                className="w-8 aspect-square"
              /> : <img
            
              loading="lazy"
              src="/images/right-arrow.svg"
              className="w-8 aspect-square"
            />}
            </div>

              {/* <button className="font-Poppins-500 my-auto">
                <svg fill width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.566 0.160156L11.1551 1.57768L14.4254 4.83269L0.820312 4.84629L0.822333 6.84629L14.3901 6.83269L11.1749 10.0629L12.5925 11.4738L18.2361 5.80379L12.566 0.160156Z" fill="white" />
                </svg>
            Get Certified
              </button> */}
            

          </div>
          <div className="hidden md:flex flex-col ml-5 w-[36%] max-md:ml-0 max-md:w-full hover:scale-[0.95] hover:cursor-pointer hover:transition-all transition-duration: 500ms transition-all transition-duration">
            <img
              loading="lazy"
              srcSet="/images/certificate.svg"
              className="md:w-full sm:w-full w-[300px] md:max-0 sm:max-0 mx-auto aspect-[0.66] max-md:mt-10"
            />
          </div>
        </div>
      </div>
    </header >
  );
}
export default CertificateSection;

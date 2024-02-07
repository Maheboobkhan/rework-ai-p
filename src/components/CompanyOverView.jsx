import React from "react";

function CompanyOverView() {
  return (
    <header className="flex justify-center items-center px-16 py-12 text-center bg-violet-800 max-md:px-5">
      <div className="flex flex-col items-center mt-2.5 w-full max-w-[1196px] max-md:max-w-full">
        <h1 className="font-Archivo-600 text-5xl font-semibold text-gray-200 leading-[60px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
          Unlock Your Potential with Talent Finder
        </h1>
        <p className="font-Lato mt-2 text-xl text-white text-opacity-90 w-[598px] max-md:max-w-full">
          Lorem ipsum dolor sit amet consectetur. Dolor nisl vitae est mauris
          varius. Lobortis eleifend justo amet turpis vitae aliquam feugiat urna
          et. Sit mi ornare sapien bibendum.
        </p>
        <div className="flex gap-5 justify-between self-stretch px-5 py-5 mt-9 text-4xl font-bold whitespace-nowrap leading-[60px] text-zinc-50 max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
          <div className="flex flex-col flex-1 px-5 py-2.5 rounded-xl max-md:px-5 leading-10 items-center">
            <img
              loading="lazy"
              src="/images/potential1.svg"
              alt="Image 1"
              className="self-center aspect-[1.14] w-[60px]"
            />
            <div className="justify-center px-4 py-3 font-Inter">70+</div>
            <div className="text-sm font-normal font-Archivo-500">Mentors Available</div>
          </div>
          <div className="flex flex-col flex-1 justify-center px-2.5 pt-1.5 pb-4 rounded-2xl">
            <img
              loading="lazy"
              src="/images/potential2.svg"
              alt="Image 2"
              className="self-center aspect-[1.02] w-[58px]"
            />
            <div className="mt-1 font-Inter">5000+</div>
            <div className="text-sm font-normal font-Archivo-500">Mentors Available</div>
          </div>
          <div className="flex flex-col flex-1 justify-center px-4 py-2.5 rounded-xl">
            <img
              loading="lazy"
              src="/images/potential3.svg"
              alt="Image 3"
              className="self-center aspect-[1.59] w-[82px]"
            />
            <div className="px-5 pb-3 mt-1 max-md:px-5 font-Inter">35+</div>
            <div className="text-sm font-normal font-Archivo-500">Mentors Available</div>
          </div>
          <div className="flex flex-col flex-1 justify-center px-4 py-2 rounded-2xl">
            <img
              loading="lazy"
              src="/images/potential4.svg"
              alt="Image 4"
              className="self-center w-14 aspect-square"
            />
            <div className="px-5 pb-3 mt-1 font-Inter">50+</div>
            <div className="text-sm font-normal font-Archivo-500">Mentors Available</div>
          </div>
          <div className="flex flex-col flex-1 justify-center px-2.5 pt-2 pb-5 rounded-2xl">
            <img
              loading="lazy"
              src="/images/potential5.svg"
              alt="Image 5"
              className="self-center w-14 aspect-square"
            />
            <div className="mt-1 font-Inter">2000+</div>
            <div className="text-sm font-normal font-Archivo-500">Mentors Available</div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default CompanyOverView;

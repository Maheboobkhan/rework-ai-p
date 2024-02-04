import React from "react";

function CompanyOverView() {
  return (
    <header className="flex justify-center items-center px-16 py-12 text-center bg-violet-800 max-md:px-5">
      <div className="flex flex-col items-center mt-2.5 w-full max-w-[1196px] max-md:max-w-full">
        <h1 className="text-5xl font-semibold text-gray-200 leading-[60px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
          Unlock Your Potential with Talent Finder
        </h1>
        <p className="mt-2 text-xl text-white text-opacity-90 w-[598px] max-md:max-w-full">
          Lorem ipsum dolor sit amet consectetur. Dolor nisl vitae est mauris
          varius. Lobortis eleifend justo amet turpis vitae aliquam feugiat urna
          et. Sit mi ornare sapien bibendum.
        </p>
        <div className="flex gap-5 justify-between self-stretch px-5 py-5 mt-9 text-4xl font-bold whitespace-nowrap leading-[60px] text-zinc-50 max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
          <div className="flex flex-col flex-1 justify-center px-5 py-2.5 rounded-xl max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/308c57690b9e30ea68687dddd384c96f3395052be8877e7af21a0ef20d275675?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&"
              alt="Image 1"
              className="self-center aspect-[1.14] w-[60px]"
            />
            <div className="justify-center px-4 pb-3">70+</div>
            <div className="text-sm font-normal">Mentors Available</div>
          </div>
          <div className="flex flex-col flex-1 justify-center px-2.5 pt-1.5 pb-4 rounded-2xl">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4196b34f12e8228af46423d94a38c42c22f291b3fe3370b7aff9552c718a0678?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&"
              alt="Image 2"
              className="self-center aspect-[1.02] w-[58px]"
            />
            <div className="mt-1">5000+</div>
            <div className="text-sm font-normal">Mentors Available</div>
          </div>
          <div className="flex flex-col flex-1 justify-center px-4 py-2.5 rounded-xl">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a3d7a4d0a3d3e01a0885427d4fd7c17bcd03ec31525c9a86797c9b8c1cb5829?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&"
              alt="Image 3"
              className="self-center aspect-[1.59] w-[82px]"
            />
            <div className="px-5 pb-3 mt-1 max-md:px-5">35+</div>
            <div className="text-sm font-normal">Mentors Available</div>
          </div>
          <div className="flex flex-col flex-1 justify-center px-4 py-2 rounded-2xl">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd41cb65af5dc2b9996249c8c9104219a7076571ec01e7fe81af65472deb49c9?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&"
              alt="Image 4"
              className="self-center w-14 aspect-square"
            />
            <div className="px-5 pb-3 mt-1">50+</div>
            <div className="text-sm font-normal">Mentors Available</div>
          </div>
          <div className="flex flex-col flex-1 justify-center px-2.5 pt-2 pb-5 rounded-2xl">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/76f153942c3904f0b03b31e033846c82d4ef5fa52738f99a3785b6be36b538d2?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&"
              alt="Image 5"
              className="self-center w-14 aspect-square"
            />
            <div className="mt-1">2000+</div>
            <div className="text-sm font-normal">Mentors Available</div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default CompanyOverView;

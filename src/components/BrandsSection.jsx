import React from "react";

function BrandsSection() {
  return (
    <header
      className="flex flex-col items-center px-5 pt-12 pb-3 text-lg font-medium text-center bg-white text-black text-opacity-90"
      aria-label="Landing Component"
      role="banner"
    >
      <div className="max-md:max-w-full font-Archivo-500">
        Let us pave your path to top-tier companies including
      </div>
      <div
        x-data="{}"
        x-init="$nextTick(() => {
                  let ul = $refs.logos;
                  ul.insertAdjacentHTML('afterend', ul.outerHTML);
                  ul.nextSibling.setAttribute('aria-hidden', 'true');
                  })"
        className="w-full inline-flex flex-nowrap mt-5"
      >
        <ul class="flex items-center justify-center md:justify-start [&_img]:max-w-none animate-infinite-scroll">
          <li className="mx-[20px] sm:mx-[50px] md:mx-[50px]">
            <img src="/images/google1.svg" alt="google" />
          </li>
          <li className="mx-[20px] sm:mx-[50px] md:mx-[50px]">
            <img src="/images/ibm1.svg" alt="ibm" />
          </li>
          <li className="mx-[20px] sm:mx-[50px] md:mx-[50px]">
            <img src="/images/apple1.svg" alt="apple" />
          </li>
          <li className="mx-[20px] sm:mx-[50px] md:mx-[50px]">
            <img src="/images/amazon1.svg" alt="amazon" />
          </li>
          <li className="mx-[20px] sm:mx-[50px] md:mx-[50px]">
            <img src="/images/sony1.svg" alt="sony" />
          </li>
          <li className="mx-[20px] sm:mx-[50px] md:mx-[50px]">
            <img src="/images/microsoft1.svg" alt="microsoft" />
          </li>

          <li className="mx-[20px] sm:mx-[50px] md:mx-[50px]">
            <img src="/images/whirlpool1.svg" alt="whirlpool" />
          </li>

        </ul>

        <ul class="flex items-center justify-center md:justify-start [&_img]:max-w-none animate-infinite-scroll">
          <li className="mx-[20px] sm:mx-[50px] md:mx-[50px]">
            <img src="/images/google1.svg" alt="google" />
          </li>
          <li className="mx-[20px] sm:mx-[50px] md:mx-[50px]">
            <img src="/images/ibm1.svg" alt="ibm" />
          </li>
          <li className="mx-[20px] sm:mx-[50px] md:mx-[50px]">
            <img src="/images/apple1.svg" alt="apple" />
          </li>
          <li className="mx-[20px] sm:mx-[50px] md:mx-[50px]">
            <img src="/images/amazon1.svg" alt="amazon" />
          </li>
          <li className="mx-[20px] sm:mx-[50px] md:mx-[50px]">
            <img src="/images/sony1.svg" alt="sony" />
          </li>
          <li className="mx-[20px] sm:mx-[50px] md:mx-[50px]">
            <img src="/images/microsoft1.svg" alt="microsoft" />
          </li>

          <li className="mx-[20px] sm:mx-[50px] md:mx-[50px]">
            <img src="/images/whirlpool1.svg" alt="whirlpool" />
          </li>

        </ul>
        
      </div>
    </header >
  );
}

export default BrandsSection;

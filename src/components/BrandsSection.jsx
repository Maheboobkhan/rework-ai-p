import React from "react";

function BrandsSection() {
  return (
    <header
      className="flex flex-col items-center px-5 pt-8 pb-3 text-lg font-medium text-center bg-white text-black text-opacity-90"
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
        <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          <li>
            <img src="/images/google.svg" alt="google" />
          </li>
          <li>
            <img src="/images/ibm.svg" alt="ibm" />
          </li>
          <li>
            <img src="/images/apple.svg" alt="apple" />
          </li>
          <li>
            <img src="/images/amazon.svg" alt="amazon" />
          </li>
          <li>
            <img src="/images/sony.svg" alt="sony" />
          </li>
          <li>
            <img src="/images/microsoft.svg" alt="microsoft" />
          </li>

          <li>
            <img src="/images/whirlpool.svg" alt="whirlpool" />
          </li>

        </ul>

        <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          <li>
            <img src="/images/google.svg" alt="google" />
          </li>
          <li>
            <img src="/images/ibm.svg" alt="ibm" />
          </li>
          <li>
            <img src="/images/apple.svg" alt="apple" />
          </li>
          <li>
            <img src="/images/amazon.svg" alt="amazon" />
          </li>
          <li>
            <img src="/images/sony.svg" alt="sony" />
          </li>
          <li>
            <img src="/images/microsoft.svg" alt="microsoft" />
          </li>

          <li>
            <img src="/images/whirlpool.svg" alt="whirlpool" />
          </li>

        </ul>
        
      </div>
    </header >
  );
}

export default BrandsSection;

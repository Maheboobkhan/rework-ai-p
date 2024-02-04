import React from "react";

function BrandsSection() {
  return (
    <header
      className="flex flex-col items-center px-5 pt-8 pb-3 text-lg font-medium text-center bg-white text-black text-opacity-90"
      aria-label="Landing Component"
      role="banner"
    >
      <div className="max-md:max-w-full">
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
            <img src="./amazon.svg" alt="Facebook" />
          </li>
          <li>
            <img src="/vector-9.svg" alt="Disney" />
          </li>
          <li>
            <img src="/vector-8.svg" alt="Airbnb" />
          </li>
          <li>
            <img src="./apple.svg" alt="Apple" />
          </li>
          <li>
            <img src="/google.svg" alt="Spark" />
          </li>
          <li>
            <img src="/microsoft.svg" alt="Samsung" />
          </li>
        </ul>
        <ul class="flex items-center justify-center md:justify-start ml-2 [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          <li>
            <img src="./amazon.svg" alt="Facebook" />
          </li>
          <li>
            <img src="/vector-9.svg" alt="Disney" />
          </li>
          <li>
            <img src="/vector-8.svg" alt="Airbnb" />
          </li>
          <li>
            <img src="./apple.svg" alt="Apple" />
          </li>
          <li>
            <img src="/google.svg" alt="Spark" />
          </li>
          <li>
            <img src="/microsoft.svg" alt="Samsung" />
          </li>
        </ul>
      </div>
    </header >
  );
}

export default BrandsSection;

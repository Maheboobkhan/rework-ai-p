import React from 'react'
import MentorShipParagraph from './MentorShipParagraph';

import SwiperCore from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

function ProfileCards() {
  SwiperCore.use([Pagination, Autoplay]);
  return (
    <div className="flex flex-col items-center py-12 bg-slate-50">
      <div className="justify-center p-2.5 mt-7 text-lg leading-7 text-center whitespace-nowrap bg-purple-100 rounded-xl text-indigo-700 text-opacity-50">
        Who will Guide you
      </div>
      <div className="mt-5 text-5xl font-semibold text-center leading-[62px] text-neutral-800 w-[747px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
        Elevate Your Journey with Expert Guidance{" "}
      </div>
      <MentorShipParagraph />
      <div className="px-5 mt-10 w-full">
        <div className="flex gap-5">

          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}

            loop={true}
            modules={[Pagination]}
            className="mySwiper"
            autoplay={{   // Autoplay configuration
              delay: 2500,  // Delay between transitions in milliseconds
              disableOnInteraction: false  // Autoplay will not be disabled after user interactions
            }}

            breakpoints={{
              330: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              360: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              // when window width is >= 640px (sm)
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              // when window width is >= 768px (md)
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1000: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              // Add more breakpoints as needed
            }}
          >
            {/* card-1 */}
            <SwiperSlide>
              <div className="flex flex-col hover:scale-[0.95] hover:cursor-pointer hover:transition-all transition-duration: 500ms transition-all transition-duration">
                <div className="flex flex-col grow p-2.5 pr-2.5 mx-auto w-full rounded-xl shadow-sm bg-zinc-100">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d65de0559fd6ae3cea21b0429ac26548b0c22a2b4d0b9258927445d9a19b0a7a?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d65de0559fd6ae3cea21b0429ac26548b0c22a2b4d0b9258927445d9a19b0a7a?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d65de0559fd6ae3cea21b0429ac26548b0c22a2b4d0b9258927445d9a19b0a7a?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d65de0559fd6ae3cea21b0429ac26548b0c22a2b4d0b9258927445d9a19b0a7a?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d65de0559fd6ae3cea21b0429ac26548b0c22a2b4d0b9258927445d9a19b0a7a?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d65de0559fd6ae3cea21b0429ac26548b0c22a2b4d0b9258927445d9a19b0a7a?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d65de0559fd6ae3cea21b0429ac26548b0c22a2b4d0b9258927445d9a19b0a7a?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d65de0559fd6ae3cea21b0429ac26548b0c22a2b4d0b9258927445d9a19b0a7a?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&"
                    className=""
                  />{" "}
                  <div className="flex gap-5 justify-between px-0.5 mt-2 w-full text-black capitalize leading-[150%]">
                    <div className="text-xl font-bold">Maria Lee</div>
                    <div className="flex gap-1.5 justify-end my-auto text-lg font-medium whitespace-nowrap">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/069a6899ab8cb035f82a8f0b549b65cf26664e0630f79dd19adc2d8156090187?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&"
                        className="my-auto aspect-[1.06] fill-amber-300 w-[18px]"
                      />{" "}
                      <div>4.8</div>
                    </div>
                  </div>{" "}
                  <div className="mt-1.5 text-sm leading-5 capitalize text-black text-opacity-60">
                    Ui/Ux Designer
                  </div>{" "}
                  <div className="mt-3 text-base leading-6 text-neutral-900 text-opacity-90">
                    Specialised in designing and maintaining advanced web
                    applicationsSpecialised in designing and maintaining advanced
                    .Specialised in designing and maintaining advanced web
                    applicationsSpecialised .
                  </div>
                  <div className="flex gap-2.5 pr-20 mt-7 max-md:pr-5">
                    <div className="flex flex-col gap-0.5">
                      <div className="flex gap-0.5">
                        <div className="w-3.5 h-4 bg-orange-600" />{" "}
                        <div className="w-4 h-4 bg-lime-500" />
                      </div>
                      <div className="flex gap-0.5">
                        <div className="w-3.5 h-4 bg-sky-500" />{" "}
                        <div className="w-4 h-4 bg-yellow-500" />
                      </div>
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f847fbf2384ec8ead59d4c39095685258acb17b330635a0dc0ea48651d3d927d?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&"
                      className="my-auto max-w-full aspect-[5.26] fill-neutral-500 w-[113px]"
                    />
                  </div>
                  <div className="flex gap-2 justify-between mt-5">
                    <div className="flex justify-center items-center aspect-[0.94]">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/448b1211900c6af92954f6c13d37ed0c2f2bb92b13e5a0dcb88cc5ca76aea5d7?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/448b1211900c6af92954f6c13d37ed0c2f2bb92b13e5a0dcb88cc5ca76aea5d7?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/448b1211900c6af92954f6c13d37ed0c2f2bb92b13e5a0dcb88cc5ca76aea5d7?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/448b1211900c6af92954f6c13d37ed0c2f2bb92b13e5a0dcb88cc5ca76aea5d7?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/448b1211900c6af92954f6c13d37ed0c2f2bb92b13e5a0dcb88cc5ca76aea5d7?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/448b1211900c6af92954f6c13d37ed0c2f2bb92b13e5a0dcb88cc5ca76aea5d7?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/448b1211900c6af92954f6c13d37ed0c2f2bb92b13e5a0dcb88cc5ca76aea5d7?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/448b1211900c6af92954f6c13d37ed0c2f2bb92b13e5a0dcb88cc5ca76aea5d7?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&"
                        className="rounded-full aspect-[0.94] w-[34px]"
                      />
                    </div>
                    <div className="flex-auto my-auto text-sm font-medium leading-5 capitalize text-black text-opacity-60">
                      200+ students Trained
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* card-2 */}
            <SwiperSlide>
              <div className="flex flex-col ml-5 max-md:ml-0 hover:scale-[0.95] hover:cursor-pointer hover:transition-all transition-duration: 500ms transition-all transition-duration">
                <div className="flex flex-col grow p-2.5 mx-auto w-full rounded-xl shadow-sm bg-zinc-100 max-md:mt-8">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f0b20913786fc551d1d3b91b080a63f861f33714b13538aa7a1810ca69f85492?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0b20913786fc551d1d3b91b080a63f861f33714b13538aa7a1810ca69f85492?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0b20913786fc551d1d3b91b080a63f861f33714b13538aa7a1810ca69f85492?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0b20913786fc551d1d3b91b080a63f861f33714b13538aa7a1810ca69f85492?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0b20913786fc551d1d3b91b080a63f861f33714b13538aa7a1810ca69f85492?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0b20913786fc551d1d3b91b080a63f861f33714b13538aa7a1810ca69f85492?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0b20913786fc551d1d3b91b080a63f861f33714b13538aa7a1810ca69f85492?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0b20913786fc551d1d3b91b080a63f861f33714b13538aa7a1810ca69f85492?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&"
                    className="w-full aspect-[1.69]"
                  />{" "}
                  <div className="flex gap-5 justify-between pr-2 mt-2 w-full text-black capitalize leading-[150%]">
                    <div className="text-xl font-bold">Maria Lee</div>{" "}
                    <div className="flex gap-1.5 justify-end my-auto text-lg font-medium whitespace-nowrap">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/069a6899ab8cb035f82a8f0b549b65cf26664e0630f79dd19adc2d8156090187?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&"
                        className="my-auto aspect-[1.06] fill-amber-300 w-[18px]"
                      />{" "}
                      <div>4.8</div>
                    </div>
                  </div>{" "}
                  <div className="mt-1.5 text-sm leading-5 capitalize text-black text-opacity-60">
                    Ui/Ux Designer
                  </div>{" "}
                  <div className="mt-3 text-base leading-6 text-neutral-900 text-opacity-90">
                    Specialised in designing and maintaining advanced web
                    applicationsSpecialised in designing and maintaining advanced
                    .Specialised in designing and maintaining advanced web
                    applicationsSpecialised .
                  </div>{" "}
                  <div className="flex gap-2.5 pr-20 mt-7 max-md:pr-5">
                    <div className="flex flex-col gap-0.5">
                      <div className="flex gap-0.5">
                        <div className="w-4 h-4 bg-orange-600" />
                        <div className="w-4 h-4 bg-lime-500" />
                      </div>
                      <div className="flex gap-0.5">
                        <div className="w-4 h-4 bg-sky-500" />
                        <div className="w-4 h-4 bg-yellow-500" />
                      </div>
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f847fbf2384ec8ead59d4c39095685258acb17b330635a0dc0ea48651d3d927d?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&"
                      className="my-auto max-w-full aspect-[5.26] fill-neutral-500 w-[113px]"
                    />
                  </div>
                  <div className="flex gap-2 justify-between mt-5">
                    <div className="flex justify-center items-center aspect-square">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/482d52130e99e834cbf035844e64281d151517ef3d1423503e77b3718702fe0e?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/482d52130e99e834cbf035844e64281d151517ef3d1423503e77b3718702fe0e?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/482d52130e99e834cbf035844e64281d151517ef3d1423503e77b3718702fe0e?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/482d52130e99e834cbf035844e64281d151517ef3d1423503e77b3718702fe0e?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/482d52130e99e834cbf035844e64281d151517ef3d1423503e77b3718702fe0e?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/482d52130e99e834cbf035844e64281d151517ef3d1423503e77b3718702fe0e?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/482d52130e99e834cbf035844e64281d151517ef3d1423503e77b3718702fe0e?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/482d52130e99e834cbf035844e64281d151517ef3d1423503e77b3718702fe0e?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&"
                        className="w-9 rounded-full aspect-square"
                      />
                    </div>{" "}
                    <div className="flex-auto my-auto text-sm font-medium leading-5 capitalize text-black text-opacity-60">
                      200+ students Trained
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* card-3 */}
            <SwiperSlide>
              <div className="flex flex-col ml-5 max-md:ml-0 hover:scale-[0.95] hover:cursor-pointer hover:transition-all transition-duration: 500ms transition-all transition-duration">
                <div className="flex flex-col grow p-2.5 mx-auto w-full rounded-xl shadow-sm bg-zinc-100 max-md:mt-8">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c8204e23fa0053e15aa3cde4aa5a837afd1ba44a250adcd14b4812a06e7f52ed?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c8204e23fa0053e15aa3cde4aa5a837afd1ba44a250adcd14b4812a06e7f52ed?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c8204e23fa0053e15aa3cde4aa5a837afd1ba44a250adcd14b4812a06e7f52ed?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c8204e23fa0053e15aa3cde4aa5a837afd1ba44a250adcd14b4812a06e7f52ed?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c8204e23fa0053e15aa3cde4aa5a837afd1ba44a250adcd14b4812a06e7f52ed?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c8204e23fa0053e15aa3cde4aa5a837afd1ba44a250adcd14b4812a06e7f52ed?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c8204e23fa0053e15aa3cde4aa5a837afd1ba44a250adcd14b4812a06e7f52ed?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c8204e23fa0053e15aa3cde4aa5a837afd1ba44a250adcd14b4812a06e7f52ed?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&"
                    className="w-full aspect-[1.69]"
                  />{" "}
                  <div className="flex gap-5 justify-between pr-2 mt-2 w-full text-black capitalize leading-[150%]">
                    <div className="text-xl font-bold">Maria Lee</div>{" "}
                    <div className="flex gap-1.5 justify-end my-auto text-lg font-medium whitespace-nowrap">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/069a6899ab8cb035f82a8f0b549b65cf26664e0630f79dd19adc2d8156090187?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&"
                        className="my-auto aspect-[1.06] fill-amber-300 w-[18px]"
                      />{" "}
                      <div>4.8</div>
                    </div>
                  </div>{" "}
                  <div className="mt-1.5 text-sm leading-5 capitalize text-black text-opacity-60">
                    Ui/Ux Designer
                  </div>{" "}
                  <div className="mt-3 text-base leading-6 text-neutral-900 text-opacity-90">
                    Specialised in designing and maintaining advanced web
                    applicationsSpecialised in designing and maintaining advanced
                    .Specialised in designing and maintaining advanced web
                    applicationsSpecialised .
                  </div>
                  <div className="flex gap-2.5 mt-5">
                    <div className="flex flex-col">
                      <div className="flex gap-0.5">
                        <div className="w-4 h-4 bg-orange-600" />
                        <div className="w-4 h-4 bg-lime-500" />
                      </div>
                      <div className="flex gap-0.5">
                        <div className="w-4 h-4 bg-sky-500" />
                        <div className="w-4 h-4 bg-yellow-500" />
                      </div>
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f847fbf2384ec8ead59d4c39095685258acb17b330635a0dc0ea48651d3d927d?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&"
                      className="my-auto max-w-full aspect-[5.26] fill-neutral-500 w-[113px]"
                    />
                  </div>
                  <div className="flex gap-2 justify-between mt-5">
                    <div className="flex justify-center items-center aspect-square">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/482d52130e99e834cbf035844e64281d151517ef3d1423503e77b3718702fe0e?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/482d52130e99e834cbf035844e64281d151517ef3d1423503e77b3718702fe0e?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/482d52130e99e834cbf035844e64281d151517ef3d1423503e77b3718702fe0e?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/482d52130e99e834cbf035844e64281d151517ef3d1423503e77b3718702fe0e?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/482d52130e99e834cbf035844e64281d151517ef3d1423503e77b3718702fe0e?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/482d52130e99e834cbf035844e64281d151517ef3d1423503e77b3718702fe0e?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/482d52130e99e834cbf035844e64281d151517ef3d1423503e77b3718702fe0e?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/482d52130e99e834cbf035844e64281d151517ef3d1423503e77b3718702fe0e?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&"
                        className="w-9 rounded-full aspect-square"
                      />
                    </div>{" "}
                    <div className="flex-auto my-auto text-sm font-medium leading-5 capitalize text-black text-opacity-60">
                      200+ students Trained
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* card-4 */}
            <SwiperSlide>
              <div className="flex flex-col ml-5 max-md:ml-0 hover:scale-[0.95] hover:cursor-pointer hover:transition-all transition-duration: 500ms transition-all transition-duration">
                <div className="flex flex-col grow py-2.5 pl-2.5 mx-auto w-full rounded-xl shadow-sm bg-zinc-100 max-md:mt-8">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/15f1468285236a7b7aeb14c3d3bc61a8b0af1d4d9644d1b54bf4fa0e085a1f14?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/15f1468285236a7b7aeb14c3d3bc61a8b0af1d4d9644d1b54bf4fa0e085a1f14?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/15f1468285236a7b7aeb14c3d3bc61a8b0af1d4d9644d1b54bf4fa0e085a1f14?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/15f1468285236a7b7aeb14c3d3bc61a8b0af1d4d9644d1b54bf4fa0e085a1f14?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/15f1468285236a7b7aeb14c3d3bc61a8b0af1d4d9644d1b54bf4fa0e085a1f14?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/15f1468285236a7b7aeb14c3d3bc61a8b0af1d4d9644d1b54bf4fa0e085a1f14?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/15f1468285236a7b7aeb14c3d3bc61a8b0af1d4d9644d1b54bf4fa0e085a1f14?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/15f1468285236a7b7aeb14c3d3bc61a8b0af1d4d9644d1b54bf4fa0e085a1f14?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&"
                    className="w-full aspect-[1.64]"
                  />{" "}
                  <div className="flex gap-5 justify-between pr-1.5 mt-2 w-full text-black capitalize leading-[150%]">
                    <div className="text-xl font-bold">Maria Lee</div>{" "}
                    <div className="flex gap-1.5 justify-end my-auto text-lg font-medium whitespace-nowrap">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/069a6899ab8cb035f82a8f0b549b65cf26664e0630f79dd19adc2d8156090187?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&"
                        className="my-auto aspect-[1.06] fill-amber-300 w-[18px]"
                      />{" "}
                      <div>4.8</div>
                    </div>
                  </div>{" "}
                  <div className="mt-1.5 text-sm leading-5 capitalize text-black text-opacity-60">
                    Ui/Ux Designer
                  </div>{" "}
                  <div className="mt-3 text-base leading-6 text-neutral-900 text-opacity-90 max-md:mr-1.5">
                    Specialised in designing and maintaining advanced web
                    applicationsSpecialised in designing and maintaining advanced
                    .Specialised in designing and maintaining advanced web
                    applicationsSpecialised .
                  </div>
                  <div className="flex gap-2.5 mt-5">
                    <div className="flex flex-col">
                      <div className="flex gap-0.5">
                        <div className="w-4 h-4 bg-orange-600" />
                        <div className="w-4 h-4 bg-lime-500" />
                      </div>
                      <div className="flex gap-0.5">
                        <div className="w-4 h-4 bg-sky-500" />
                        <div className="w-4 h-4 bg-yellow-500" />
                      </div>
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f847fbf2384ec8ead59d4c39095685258acb17b330635a0dc0ea48651d3d927d?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&"
                      className="my-auto max-w-full aspect-[5.26] fill-neutral-500 w-[113px]"
                    />
                  </div>
                  <div className="flex gap-2 justify-between mt-5">
                    <div className="flex justify-center items-center aspect-square">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/482d52130e99e834cbf035844e64281d151517ef3d1423503e77b3718702fe0e?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/482d52130e99e834cbf035844e64281d151517ef3d1423503e77b3718702fe0e?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/482d52130e99e834cbf035844e64281d151517ef3d1423503e77b3718702fe0e?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/482d52130e99e834cbf035844e64281d151517ef3d1423503e77b3718702fe0e?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/482d52130e99e834cbf035844e64281d151517ef3d1423503e77b3718702fe0e?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/482d52130e99e834cbf035844e64281d151517ef3d1423503e77b3718702fe0e?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/482d52130e99e834cbf035844e64281d151517ef3d1423503e77b3718702fe0e?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/482d52130e99e834cbf035844e64281d151517ef3d1423503e77b3718702fe0e?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&"
                        className="w-9 rounded-full aspect-square"
                      />
                    </div>{" "}
                    <div className="flex-auto my-auto text-sm font-medium leading-5 capitalize text-black text-opacity-60">
                      200+ students Trained
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="justify-center px-12 py-5 mt-12 text-lg font-bold leading-7 text-white capitalize whitespace-nowrap bg-violet-800 hover:text-violet-800 hover:bg-violet-200 rounded-xl max-md:px-5 max-md:mt-10 cursor-pointer transition-all transition-duration: 400ms;">
        view all
      </div>
    </div>
  );
}


export default ProfileCards;
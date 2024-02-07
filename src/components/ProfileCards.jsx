import React from 'react'
import MentorShipParagraph from './MentorShipParagraph';

import SwiperCore from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Scrollbar, Autoplay } from 'swiper/modules';

function ProfileCards() {
  SwiperCore.use([Scrollbar, Autoplay]);
  return (
    <div className="flex flex-col items-center py-12 bg-slate-50">
      <div className="font-Archivo-400 justify-center p-2.5 mt-7 text-lg leading-7 text-center whitespace-nowrap bg-purple-100 rounded-xl text-indigo-700 text-opacity-50">
        Who will Guide you
      </div>
      <div className="mt-5 text-5xl font-semibold font-Archivo-600 text-center leading-[62px] text-neutral-800 w-[747px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
        Elevate Your Journey with Expert Guidance{" "}
      </div>
      <MentorShipParagraph />
      <div className="px-5 mt-10 w-full">
        <div className="flex gap-5">

          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            // pagination={{
            //   clickable: true,
            // }}

            loop={true}
            modules={[Scrollbar]}
            className="mySwiper"
            autoplay={{   // Autoplay configuration
              delay: 2500,  // Delay between transitions in milliseconds
              disableOnInteraction: false  // Autoplay will not be disabled after user interactions
            }}

            breakpoints={{
              320: {
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
                    src="/images/profile1.svg"
                    className="bg-[#CE08FF] rounded-tl-xl"
                  />{" "}
                  <div className="flex gap-5 justify-between px-0.5 mt-2 w-full text-black capitalize leading-[150%]">
                    <div className="text-xl font-bold font-Lato">Maria Lee</div>

                    <div className="flex gap-1.5 justify-end my-auto text-lg font-Roboto-900 font-medium whitespace-nowrap">
                      <img
                        loading="lazy"
                        src="/images/rating.svg"
                        className="my-auto aspect-[1.06] w-[18px]"
                      />{" "}
                      <div>4.8</div>
                    </div>
                  </div>{" "}
                  <div className="mt-1.5 text-sm font-Roboto leading-5 capitalize text-black text-opacity-60">
                    Ui/Ux Designer
                  </div>{" "}
                  <div className="font-Roboto mt-3 text-base leading-6 text-neutral-900 text-opacity-90">
                    Specialised in designing and maintaining advanced web
                    applicationsSpecialised in designing and maintaining advanced
                    .Specialised in designing and maintaining advanced web
                    applicationsSpecialised .
                  </div>
                  <div className="flex mt-7 justify-start">
                    <img
                      loading="lazy"
                      src="/images/microsoft.svg"
                      className=" max-w-full fill-neutral-500 w-[200px]"
                    />
                  </div>
                  <div className="flex gap-2 justify-between mt-5">
                    <div className="flex justify-center items-center aspect-[0.94]">
                      <img
                        loading="lazy"
                        src="/images/convocation.svg"
                        className="rounded-full aspect-[0.94] w-[34px]"
                      />
                    </div>
                    <div className="font-Roboto flex-auto my-auto text-sm font-medium leading-5 capitalize text-black text-opacity-60">
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
                    srcSet="/images/profile2.svg"
                    className="w-full aspect-[1.69] bg-amber-300 rounded-tl-xl"
                  />{" "}
                  <div className="flex gap-5 justify-between pr-2 mt-2 w-full text-black capitalize leading-[150%]">
                    <div className="text-xl font-bold font-Lato">Maria Lee</div>{" "}
                    <div className="flex gap-1.5 justify-end my-auto text-lg font-Roboto-900 font-medium whitespace-nowrap">
                      <img
                        loading="lazy"
                        src="/images/rating.svg"
                        className="my-auto aspect-[1.06] fill-amber-300 w-[18px]"
                      />{" "}
                      <div>4.8</div>
                    </div>
                  </div>{" "}
                  <div className="font-Roboto mt-1.5 text-sm leading-5 capitalize text-black text-opacity-60">
                    Ui/Ux Designer
                  </div>{" "}
                  <div className="font-Roboto mt-3 text-base leading-6 text-neutral-900 text-opacity-90">
                    Specialised in designing and maintaining advanced web
                    applicationsSpecialised in designing and maintaining advanced
                    .Specialised in designing and maintaining advanced web
                    applicationsSpecialised .
                  </div>{" "}
                  <div className="flex mt-7 justify-start">
                    <img
                      loading="lazy"
                      src="/images/microsoft.svg"
                      className=" max-w-full fill-neutral-500 w-[200px]"
                    />
                  </div>
                  <div className="flex gap-2 justify-between mt-5">
                    <div className="flex justify-center items-center aspect-square">
                      <img
                        loading="lazy"
                        src="/images/convocation.svg"
                        className="w-9 rounded-full aspect-square"
                      />
                    </div>{" "}
                    <div className="font-Roboto flex-auto my-auto text-sm font-medium leading-5 capitalize text-black text-opacity-60">
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
                    src="/images/profile3.svg"
                    className="w-full aspect-[1.69] rounded-tl-xl bg-[#E3E3E3]"
                  />{" "}
                  <div className="flex gap-5 justify-between pr-2 mt-2 w-full text-black capitalize leading-[150%]">
                    <div className="text-xl font-bold font-Lato">Maria Lee</div>{" "}
                    <div className="flex gap-1.5 justify-end my-auto text-lg font-Roboto-900 font-medium whitespace-nowrap">
                      <img
                        loading="lazy"
                        src="/images/rating.svg"
                        className="my-auto aspect-[1.06] fill-amber-300 w-[18px]"
                      />{" "}
                      <div>4.8</div>
                    </div>
                  </div>{" "}
                  <div className="font-Roboto mt-1.5 text-sm leading-5 capitalize text-black text-opacity-60">
                    Ui/Ux Designer
                  </div>{" "}
                  <div className="font-Roboto mt-3 text-base leading-6 text-neutral-900 text-opacity-90">
                    Specialised in designing and maintaining advanced web
                    applicationsSpecialised in designing and maintaining advanced
                    .Specialised in designing and maintaining advanced web
                    applicationsSpecialised .
                  </div>
                  <div className="flex mt-7 justify-start">
                    <img
                      loading="lazy"
                      src="/images/microsoft.svg"
                      className=" max-w-full fill-neutral-500 w-[200px]"
                    />
                  </div>
                  <div className="flex gap-2 justify-between mt-5">
                    <div className="flex justify-center items-center aspect-square">
                      <img
                        loading="lazy"
                        src="/images/convocation.svg"
                        className="w-9 rounded-full aspect-square"
                      />
                    </div>{" "}
                    <div className="font-Roboto flex-auto my-auto text-sm font-medium leading-5 capitalize text-black text-opacity-60">
                      200+ students Trained
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* card-4 */}
            <SwiperSlide>
              <div className="flex flex-col hover:scale-[0.95] hover:cursor-pointer hover:transition-all transition-duration: 500ms transition-all transition-duration">
                <div className="flex flex-col grow p-2.5 pr-2.5 mx-auto w-full rounded-xl shadow-sm bg-zinc-100">
                  <img
                    loading="lazy"
                    src="/images/profile1.svg"
                    className="bg-[#CE08FF] rounded-tl-xl"
                  />{" "}
                  <div className="flex gap-5 justify-between px-0.5 mt-2 w-full text-black capitalize leading-[150%]">
                    <div className="text-xl font-bold font-Lato">Maria Lee</div>

                    <div className="flex gap-1.5 justify-end my-auto text-lg font-Roboto-900 font-medium whitespace-nowrap">
                      <img
                        loading="lazy"
                        src="/images/rating.svg"
                        className="my-auto aspect-[1.06] w-[18px]"
                      />{" "}
                      <div>4.8</div>
                    </div>
                  </div>{" "}
                  <div className="font-Roboto mt-1.5 text-sm leading-5 capitalize text-black text-opacity-60">
                    Ui/Ux Designer
                  </div>{" "}
                  <div className="font-Roboto mt-3 text-base leading-6 text-neutral-900 text-opacity-90">
                    Specialised in designing and maintaining advanced web
                    applicationsSpecialised in designing and maintaining advanced
                    .Specialised in designing and maintaining advanced web
                    applicationsSpecialised .
                  </div>
                  <div className="flex mt-7 justify-start">
                    <img
                      loading="lazy"
                      src="/images/microsoft.svg"
                      className=" max-w-full fill-neutral-500 w-[200px]"
                    />
                  </div>
                  <div className="flex gap-2 justify-between mt-5">
                    <div className="flex justify-center items-center aspect-[0.94]">
                      <img
                        loading="lazy"
                        src="/images/convocation.svg"
                        className="rounded-full aspect-[0.94] w-[34px]"
                      />
                    </div>
                    <div className="font-Roboto flex-auto my-auto text-sm font-medium leading-5 capitalize text-black text-opacity-60">
                      200+ students Trained
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          
        </div>
        <Swiper className="mySwiper w-40"
            slidesPerView={3}
            loop={true}
            scrollbar={{
              hide: false,
              dragSize: 20,
            }}
            modules={[Scrollbar]}
            autoplay={{   // Autoplay configuration
              delay: 2500,  // Delay between transitions in milliseconds
              disableOnInteraction: false  // Autoplay will not be disabled after user interactions
            }}>
            <SwiperSlide><p className="text-[transparent]">.</p></SwiperSlide>
            <SwiperSlide><p className="text-[transparent]">.</p></SwiperSlide>
            <SwiperSlide><p className="text-[transparent]">.</p></SwiperSlide>
            <SwiperSlide><p className="text-[transparent]">.</p></SwiperSlide>
            <SwiperSlide><p className="text-[transparent]">.</p></SwiperSlide>
          </Swiper>
      </div>
      <div className="justify-center px-10 py-2.5 mt-12 text-lg font-bold leading-7 text-white capitalize whitespace-nowrap bg-violet-800 hover:text-violet-800 hover:bg-violet-200 rounded-xl max-md:px-5 max-md:mt-10 cursor-pointer transition-all transition-duration: 400ms;">
        view all
      </div>
    </div>
  );
}


export default ProfileCards;
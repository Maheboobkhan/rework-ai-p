import React from "react";
import SwiperCore from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Scrollbar, Autoplay } from 'swiper/modules';

function StepsCards() {
  SwiperCore.use([Scrollbar, Autoplay]);
  return (
    <div className="flex flex-col items-center px-16 py-11 bg-white max-md:px-5">
      <div className="font-Archivo-400 justify-center p-2.5 text-lg leading-7 text-center whitespace-nowrap bg-purple-100 rounded-xl text-[#3222F0] text-opacity-50">
        How it works?
      </div>
      <div className="font-Archivo-600 mt-7 text-5xl font-semibold text-center text-black leading-[62.4px] max-md:max-w-full max-md:text-4xl">
        Get Placed in 4 Steps
      </div>
      <div className="font-Archivo-400 mt-3.5 text-xl leading-6 text-center text-black max-md:max-w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod
        orci vel quam sagittis
        <br />
      </div>


      <div className="hidden sm:hidden md:block w-full mt-10">
        <div className="flex gap-5">
          <div className="bg-violet-800 px-4 w-[80%] min-h-[350px] pt-[70px] pb-[70px] rounded-xl hover:scale-[0.95] hover:cursor-pointer hover:transition-all transition-duration: 500ms transition-all transition-duration">
            <img loading="lazy" src="\images\step1.svg" className="w-[84px] h-[80px] mx-auto" />
            <h1 className="font-Archivo-700 text-white text-[27px] mt-10 w-fit mx-auto font-medium">Application</h1>
            <p className="font-Poppins-400 text-white text-center text-[18px] mt-6">Fill out a brief application form to help us understand your
              background and goals.</p>
          </div>
          <div className="bg-violet-100 min-h-[350px] w-[80%] pt-[70px] pb-[70px] px-4 rounded-xl hover:scale-[0.95] hover:cursor-pointer hover:transition-all transition-duration: 500ms transition-all transition-duration">
            <img loading="lazy" src="\images\step2.svg" className="w-[84px] h-[80px] mx-auto" />
            <h1 className="font-Archivo-700 text-stone-950 text-[27px] w-fit mt-10 mx-auto font-medium">Matching</h1>
            <p className="font-Poppins-400 text-stone-950 text-center text-[18px] mt-6"> Our algorithm matches you with the ideal mentor based on your profile and aspirations.</p>
          </div>
          <div className="bg-violet-800 min-h-[350px] w-[80%] pt-[70px] pb-[70px] px-4 rounded-xl hover:scale-[0.95] hover:cursor-pointer hover:transition-all transition-duration: 500ms transition-all transition-duration">
            <img loading="lazy" src="\images\step3.svg" className="w-[84px] h-[80px] mx-auto" />
            <h1 className="font-Archivo-700 text-white text-[27px] w-fit mt-10 mx-auto font-medium">Sessions</h1>
            <p className="font-Poppins-400 text-white text-center text-[18px] mt-6"> Enjoy regular one-on-one sessions with your mentor to receive guidance, feedback, and support.</p>
          </div>
          <div className="bg-violet-100 min-h-[350px] w-[80%] pt-[70px] pb-[70px] px-5 rounded-xl hover:scale-[0.95] hover:cursor-pointer hover:transition-all transition-duration: 500ms transition-all transition-duration">
            <img loading="lazy" src="\images\step4.svg" className="w-[84px] h-[80px] mx-auto" />
            <h1 className="font-Archivo-700 text-stone-950 text-[27px] text-center mt-10 mx-auto w-fit font-medium">Progress Tracking</h1>
            <p className="font-Poppins-400 text-stone-950 text-center text-[18px] mt-6">Track your progress and celebrate your milestones with the help of your mentor.
            </p>
          </div>
        </div>
      </div>
      <div className="font-Poppins-500 hidden sm:hidden md:block justify-center px-7 py-2.5 mt-11 text-lg font-medium text-center text-violet-800 hover:text-neutral-100 hover:bg-violet-800 whitespace-nowrap border-2 border-solid shadow-2xl bg-neutral-100 border-[color:var(--Primary-100,#5C27C0)] max-md:px-5 max-md:mt-10 cursor-pointer transition-all transition-duration: 400ms;">
        Get Started
      </div>







      <div className="md:hidden sm:block w-full mt-10">
        <div className="flex">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            // pagination={{
            //   clickable: true,
            // }}

            loop={true}
            modules={[Scrollbar]}
            className="mySwiper"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
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



            <SwiperSlide>

              <div className="bg-violet-800 flex flex-col items-center px-4 pt-[90px] pb-[145px] rounded-xl hover:scale-[0.95] hover:cursor-pointer hover:transition-all transition-duration: 500ms transition-all transition-duration">
                <img loading="lazy" src="\images\step1.svg" className="w-[84px]" />
                <h1 className="text-white text-[27px] mt-10 font-medium mx-auto">Application</h1>
                <p className="text-white text-center text-[18px] mt-6">Fill out a brief application form to help us understand your
                  background and goals.</p>
              </div>

            </SwiperSlide>


            <SwiperSlide>
              <div className="bg-violet-100 flex flex-col items-center px-4 pt-[90px] pb-[120px] rounded-xl hover:scale-[0.95] hover:cursor-pointer hover:transition-all transition-duration: 500ms transition-all transition-duration">
                <img loading="lazy" src="\images\step2.svg" className="w-[84px]" />
                <h1 className="text-stone-950 text-[27px] mt-10 font-medium mx-auto">Matching</h1>
                <p className="text-stone-950 text-center text-[18px] mt-6"> Our algorithm matches you with the ideal mentor based on your profile and aspirations.</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-violet-800 flex flex-col items-center px-4 pt-[90px] pb-[120px] rounded-xl hover:scale-[0.95] hover:cursor-pointer hover:transition-all transition-duration: 500ms transition-all transition-duration">
                <img loading="lazy" src="\images\step3.svg" className="w-[84px]" />
                <h1 className="text-white text-[27px] mt-10 font-medium mx-auto">Sessions</h1>
                <p className="text-white text-center text-[18px] mt-6"> Enjoy regular one-on-one sessions with your mentor to receive guidance, feedback, and support.</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-violet-100 flex flex-col items-center px-4 pt-[90px] pb-[145px] rounded-xl hover:scale-[0.95] hover:cursor-pointer hover:transition-all transition-duration: 500ms transition-all transition-duration">
                <img loading="lazy" src="\images\step4.svg" className="w-[84px]" />
                <h1 className="text-stone-950 text-[27px] mt-10 font-medium mx-auto">Progress Tracking</h1>
                <p className="text-stone-950 text-center text-[18px] mt-6">Track your progress and celebrate your milestones with the help of your mentor.
                </p>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>

        <Swiper className="md:hidden sm:block mySwiper w-40"
          slidesPerView={3}
          loop={true}
          scrollbar={{
            hide: false,
            dragSize: 20,
          }}
          modules={[Scrollbar]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}>
          <SwiperSlide><p className="text-[transparent]">.</p></SwiperSlide>
          <SwiperSlide><p className="text-[transparent]">.</p></SwiperSlide>
          <SwiperSlide><p className="text-[transparent]">.</p></SwiperSlide>
          <SwiperSlide><p className="text-[transparent]">.</p></SwiperSlide>
          <SwiperSlide><p className="text-[transparent]">.</p></SwiperSlide>
        </Swiper>
      </div>
      <div className="md:hidden sm:hidden justify-center px-7 py-2.5 mt-11 text-lg font-medium text-center text-violet-800 hover:text-neutral-100 hover:bg-violet-800 whitespace-nowrap border-2 border-solid shadow-2xl bg-neutral-100 border-[color:var(--Primary-100,#5C27C0)] max-md:px-5 max-md:mt-10 cursor-pointer transition-all transition-duration: 400ms;">
        Get Started
      </div>
    </div>
  );
}

export default StepsCards;

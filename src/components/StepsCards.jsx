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
      <div className="justify-center p-2.5 text-lg leading-7 text-center whitespace-nowrap bg-purple-100 rounded-xl text-indigo-700 text-opacity-50">
        How it works?
      </div>
      <div className="mt-7 text-5xl font-semibold text-center text-black leading-[62.4px] max-md:max-w-full max-md:text-4xl">
        Get Placed in 4 Steps
      </div>
      <div className="mt-3.5 text-xl leading-6 text-center text-black max-md:max-w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod
        orci vel quam sagittis
        <br />
      </div>


      <div className="hidden sm:hidden md:block w-full mt-10">
        <div className="flex gap-5">
          <div className="bg-violet-800 flex flex-col items-center px-4 pt-[90px] pb-[145px] rounded-xl hover:scale-[0.95] hover:cursor-pointer hover:transition-all transition-duration: 500ms transition-all transition-duration">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8b95cb710c43ff3261632ab4629f27624133d6c1deb262979389c0b26218584?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&" className="w-[84px]" />
            <h1 className="text-white text-[27px] mt-10 mx-auto">Application</h1>
            <p className="text-white text-center text-[18px] mt-6">Fill out a brief application form to help us understand your
              background and goals.</p>
          </div>
          <div className="bg-violet-100 flex flex-col items-center px-4 pt-[90px] pb-[120px] rounded-xl hover:scale-[0.95] hover:cursor-pointer hover:transition-all transition-duration: 500ms transition-all transition-duration">
            <img loading="lazy" src="\images\step2.svg" className="w-[84px]" />
            <h1 className="text-stone-950 text-[27px] mt-10 mx-auto">Matching</h1>
            <p className="text-stone-950 text-center text-[18px] mt-6"> Our algorithm matches you with the ideal mentor based on your profile and aspirations.</p>
          </div>
          <div className="bg-violet-800 flex flex-col items-center px-4 pt-[90px] pb-[120px] rounded-xl hover:scale-[0.95] hover:cursor-pointer hover:transition-all transition-duration: 500ms transition-all transition-duration">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8b95cb710c43ff3261632ab4629f27624133d6c1deb262979389c0b26218584?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&" className="w-[84px]" />
            <h1 className="text-white text-[27px] mt-10 mx-auto">Sessions</h1>
            <p className="text-white text-center text-[18px] mt-6"> Enjoy regular one-on-one sessions with your mentor to receive guidance, feedback, and support.</p>
          </div>
          <div className="bg-violet-100 flex flex-col items-center px-4 pt-[90px] pb-[145px] rounded-xl hover:scale-[0.95] hover:cursor-pointer hover:transition-all transition-duration: 500ms transition-all transition-duration">
            <img loading="lazy" src="\images\step4.svg" className="w-[84px]" />
            <h1 className="text-stone-950 text-[27px] mt-10 mx-auto">Progress Tracking</h1>
            <p className="text-stone-950 text-center text-[18px] mt-6">Track your progress and celebrate your milestones with the help of your mentor.
            </p>
          </div>
        </div>
      </div>
      <div className="hidden sm:hidden md:block justify-center px-7 py-2.5 mt-11 text-lg font-medium text-center hover:text-violet-800 text-neutral-100 bg-violet-800 whitespace-nowrap rounded-xl hover:border-2 hover:border-solid shadow-2xl hover:bg-neutral-100 hover:border-[color:var(--Primary-100,#5C27C0)] max-md:px-5 max-md:mt-10 cursor-pointer transition-all transition-duration: 400ms;">
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
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8b95cb710c43ff3261632ab4629f27624133d6c1deb262979389c0b26218584?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&" className="w-[84px]" />
                <h1 className="text-white text-[27px] mt-10 mx-auto">Application</h1>
                <p className="text-white text-center text-[18px] mt-6">Fill out a brief application form to help us understand your
                  background and goals.</p>
              </div>

            </SwiperSlide>


            <SwiperSlide>
              <div className="bg-violet-100 flex flex-col items-center px-4 pt-[90px] pb-[120px] rounded-xl hover:scale-[0.95] hover:cursor-pointer hover:transition-all transition-duration: 500ms transition-all transition-duration">
                <img loading="lazy" src="\images\step2.svg" className="w-[84px]" />
                <h1 className="text-stone-950 text-[27px] mt-10 mx-auto">Matching</h1>
                <p className="text-stone-950 text-center text-[18px] mt-6"> Our algorithm matches you with the ideal mentor based on your profile and aspirations.</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-violet-800 flex flex-col items-center px-4 pt-[90px] pb-[120px] rounded-xl hover:scale-[0.95] hover:cursor-pointer hover:transition-all transition-duration: 500ms transition-all transition-duration">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8b95cb710c43ff3261632ab4629f27624133d6c1deb262979389c0b26218584?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&" className="w-[84px]" />
                <h1 className="text-white text-[27px] mt-10 mx-auto">Sessions</h1>
                <p className="text-white text-center text-[18px] mt-6"> Enjoy regular one-on-one sessions with your mentor to receive guidance, feedback, and support.</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-violet-100 flex flex-col items-center px-4 pt-[90px] pb-[145px] rounded-xl hover:scale-[0.95] hover:cursor-pointer hover:transition-all transition-duration: 500ms transition-all transition-duration">
                <img loading="lazy" src="\images\step4.svg" className="w-[84px]" />
                <h1 className="text-stone-950 text-[27px] mt-10 mx-auto">Progress Tracking</h1>
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
      <div className="md:hidden sm:hidden justify-center px-7 py-2.5 mt-11 text-lg font-medium text-center hover:text-violet-800 text-neutral-100 bg-violet-800 whitespace-nowrap rounded-xl hover:border-2 hover:border-solid shadow-2xl hover:bg-neutral-100 hover:border-[color:var(--Primary-100,#5C27C0)] max-md:px-5 max-md:mt-10 cursor-pointer transition-all transition-duration: 400ms;">
        Get Started
      </div>
    </div>
  );
}

export default StepsCards;

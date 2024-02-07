import React from "react";
import MentorShipParagraph from "./MentorShipParagraph";

import SwiperCore from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

// import required modules
import { Autoplay, Scrollbar } from 'swiper/modules';

function MentorshipCard() {

  SwiperCore.use([Scrollbar, Autoplay]);
  return (
    <>
      <div>
        <p className="text-indigo-700 bg-purple-100 rounded-[10px] px-2 py-3 w-fit m-auto mt-12 font-Archivo-400">What We Offer</p>
        <h1 className="font-bold font-Archivo-600 text-[35px] w-fit m-auto mt-2 text-center">We offer the best Mentorship</h1>
        <MentorShipParagraph />

        <div className="mt-5 mb-5">

          <Swiper
            slidesPerView={3}
            spaceBetween={30}


            loop={true}
            // scrollbar={{
            //   hide: false,
            //   // dragSize: 20,
            //   snapOnRelease: true,
            // }}
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
                spaceBetween: 100,
              },
              // when window width is >= 640px (sm)
              640: {
                slidesPerView: 1,
                spaceBetween: 100,
              },
              // when window width is >= 768px (md)
              768: {
                slidesPerView: 2,
                spaceBetween: 100,
              },
              1000: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1550: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              // Add more breakpoints as needed
            }}
          >
            {/* card-1 */}
            <SwiperSlide>
              <div className="m-[20px] bg-purple-50 rounded-[15px] py-5 px-3 text-center hover:scale-[0.95] hover:cursor-pointer hover:transition-all transition-duration: 500ms transition-all transition-duration">
                <img
                  loading="lazy"
                  srcSet="/images/ui-ux.svg"
                  className="w-[100px] m-auto"
                />
                <h3 className="text-slate-700 font-semibold w-fit m-auto mt-5 font-Saira">UI UX</h3>
                <p className="font-light text-center mt-2 font-Archivo-300">Generate a vibrant and modern UI/UX-themed image for a card
                  promoting a mentorship program. Include elements that convey
                  collaboration, creativity, and innovation. Use a clean and
                  professional design with a color palette that aligns with
                  contemporary UI/UX aesGenerate a vibrant and modern UI/UX-themed
                  image for a card promoting a mentorship program.</p>
                <button className="text-blue-500 bg-blue-500 bg-opacity-20 border-none py-3 px-3 rounded-[10px] mt-[30px] hover:text-white hover:bg-opacity-50 font-Lato">Learn more</button>
              </div>
            </SwiperSlide>

            {/* card-2 */}
            <SwiperSlide>
              <div className="m-[20px] bg-purple-50 rounded-[15px] py-5 px-3 text-center hover:scale-[0.95] hover:cursor-pointer hover:transition-all transition-duration: 500ms transition-all transition-duration">
                <img
                  loading="lazy"
                  srcSet="/images/social-media.svg"
                  className="w-[100px] m-auto"
                />
                <h3 className="text-slate-700 font-semibold w-fit m-auto mt-5 font-Saira">Digital Marketing</h3>
                <p className="font-light text-center mt-2 font-Archivo-300">Generate a vibrant and modern UI/UX-themed image for a card
                  promoting a mentorship program. Include elements that convey
                  collaboration, creativity, and innovation. Use a clean and
                  professional design with a color palette that aligns with
                  contemporary UI/UX aesGenerate a vibrant and modern UI/UX-themed
                  image for a card promoting a mentorship program.</p>
                <button className="text-blue-500 bg-blue-500 bg-opacity-20 border-none py-3 px-3 rounded-[10px] mt-5 hover:text-white hover:bg-opacity-50 font-Lato">Learn more</button>
              </div>
            </SwiperSlide>

            {/* card-3 */}
            <SwiperSlide>
              <div className="m-[20px] bg-purple-50 rounded-[15px] py-5 px-3 text-center hover:scale-[0.95] hover:cursor-pointer hover:transition-all transition-duration: 500ms transition-all transition-duration">
                <img
                  loading="lazy"
                  srcSet="/images/nodejs.svg"
                  className="w-[100px] m-auto"
                />
                <h3 className="text-slate-700 font-semibold w-fit m-auto mt-5 font-Saira">Java script</h3>
                <p className="font-light text-center mt-2 font-Archivo-300">Generate a vibrant and modern UI/UX-themed image for a card
                  promoting a mentorship program. Include elements that convey
                  collaboration, creativity, and innovation. Use a clean and
                  professional design with a color palette that aligns with
                  contemporary UI/UX aesGenerate a vibrant and modern UI/UX-themed
                  image for a card promoting a mentorship program.</p>
                <button className="text-blue-500 bg-blue-500 bg-opacity-20 border-none py-3 px-3 rounded-[10px] mt-5 hover:text-white hover:bg-opacity-50 font-Lato">Learn more</button>
              </div>
            </SwiperSlide>

            {/* card-4 */}
            <SwiperSlide>
              <div className="m-[20px] bg-purple-50 rounded-[15px] py-5 px-3 text-center hover:scale-[0.95] hover:cursor-pointer hover:transition-all transition-duration: 500ms transition-all transition-duration">
                <img
                  loading="lazy"
                  srcSet="/images/data-science.svg"
                  className="w-[10px] m-auto"
                />
                <h3 className="text-slate-700 font-semibold w-fit m-auto mt-5 font-Saira">Data Science</h3>
                <p className="font-light text-center mt-2 font-Archivo-300">Generate a vibrant and modern UI/UX-themed image for a card
                  promoting a mentorship program. Include elements that convey
                  collaboration, creativity, and innovation. Use a clean and
                  professional design with a color palette that aligns with
                  contemporary UI/UX aesGenerate a vibrant and modern UI/UX-themed
                  image for a card promoting a mentorship program.</p>
                <button className="text-blue-500 bg-blue-500 bg-opacity-20 border-none py-3 px-3 rounded-[10px] mt-5 hover:text-white hover:bg-opacity-50 font-Lato">Learn more</button>
              </div>
            </SwiperSlide>

            {/* card-5 */}
            <SwiperSlide>
              <div className="m-[20px] bg-purple-50 rounded-[15px] py-5 px-3 text-center hover:scale-[0.95] hover:cursor-pointer hover:transition-all transition-duration: 500ms transition-all transition-duration">
                <img
                  loading="lazy"
                  srcSet="/images/ui-ux.svg"
                  className="w-[100px] m-auto"
                />
                <h3 className="text-slate-700 font-semibold w-fit m-auto mt-5 font-Saira">UI UX</h3>
                <p className="font-light text-center mt-2 font-Archivo-300">Generate a vibrant and modern UI/UX-themed image for a card
                  promoting a mentorship program. Include elements that convey
                  collaboration, creativity, and innovation. Use a clean and
                  professional design with a color palette that aligns with
                  contemporary UI/UX aesGenerate a vibrant and modern UI/UX-themed
                  image for a card promoting a mentorship program.</p>
                <button className="text-blue-500 bg-blue-500 bg-opacity-20 border-none py-3 px-3 rounded-[10px] mt-5 hover:text-white hover:bg-opacity-50 font-Lato">Learn more</button>
              </div>
            </SwiperSlide>
          </Swiper>
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

      </div>
    </>
  );
}

export default MentorshipCard;

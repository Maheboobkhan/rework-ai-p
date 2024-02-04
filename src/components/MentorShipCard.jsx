import React from "react";
import MentorShipParagraph from "./MentorShipParagraph";

import SwiperCore from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

function MentorshipCard() {
  SwiperCore.use([Pagination, Autoplay]);
  return (
    <>
      <div>
        <p className="text-indigo-700 bg-purple-100 rounded-[10px] px-2 py-3 w-fit m-auto mt-4">What We Offer</p>
        <h1 className="font-bold text-[35px] w-fit m-auto mt-2 text-center">We offer the best Mentorship</h1>
        <MentorShipParagraph />

        <div className="mt-5 mb-5">

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
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/55d0ee0804b85a8ba7a5724c429fcf5ff2f8ea0ce2058edec244d0b959858840?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/55d0ee0804b85a8ba7a5724c429fcf5ff2f8ea0ce2058edec244d0b959858840?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/55d0ee0804b85a8ba7a5724c429fcf5ff2f8ea0ce2058edec244d0b959858840?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/55d0ee0804b85a8ba7a5724c429fcf5ff2f8ea0ce2058edec244d0b959858840?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/55d0ee0804b85a8ba7a5724c429fcf5ff2f8ea0ce2058edec244d0b959858840?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/55d0ee0804b85a8ba7a5724c429fcf5ff2f8ea0ce2058edec244d0b959858840?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/55d0ee0804b85a8ba7a5724c429fcf5ff2f8ea0ce2058edec244d0b959858840?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/55d0ee0804b85a8ba7a5724c429fcf5ff2f8ea0ce2058edec244d0b959858840?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&"
                  className="w-[100px] m-auto"
                />
                <h3 className="text-slate-700 font-semibold w-fit m-auto mt-5">UI UX</h3>
                <p className="font-light text-center mt-2">Generate a vibrant and modern UI/UX-themed image for a card
                  promoting a mentorship program. Include elements that convey
                  collaboration, creativity, and innovation. Use a clean and
                  professional design with a color palette that aligns with
                  contemporary UI/UX aesGenerate a vibrant and modern UI/UX-themed
                  image for a card promoting a mentorship program.</p>
                <button className="text-blue-500 bg-blue-500 bg-opacity-20 border-none py-3 px-3 rounded-[10px] mt-[30px] hover:text-white hover:bg-opacity-50">Learn more</button>
              </div>
            </SwiperSlide>

            {/* card-2 */}
            <SwiperSlide>
              <div className="m-[20px] bg-purple-50 rounded-[15px] py-5 px-3 text-center hover:scale-[0.95] hover:cursor-pointer hover:transition-all transition-duration: 500ms transition-all transition-duration">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fb0ec66c711b29d63afb10ec55401b8d9f00d1b30dc2af05cd6b929663fdf185?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb0ec66c711b29d63afb10ec55401b8d9f00d1b30dc2af05cd6b929663fdf185?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb0ec66c711b29d63afb10ec55401b8d9f00d1b30dc2af05cd6b929663fdf185?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb0ec66c711b29d63afb10ec55401b8d9f00d1b30dc2af05cd6b929663fdf185?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb0ec66c711b29d63afb10ec55401b8d9f00d1b30dc2af05cd6b929663fdf185?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb0ec66c711b29d63afb10ec55401b8d9f00d1b30dc2af05cd6b929663fdf185?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb0ec66c711b29d63afb10ec55401b8d9f00d1b30dc2af05cd6b929663fdf185?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb0ec66c711b29d63afb10ec55401b8d9f00d1b30dc2af05cd6b929663fdf185?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&"
                  className="w-[100px] m-auto"
                />
                <h3 className="text-slate-700 font-semibold w-fit m-auto mt-5">Digital Marketing</h3>
                <p className="font-light text-center mt-2">Generate a vibrant and modern UI/UX-themed image for a card
                  promoting a mentorship program. Include elements that convey
                  collaboration, creativity, and innovation. Use a clean and
                  professional design with a color palette that aligns with
                  contemporary UI/UX aesGenerate a vibrant and modern UI/UX-themed
                  image for a card promoting a mentorship program.</p>
                <button className="text-blue-500 bg-blue-500 bg-opacity-20 border-none py-3 px-3 rounded-[10px] mt-5 hover:text-white hover:bg-opacity-50">Learn more</button>
              </div>
            </SwiperSlide>

            {/* card-3 */}
            <SwiperSlide>
              <div className="m-[20px] bg-purple-50 rounded-[15px] py-5 px-3 text-center hover:scale-[0.95] hover:cursor-pointer hover:transition-all transition-duration: 500ms transition-all transition-duration">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/637f9f84d1cbb0c124246e5ebca62823c907fa8aa417440ba6be5cb38286b8df?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/637f9f84d1cbb0c124246e5ebca62823c907fa8aa417440ba6be5cb38286b8df?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/637f9f84d1cbb0c124246e5ebca62823c907fa8aa417440ba6be5cb38286b8df?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/637f9f84d1cbb0c124246e5ebca62823c907fa8aa417440ba6be5cb38286b8df?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/637f9f84d1cbb0c124246e5ebca62823c907fa8aa417440ba6be5cb38286b8df?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/637f9f84d1cbb0c124246e5ebca62823c907fa8aa417440ba6be5cb38286b8df?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/637f9f84d1cbb0c124246e5ebca62823c907fa8aa417440ba6be5cb38286b8df?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/637f9f84d1cbb0c124246e5ebca62823c907fa8aa417440ba6be5cb38286b8df?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&"
                  className="w-[100px] m-auto"
                />
                <h3 className="text-slate-700 font-semibold w-fit m-auto mt-5">Java script</h3>
                <p className="font-light text-center mt-2">Generate a vibrant and modern UI/UX-themed image for a card
                  promoting a mentorship program. Include elements that convey
                  collaboration, creativity, and innovation. Use a clean and
                  professional design with a color palette that aligns with
                  contemporary UI/UX aesGenerate a vibrant and modern UI/UX-themed
                  image for a card promoting a mentorship program.</p>
                <button className="text-blue-500 bg-blue-500 bg-opacity-20 border-none py-3 px-3 rounded-[10px] mt-5 hover:text-white hover:bg-opacity-50">Learn more</button>
              </div>
            </SwiperSlide>

            {/* card-4 */}
            <SwiperSlide>
              <div className="m-[20px] bg-purple-50 rounded-[15px] py-5 px-3 text-center hover:scale-[0.95] hover:cursor-pointer hover:transition-all transition-duration: 500ms transition-all transition-duration">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6fa446a93584080fd350e312fbda663184496e8390b590f9a73f14109ca4a68c?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6fa446a93584080fd350e312fbda663184496e8390b590f9a73f14109ca4a68c?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6fa446a93584080fd350e312fbda663184496e8390b590f9a73f14109ca4a68c?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6fa446a93584080fd350e312fbda663184496e8390b590f9a73f14109ca4a68c?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6fa446a93584080fd350e312fbda663184496e8390b590f9a73f14109ca4a68c?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6fa446a93584080fd350e312fbda663184496e8390b590f9a73f14109ca4a68c?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6fa446a93584080fd350e312fbda663184496e8390b590f9a73f14109ca4a68c?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6fa446a93584080fd350e312fbda663184496e8390b590f9a73f14109ca4a68c?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&"
                  className="w-[10px] m-auto"
                />
                <h3 className="text-slate-700 font-semibold w-fit m-auto mt-5">Data Science</h3>
                <p className="font-light text-center mt-2">Generate a vibrant and modern UI/UX-themed image for a card
                  promoting a mentorship program. Include elements that convey
                  collaboration, creativity, and innovation. Use a clean and
                  professional design with a color palette that aligns with
                  contemporary UI/UX aesGenerate a vibrant and modern UI/UX-themed
                  image for a card promoting a mentorship program.</p>
                <button className="text-blue-500 bg-blue-500 bg-opacity-20 border-none py-3 px-3 rounded-[10px] mt-5 hover:text-white hover:bg-opacity-50">Learn more</button>
              </div>
            </SwiperSlide>

            {/* card-5 */}
            <SwiperSlide>
              <div className="m-[20px] bg-purple-50 rounded-[15px] py-5 px-3 text-center hover:scale-[0.95] hover:cursor-pointer hover:transition-all transition-duration: 500ms transition-all transition-duration">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/55d0ee0804b85a8ba7a5724c429fcf5ff2f8ea0ce2058edec244d0b959858840?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/55d0ee0804b85a8ba7a5724c429fcf5ff2f8ea0ce2058edec244d0b959858840?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/55d0ee0804b85a8ba7a5724c429fcf5ff2f8ea0ce2058edec244d0b959858840?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/55d0ee0804b85a8ba7a5724c429fcf5ff2f8ea0ce2058edec244d0b959858840?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/55d0ee0804b85a8ba7a5724c429fcf5ff2f8ea0ce2058edec244d0b959858840?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/55d0ee0804b85a8ba7a5724c429fcf5ff2f8ea0ce2058edec244d0b959858840?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/55d0ee0804b85a8ba7a5724c429fcf5ff2f8ea0ce2058edec244d0b959858840?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/55d0ee0804b85a8ba7a5724c429fcf5ff2f8ea0ce2058edec244d0b959858840?apiKey=005fd2ec8f724bb2899a5ee9fa844ab1&"
                  className="w-[100px] m-auto"
                />
                <h3 className="text-slate-700 font-semibold w-fit m-auto mt-5">UI UX</h3>
                <p className="font-light text-center mt-2">Generate a vibrant and modern UI/UX-themed image for a card
                  promoting a mentorship program. Include elements that convey
                  collaboration, creativity, and innovation. Use a clean and
                  professional design with a color palette that aligns with
                  contemporary UI/UX aesGenerate a vibrant and modern UI/UX-themed
                  image for a card promoting a mentorship program.</p>
                <button className="text-blue-500 bg-blue-500 bg-opacity-20 border-none py-3 px-3 rounded-[10px] mt-5 hover:text-white hover:bg-opacity-50">Learn more</button>
              </div>
            </SwiperSlide>
          </Swiper>

        </div>

      </div>
    </>
  );
}

export default MentorshipCard;

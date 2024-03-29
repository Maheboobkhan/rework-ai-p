import React from 'react'
import TestimonialCard from './testimonial-card/TestimonialCard'
import test1 from '../../assets/test1.svg'
import test2 from '../../assets/test2.svg'
import test3 from '../../assets/test3.svg'
import SwiperCore from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Scrollbar, Autoplay } from 'swiper/modules';

const testimonials = [
    {
        content: "Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend!Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend!",
        author: "Rajveer Singh",
        role: "Product Designer",
        imageSrc: test1,
    },
    {
        content: "Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend!Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend!",
        author: "Rajveer Singh",
        role: "Product Designer",
        imageSrc: test2,
    },
    {
        content: "Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend!Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend!",
        author: "Rajveer Singh",
        role: "Product Designer",
        imageSrc: test3,
    },
    {
        content: "Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend!Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend!",
        author: "Rajveer Singh",
        role: "Product Designer",
        imageSrc: test2,
    },
    {
        content: "Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend!Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend!",
        author: "Rajveer Singh",
        role: "Product Designer",
        imageSrc: test2,
    },
    {
        content: "Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend!Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend!",
        author: "Rajveer Singh",
        role: "Product Designer",
        imageSrc: test2,
    },

];

// Navigation function

const Testimonial = () => {
    SwiperCore.use([Scrollbar, Autoplay]);
    
    return (
        <div className='w-screen'>
            <div className="font-Archivo justify-center w-fit p-2.5 mt-3 mx-auto text-lg leading-7 text-center whitespace-nowrap bg-purple-100 rounded-xl text-indigo-700 text-opacity-50 max-sm:text-base">
                Our Happy Customers
            </div>
            <div className="font-Archivo mt-5 mr-5 text-5xl font-bold text-center text-black capitalize max-md:max-w-full max-md:text-4xl max-sm:px-4 max-sm:text-3xl">
                Success Stories:
                <br /> Real Mentees, Real Results
            </div>
            <div className="font-Archivo font-[18px] w-screen mt-2 text-lg px-5 text-center text-black max-sm:text-base">
                Checkout the reviews from our mentees about how their experience was with us.
            </div>

            {/* TESTIMONIALs */}
            <div className="self-stretch mt-16 max-md:mt-10">
                {/* For Large screens */}
                <div
                    className='grid grid-cols-3 pl-14 pr-20 max-md:grid-cols-2 gap-10 overflow-x-hidden flex-col mt-5 max-sm:hidden'
                >
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className='hover:scale-[0.95] hover:cursor-pointer hover:transition-all transition-duration: 500ms transition-all transition-duration'>
                            <TestimonialCard
                                content={testimonial.content}
                                author={testimonial.author}
                                role={testimonial.role}
                                imageSrc={testimonial.imageSrc}
                            />
                        </div>
                    ))}
                </div>

                {/* For Small screens */}
                <div className='sm:hidden mx-4'>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}

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
                            // Add more breakpoints as needed
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index} className='bg-[#EEE5FF] px-4 py-4 hover:scale-[0.95] hover:cursor-pointer hover:transition-all transition-duration: 500ms transition-all transition-duration'>
                                
                                    <p className='text-wrap text-base font-Poppins-400 font-normal'>{testimonial.content}</p>
                                    <h2 className='text-[#5C27C0] text-xl font-Archivo-400 mt-2'>{testimonial.author}</h2>
                                    <h4 className='font-Poppins-500 text-lg font-medium text-[#6A6A6A]'>{testimonial.role}</h4>
                                    <img src={testimonial.imageSrc} className='mt-3.5' />
                            </SwiperSlide>
                        ))}
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
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index} className='w-40 text-white'>.</SwiperSlide>
                        ))}
                    </Swiper>
            </div>



        </div>
    )
}

export default Testimonial
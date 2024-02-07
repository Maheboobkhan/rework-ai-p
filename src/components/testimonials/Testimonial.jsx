import React, { useState } from 'react'
import TestimonialCard from './testimonial-card/TestimonialCard'
import test1 from '../../assets/test1.svg'
import test2 from '../../assets/test2.svg'
import test3 from '../../assets/test3.svg'
import { Carousel } from '@material-tailwind/react'

const testimonials = [
    {
        content: "Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend!",
        author: "Rajveer Singh",
        role: "Product Designer",
        imageSrc: test1,
    },
    {
        content: "Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend!",
        author: "Rajveer Singh",
        role: "Product Designer",
        imageSrc: test2,
    },
    {
        content: "Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend!",
        author: "Rajveer Singh",
        role: "Product Designer",
        imageSrc: test3,
    },
    {
        content: "Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend!",
        author: "Rajveer Singh",
        role: "Product Designer",
        imageSrc: test2,
    },
    {
        content: "Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend!",
        author: "Rajveer Singh",
        role: "Product Designer",
        imageSrc: test2,
    },
    {
        content: "Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend!",
        author: "Rajveer Singh",
        role: "Product Designer",
        imageSrc: test2,
    },

];

// Navigation function
const CustomCarouselNavigation = ({ setActiveIndex, activeIndex, length }) => (
    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
        {new Array(length).fill("").map((_, i) => (
            <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all ${activeIndex === i ? "w-8 bg-violet-600" : "w-4 bg-violet-600/50"
                    }`}
                onClick={() => setActiveIndex(i)}
            />
        ))}
    </div>
);

const Testimonial = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleIndexChange = (index) => {
        // Check if the index is out of bounds
        if (index < 0) {
            setActiveIndex(0);
        } else if (index >= length) {
            setActiveIndex(0); // Reset to the first index when reaching the end
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <div className='w-screen'>
            <div className="justify-center w-fit p-2.5 mt-3 mx-auto text-lg leading-7 text-center whitespace-nowrap bg-purple-100 rounded-xl text-indigo-700">
                Our Happy Customers
            </div>
            <div className="mt-5 ml-5 text-5xl font-bold text-center text-black capitalize max-md:max-w-full max-md:text-4xl">
                Success Stories:
                <br /> Real Mentees, Real Results
            </div>
            <div className="w-screen mt-2 text-lg px-4 text-center text-black">
                Checkout the reviews from our mentees about how their experience was with us.
            </div>

            {/* TESTIMONIALs */}
            <div className="self-stretch mt-16 max-md:mt-10">
                {/* For Large screens */}
                <div
                    className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 overflow-x-hidden flex-col mt-5'
                >
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className='hover:scale-95 cursor-pointer'>
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
                <Carousel
                    className="rounded-xl sm:hidden"
                    autoplay={true}
                    autoplayInterval={100}
                    navigation={(props) => <CustomCarouselNavigation {...props} />}
                    activeIndex={activeIndex}
                    onChange={handleIndexChange}
                >
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className='w-screen hover:shadow-xl hover:shadow-slate-500'>
                            <TestimonialCard
                                content={testimonial.content}
                                author={testimonial.author}
                                role={testimonial.role}
                                imageSrc={testimonial.imageSrc}
                            />
                        </div>
                    ))}
                </Carousel>
            </div>



        </div>
    )
}

export default Testimonial
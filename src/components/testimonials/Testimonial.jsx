import React, { useEffect } from 'react'
import TestimonialCard from './testimonial-card/TestimonialCard'
import test1 from '../../assets/test1.svg'
import test2 from '../../assets/test2.svg'
import test3 from '../../assets/test3.svg'

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

const Testimonial = () => {

    const isMobileDevice = () => {
        console.log("Mobile Device")
        return window.innerWidth >= 640;
    }

    return (
        <div className='w-screen'>
            <div className="justify-center w-fit p-2.5 mt-3 mx-auto text-lg leading-7 text-center whitespace-nowrap bg-purple-100 rounded-xl text-indigo-700">
                Our Happy Customers
            </div>
            <div className="mt-5 ml-5 text-5xl font-bold text-center text-black capitalize max-md:max-w-full max-md:text-4xl">
                Success Stories:
                <br /> Real Mentees, Real Results
            </div>
            <div className="mt-2 ml-5 text-lg text-center text-black max-md:max-w-full">
                Checkout the reviews from our mentees about how their experience was with us.
            </div>

            {/* TESTIMONIALs */}
            <div className="self-stretch mt-16 max-md:mt-10">
                <div
                    className='grid md:grid-cols-3 gap-5 overflow-x-auto flex-col self-stretch mt-5 max-md:flex max-md:flex-col max-md:max-sm:flex max-sm:overflow-auto max-sm:flex-row max-sm:self-center max-sm:w-screen max-sm:grid-col max-sm:ml-[calc(50%_-_50vw)] mx-auto'
                >
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className='max-sm:text-center hover:shadow-xl hover:shadow-slate-500'>
                            <TestimonialCard
                                content={testimonial.content}
                                author={testimonial.author}
                                role={testimonial.role}
                                imageSrc={testimonial.imageSrc}
                            />
                        </div>
                    ))}
                </div>
            </div>



        </div>
    )
}

export default Testimonial
import React from 'react'
import WelcomeTestimonial from './WelcomeTestimonial'

const WelcomeSection = () => {
    return (
        <div className="flex flex-col grow px-6 w-full bg-violet-800 max-md:px-5 max-md:mt-3 max-md:max-w-full">
            <div className="font-Archivo self-center mt-[4.5rem] text-3xl font-black tracking-wide text-center text-neutral-100">
                Let us help you land your Dream Job
            </div>
            <div className="font-Poppins self-center mt-2 text-md text-center text-neutral-100">
                Unlock Your Career Potential with Expert Mentorship!
            </div>
            <img
                loading="lazy"
                srcSet="/images/Frame.svg"
                className="mt-2 rounded-md shadow-sm h-[58.5px] w-[159.35px] self-center max-md:mt-2"
            />
            <div className="flex flex-col justify-center items-start self-end pl-11 mt-7 max-w-full w-[295.69px] text-[0.5rem] tracking-normal rounded-[50%] bg-violet-200 bg-opacity-20 max-md:mt-5">
                <WelcomeTestimonial/>
            </div>
            <div className="flex flex-col justify-start items-start self-start pr-11 mt-2 max-w-full w-[295.69px] text-[0.5rem] text-black tracking-normal rounded-[50%] bg-violet-200 bg-opacity-20" >
                <WelcomeTestimonial/>
            </div>
            <div className="flex flex-col justify-center items-start self-end pl-11 mt-2 mb-2 mr-12 max-w-full w-[249.74px] text-[0.5rem] text-black tracking-normal rounded-[50%] bg-violet-200 bg-opacity-20" >
                <WelcomeTestimonial/>
            </div>
        </div>
    )
}


export default WelcomeSection
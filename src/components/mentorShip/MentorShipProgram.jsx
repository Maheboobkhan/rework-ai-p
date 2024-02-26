import React from "react";
import mentor from '../../assets/mentor.jpeg'

const MentorshipProgram = () => {
    const handleClick = () => {
        // handle button click event
    };

    return (
        <div className="font-Archivo flex gap-5 max-md:flex-col max-md:gap-0 max-md mx-auto sm:w-[78%] w-[98%] pt-10 pb-6">
            <div className="flex flex-col w-full max-md:ml-0 max-sm:text-center">
                <div className="flex flex-col self-stretch my-auto font-medium max-md:mt-10 max-md:max-w-full">
                    <h1 className="font-Archivo mx-auto text-center text-2xl sm:text-4xl text-black font-medium">
                        Limited slots available!
                        <span>&nbsp;</span>
                        <span className="font-Archivo font-bold text-black max-sm:block text-2xl sm:text-4xl">
                            Secure your spot today!
                        </span>
                    </h1>
                    <p className="text-center font-Archivo mt-4 text-[18px] font-semibold text-black text-opacity-60 max-md:max-w-full max-sm:font-[12px] max-sm:text-sm">
                        Don't miss this opportunity to accelerate your career growth.
                        Limited slots available for our exclusive mentorship program.
                    </p>
                    <button
                        className="justify-center mx-auto self-start px-7 py-3 my-8 text-lg font-bold leading-7 text-white capitalize whitespace-nowrap bg-violet-800 border-2 border-violet-800 max-md:px-5 hover:bg-white hover:text-violet-800 max-sm:mx-auto"
                        aria-label="Apply now"
                        type="submit"
                        onClick={handleClick}
                    >
                        Apply now
                    </button>
                </div>
            </div>
            {/* <div className="flex flex-col w-full bg-white max-sm:hidden">
                <img
                    className="bg-white h-fit"
                    loading="lazy"
                    src={mentor}
                    aria-label="Mentorship Program"
                />
            </div> */}
        </div>
    );
}

export default MentorshipProgram;

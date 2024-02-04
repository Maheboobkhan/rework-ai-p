import React from "react";
import mentor from '../../assets/mentor.jpeg'

const MentorshipProgram = () => {
    const handleClick = () => {
        // handle button click event
    };

    return (
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md my-4">
            <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto font-medium max-md:mt-10 max-md:max-w-full">
                    <h1 className="text-4xl text-black leading-[52px] max-md:max-w-full">
                        Limited slots available!{" "}
                        <span className="font-extrabold text-black">
                            Secure your spot today!
                        </span>{" "}
                    </h1>
                    <p className="mt-3 text-2xl text-black text-opacity-60 max-md:max-w-full">
                        Don't miss this opportunity to accelerate your career growth.
                        Limited slots available for our exclusive mentorship program.
                    </p>
                    <button
                        className="justify-center self-start px-7 py-3 m-8 text-lg font-bold leading-7 text-white capitalize whitespace-nowrap bg-violet-800 rounded-xl max-md:px-5 hover:bg-violet-900 hover:text-white"
                        aria-label="Apply now"
                        type="submit"
                        onClick={handleClick}
                    >
                        Apply now
                    </button>
                </div>
            </div>
            <div className="flex flex-col w-full bg-white relative max-sm:hidden">
                <img
                    className="bg-white h-screen"
                    loading="lazy"
                    src={mentor}
                    aria-label="Mentorship Program"
                />
            </div>
        </div>
    );
}

export default MentorshipProgram;

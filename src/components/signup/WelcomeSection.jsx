import React from 'react'

const WelcomeSection = () => {
    return (
        <main className="flex flex-col pt-5 w-full bg-[#FFFFFF]">
            <section className="h-[85%] flex flex-col w-full px-3 pb-2 bg-violet-800 rounded-t-lg">
                <div className="text-2xl max-md:text-xl font-extrabold">
                    <span className="grow font-Raleway text-white">Talent </span>
                    <span className="grow font-Raleway">Finder</span>
                    <p className='grow font-Caveat ml-[6rem] max-md:ml-[5rem] text-xs text-start font-[14px] max-sm:font-[9.11px] italic'>by rework</p>
                </div>
                <div className="mt-36 font-Archivo text-4xl text-start max-sm:text-center font-black text-neutral-100 max-md:mt-28 custom-welcome-text max-md:text-3xl max-sm:mx-10 max-sm:mt-10">
                    Welcome to TalentFinder!
                </div>
                <p className="mt-2 font-Poppins text-base max-sm:text-center text-neutral-100 max-sm:mx-10">
                    Unlock Your Career Potential with Expert Mentorship!
                </p>
                <div className="font-Archivo mt-36 mx-auto text-center text-white max-md:mt-28 max-sm:mx-10 max-sm:mt-10">
                    Limited slots available! <br />
                    <strong className="font-extrabold">Secure your spot today!</strong>
                </div>
            </section>
            <div className="flex flex-col max-md:ml-0 max-md:w-full">
                <section className='h-[3vh] max-md:h-[5vh] max-sm:hidden'></section>
                <img
                    loading="lazy"
                    src="\images\right-image.jpg"
                    className="h-[70vh] max-md:h-[60vh] w-full max-sm:w-screen max-sm:h-[20%] aspect-square"
                />
            </div>
        </main>
    )
}


export default WelcomeSection
import React from 'react'

const WelcomeSection = () => {
    return (
        <main className="flex flex-col pt-2 w-full bg-[#FFFFFF]">
            <section className="h-[85%] flex flex-col w-full px-3 pb-2 bg-violet-800 rounded-t-lg">
                <div className="text-2xl max-md:text-xl font-extrabold">
                    <span className="grow font-Raleway text-white">Talent </span>
                    <span className="grow font-Raleway">Finder</span>
                    <p className='grow mt-0 font-Caveat ml-[6rem] max-md:ml-[5rem] text-xs text-start font-[14px] max-sm:font-[9.11px] italic'>by rework</p>
                </div>
                <div className="my-12 font-Archivo text-3xl text-start max-sm:text-center font-black text-neutral-100 max-md:mt-7 custom-welcome-text  max-sm:mx-8 max-sm:font-bold">
                    Welcome to TalentFinder!
                    <p className="mt-2 font-Poppins font-normal text-base max-sm:text-center text-neutral-100">
                        Unlock Your Career Potential with Expert Mentorship!
                    </p>
                </div>
                <div className="font-Archivo font-medium text-[14px] mx-auto text-center text-white max-sm:mx-10">
                    Limited slots available! <br className='max-sm:hidden'/>
                    <strong className="font-extrabold">Secure your spot today!</strong>
                </div>
            </section>
            <div className="flex flex-col max-md:ml-0 max-md:w-full">
                <section className='h-[5vh] max-md:h-[5vh] max-sm:hidden'></section>
                <img
                    loading="lazy"
                    src="\images\right-image.jpg"
                    className="h-[60vh] bg-red-700 w-full max-sm:w-screen max-sm:h-[20%] aspect-[1.1]"
                />
            </div>
        </main>
    )
}


export default WelcomeSection
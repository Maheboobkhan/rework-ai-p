import React from 'react'

const WelcomeTestimonial = () => {
    return (
        <div className="font-Poppins flex z-10 flex-col px-2 py-1.5 mt-0 mb-0 w-full bg-indigo-100 text-black rounded shadow-md">
            <div className="flex gap-0 text-right text-black">
                <img
                    loading="lazy"
                    srcSet="..."
                    className="shrink-0 aspect-square w-[21px]"
                />
                <div className="flex flex-col justify-center self-center px-3">
                    <div>John Mathew</div>
                    <div>Founder, ABC Ltd.</div>
                </div>
            </div>
            <div className="mt-2.5 text-neutral-900">
                “TalentFinder has been a great way to get the Job easier and faster.
                We've been able to save money and time, and the recruiters have been
                able to find the best employers leads. Highly recommend! “
            </div>
        </div>
    )
}

export default WelcomeTestimonial
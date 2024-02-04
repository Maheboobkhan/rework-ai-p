import React from 'react'
import ComparisonTable from './comparison/ComparisonTable'

const Advantage = () => {
    const handleClick = () => {
        console.log('Why we are better')
    }

    return (
        <div>
            <div className="flex justify-center items-center px-16 py-12 bg-white max-md:px-5">
                <div className="flex flex-col mt-12 w-full max-md:mt-10">
                    <button className="justify-center self-center p-2.5 text-lg leading-7 text-center whitespace-nowrap bg-purple-100 rounded-xl text-indigo-700 text-opacity-50" onClick={handleClick}>
                        Why we are better
                    </button>
                    <div className="self-center mt-5 text-5xl font-semibold text-center leading-[50px] text-zinc-900 max-md:max-w-full">
                        <span className="text-zinc-900">
                            Rework AI vs. Traditional Interviews: A Comparative Insight
                        </span>
                    </div>
                    <div className="self-center mt-3.5 text-lg leading-6 text-center text-zinc-900 max-md:max-w-full">
                        Elevate Your Hiring Experience with Rework AI. Streamline your process, minimize bias, and embrace innovation. Discover why AI interviews provide unparalleled efficiency, accessibility, and insights, making them the smarter choice for the future of recruitment.
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center px-16 py-12 bg-white max-md:px-5'>
                <ComparisonTable />
            </div>

        </div>
    )
}

export default Advantage
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
                    <button className="font-Archivo font-[18px] justify-center self-center p-2.5 text-lg leading-7 text-center whitespace-nowrap bg-purple-100 rounded-xl text-indigo-700 text-opacity-50 max-sm:text-xs" onClick={handleClick}>
                        Why we are better
                    </button>
                    <div className="font-Archivo font-[42px] self-center mt-5 text-5xl text-center leading-[50px] text-zinc-900 max-md:max-w-full max-sm:text-2xl">
                        <span className="text-zinc-900">
                            <b>Rework AI</b> vs. Traditional Interviews: A Comparative Insight
                        </span>
                    </div>
                    <div className="font-Poppins font-[18px] self-center mt-3.5 text-lg leading-6 text-center text-zinc-900 max-md:max-w-full max-sm:text-xs">
                        Elevate Your Hiring Experience with Rework AI. Streamline your process, minimize bias, and embrace innovation. Discover why AI interviews provide unparalleled efficiency, accessibility, and insights, making them the smarter choice for the future of recruitment.
                    </div>
                </div>
            </div>
            <div className='w-screen flex justify-center items-center px-16 py-12 bg-white max-md:px-5'>
                <ComparisonTable />
            </div>

        </div>
    )
}

export default Advantage
import React from 'react'

const Invest = () => {
    return (
        <div className="flex flex-col justify-center items-center py-9 bg-violet-100">
            <div className="font-Archivo self-stretch text-2xl font-extrabold leading-8 text-center text-black whitespace-nowrap">
                Invest in Your Future
            </div>
            <div className="font-Archivo mt-3 text-xs font-semibold text-center text-black text-opacity-60">
                Our mentorship program comes with a reasonable investment tailored to
                ensure you receive the best value for your career advancement.
            </div>
            <div className="font-Archivo justify-center px-7 py-1.5 mt-6 text-sm font-medium leading-7 border-2 text-white capitalize whitespace-nowrap bg-violet-800 rounded-xl hover:bg-white hover:text-violet-800 hover:border-violet-800">
                Apply now
            </div>
        </div>
    )
}

export default Invest
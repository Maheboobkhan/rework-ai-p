import React from 'react'
import Footer from '../components/Footer/Footer'
import MentorshipProgram from '../components/mentorShip/MentorShipProgram'
import FAQSection from '../components/faq/FAQSection'
import Testimonial from '../components/testimonials/Testimonial'
import Advantage from '../components/advantage/Advantage'

const Home = () => {
    return (
        <div className='w-fit'>
            <span className='text-[200px]'>↑</span><span className='text-[50px] bg-[red] text-wrap'>Above ui developed by Maheboob From "NAVBAR SECTION" to "ENROLL NOW"</span>
            <br />
            <span className='text-[200px] mt-12'>↓</span><span className='text-[50px] bg-[red] text-wrap mt-12'>Below ui developed by Milan From "TRADITIONAL INTERVIEW SECTION" to "FOOTER"</span>

            <div className='w-full'>
                <Advantage />
            </div>

            <div className="flex flex-col items-center w-full mx-auto bg-slate-50 max-md:px-5">
                <Testimonial />
            </div>;

            <div className='px-16 bg-violet-800 max-md:px-5 max-sm:bg-white'>
                <FAQSection />
            </div>


            <div className='px-8 bg-slate-50 max-md:px-5'>
                <MentorshipProgram />
            </div>

            <div className="bg-purple-800 py-6 max-w-screen">
                <Footer />
            </div>
        </div>
    )
}

export default Home
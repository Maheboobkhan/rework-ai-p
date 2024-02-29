import React from 'react'
import Header from "../components/Header";
import MainSection from "../components/MainSection";
import BrandsSection from "../components/BrandsSection";
import MentorshipCard from "../components/MentorShipCard";
import ProfileCards from "../components/ProfileCards";
import BenefitsSection from "../components/BenefitsSection";
import CompanyOverView from "../components/CompanyOverView";
import StepsCards from "../components/StepsCards";
import CertificateSection from "../components/CertificateSection";
import PricingCardsSection from "../components/PricingCardsSection";
import TopRibbon from "../components/TopRibbon";
import Footer from '../components/footer/Footer'
import FAQSection from '../components/faq/FAQSection'
import Testimonial from '../components/testimonials/Testimonial'
import Invest from '../components/invest/Invest'

const Home = () => {
    return (
        <div className='overflow-x-hidden'>
            <TopRibbon />
            <Header />
            <MainSection />
            <BrandsSection />
            <MentorshipCard />
            <ProfileCards />
            <BenefitsSection />
            <CompanyOverView />
            <StepsCards />
            <CertificateSection />
            <PricingCardsSection />

            
            {/* <h1>Milan</h1> */}

            {/* <div className='w-full'>
                <Advantage />
            </div> */}

            <div className="flex flex-col items-center w-full p-4 bg-slate-50 max-md:px-5">
                <Testimonial />
            </div>

            <div className='w-screen bg-violet-100'>
                <Invest />
            </div>

            <div className='px-16 pb-20 bg-white max-md:px-5 max-sm:bg-white'>
                <FAQSection />
            </div>


            {/* <div className='px-8 bg-slate-50 max-md:px-5'>
                <MentorshipProgram />
            </div> */}

            <div className="bg-[#5C27C0] max-w-screen">
                <Footer />
            </div>
        </div>
    )
}

export default Home
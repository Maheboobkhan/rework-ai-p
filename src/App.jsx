import React from "react";
import "./App.css";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import BrandsSection from "./components/BrandsSection";
import MentorshipCard from "./components/MentorShipCard";
import ProfileCards from "./components/ProfileCards";
import BenefitsSection from "./components/BenefitsSection";
import CompanyOverView from "./components/CompanyOverView";
import StepsCards from "./components/StepsCards";
import CertificateSection from "./components/CertificateSection";
import PricingCardsSection from "./components/PricingCardsSection";
import Home from './pages/Home'

function App() {
  return (
    <div className='overflow-x-hidden'>
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
      <Home />
    </div>
  );
}

export default App;

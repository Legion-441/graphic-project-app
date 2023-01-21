import React from "react"
import CardSection from "../../components/card/card";
import DescriptionSection from "../../components/description/description";
import HeroSection from "../../components/hero-section.tsx/hero-section";



const HomeView: React.FC = () => {
    
    return <>
       <HeroSection />
       <DescriptionSection />
       <CardSection />
    </>
}

export default HomeView;
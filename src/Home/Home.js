import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AboutCompany from "../AboutCompany/AboutCompany";
import Advantages from "../Advantages/Advantages";
import AdvantagesGsap from "../AdvantagesGSAP/AdvantagesGsap";
import ContactCall from "../ContactCall/ContactCall";
import ContactsTop from "../ContactsTop/ContactsTop";
import Flot from "../Flot/Flot";
import Footer from "../Footer/Footer";
import NameLogo from "../NameLogo/NameLogo";
import NewTitul from "../NewTitul/NewTitul";
import './Home.css';
import PhotoSaint from '../PhotoSaint/PhotoSaint';


gsap.registerPlugin(ScrollTrigger);

function Home() {
    useEffect(() => {
 
        const sections = document.querySelectorAll('.animate-section');

        sections.forEach(section => {
            gsap.fromTo(section, 
                { y: 100, opacity: 0 }, 
                { 
                    y: 0, 
                    opacity: 1, 
                    duration: 1, 
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%", 
                        toggleActions: "play none none reverse", 
                    }
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill()); 
        };
    }, []);

    return (
        <div>
         
         <ContactsTop />     
         <NewTitul />
         <PhotoSaint />
         <div className="animate-section">
         <NameLogo />
         </div>
         <div className="animate-section">
         <AboutCompany />
         </div>  
         <AdvantagesGsap /> 
         <div className="animate-section">
         <Advantages />
         </div>
         <div className="animate-section">
         <Flot />
         </div>
         <div className="animate-section">
         <ContactCall />
         </div>
         <Footer />
         </div>
    );
}

export default Home;

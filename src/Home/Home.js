
import AboutCompany from "../AboutCompany/AboutCompany";
import Advantages from "../Advantages/Advantages";
import AdvantagesGsap from "../AdvantagesGSAP/AdvantagesGsap";
import CarouselTop from "../Carousel/CarouselTop";
import ContactsTop from "../ContactsTop/ContactsTop";
import Flot from "../Flot/Flot";
import Footer from "../Footer/Footer";
import NameLogo from "../NameLogo/NameLogo";
import Custombar from "../Navbar/Navbar";



function Home(){
    return(<div>
        <ContactsTop />
      <CarouselTop />
      <Custombar />
      <NameLogo />
   
     <AboutCompany />
     <AdvantagesGsap />
     <Advantages />
      <Flot/>
      <Footer />
    </div>

    )
  
}

export default Home;
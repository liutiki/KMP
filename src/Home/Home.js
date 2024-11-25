
import AboutCompany from "../AboutCompany/AboutCompany";
import Advantages from "../Advantages/Advantages";
import AdvantagesGsap from "../AdvantagesGSAP/AdvantagesGsap";
import ContactCall from "../ContactCall/ContactCall";
import Flot from "../Flot/Flot";
import Footer from "../Footer/Footer";
import NameLogo from "../NameLogo/NameLogo";
import Custombar from "../Navbar/Navbar";
import NewTitul from "../NewTitul/NewTitul";
import PhotoSaint from "../PhotoSaint/PhotoSaint";
import './Home.css';



function Home(){
    return(<div>
      
      <NewTitul />

      <Custombar />  
      <PhotoSaint />
      <NameLogo />
   
     <AboutCompany />
     <AdvantagesGsap />
     <Advantages />
      <Flot/>
      <ContactCall/>
      <Footer />
    </div>

    )
  
}

export default Home;
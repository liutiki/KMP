import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";




import './App.css';
import Company from './Company/Company';
import Service from './Service/Service';
import Contacts from './Contacts/Contacts';
import Home from './Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Vacancies from './Vacancies/Vacancies';
import Policy from './Policy/Policy';
import CookieBanner from './Cooky/CookieBanner';





function App(){
  
 
  return <Router>
   
 
    <Routes>
    <Route path="/"element={<Home/>}/>
    <Route path="/Company" element={<Company/>}/>
    <Route path="/Service" element={<Service />}/>
    <Route path="/Vacancies" element={<Vacancies />}/>
    <Route path="/Contacts" element={<Contacts />}/>
    <Route path="/Policy" element={<Policy />}/>
    <Route path="/services" element={<Service />} />
    </Routes>
    <CookieBanner/>
    </Router>
    }

export default App;

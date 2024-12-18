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
import Tarif from './Tarif/Tarif';
import Policy from './Policy/Policy';




function App(){
  
 
  return <Router>
   
 
    <Routes>
    <Route path="/"element={<Home/>}/>
    <Route path="/Company" element={<Company/>}/>
    <Route path="/Service" element={<Service />}/>
    <Route path="/Tarif" element={<Tarif />}/>
    <Route path="/Vacancies" element={<Vacancies />}/>
    <Route path="/Contacts" element={<Contacts />}/>
    <Route path="/Policy" element={<Policy />}/>
    </Routes>
  
    </Router>


    }




export default App;

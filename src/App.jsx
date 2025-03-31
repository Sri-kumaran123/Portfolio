// MIT License
// Copyright (c) 2025 Srikumaran
// See LICENSE file for details.

import './App.css';
import {BrowserRouter} from "react-router-dom";
import Hero from './pages/Hero';
import Navbar from './components/Navbar';
import Education from './pages/Education';
import { Backvedio } from './components/Backvedio';
import Skiils from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact.jsx';
import Footer from './pages/Footer';

function App() {
  

  return (
    <BrowserRouter>
    <main className="min-h-[100vh] w-full shadow-md">
    
    
      <div className='h-[80vh]  relative top-0'>
       
        <Backvedio/>
        <div  className='h-full w-full top-0 home-bg absolute'/>
        
        <Hero/>
      </div>
      
      
      <Education/> 
      <Skiils/>
      <Projects/>
      <Contact/>
    </main>
    <Footer />
    </BrowserRouter>
  )
}

export default App

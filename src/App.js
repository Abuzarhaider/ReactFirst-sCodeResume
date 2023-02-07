import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import Project from './Components/Project/Project';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home';
import Services from './Components/Service/Services'
import Blog from './Components/Blog/Blogs'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path='/*' element={<Project/>} />
        <Route exact path='/project' element={<Project/>} />
        <Route exact path='/home' element={<Home/>} />
        <Route exact path='/service' element={<Services/>} />
        <Route exact path='/blog' element={<Blog/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/contact' element={<Contact/>} />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;

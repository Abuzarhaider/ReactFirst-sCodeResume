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
import ErrorPage from './Components/ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route exact path='/' element={<Project/>} />
        <Route path='/project' element={<Project/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/service' element={<Services/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;

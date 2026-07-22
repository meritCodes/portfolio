import React from 'react'
import { useState } from 'react'
import {Search } from 'lucide-react'
import './app.css'
import NavBar from './pages/NavBar'
import { Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact'
import About from './pages/About'
import Blog from './pages/Blog'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import SideBar from './pages/SideBar'


const App = () => {
  return (
    <div className='main-container'>
          <div  id='app-container' className='md:grid md:grid-cols-[1fr_3.5fr] flex flex-col'>
            <SideBar id="side-bar"/>
            <div  className='body-container'>
                <NavBar id="nav-bar"/>
                <Routes>
                  <Route path='/' element={<About />}/>
                  <Route path='/resume' element={<Resume />} />
                  <Route path='/portfolio' element={<Portfolio />} />
                  <Route path='/blog' element={<Blog/>}/>
                  <Route path='/contact' element={<Contact />} />
                </Routes>
            </div>
        </div>
    </div>
  )
}

export default App

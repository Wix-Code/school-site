import React from 'react'
import "./App.css"
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Academics from './Academics/Academics'
import About from './About/About'
import Contact from './Contact/Contact'
import Gallery from './Gallery/Gallery'
import Blog from './Blog/Blog'
import Single from './Single/Single'
import ScrollToTop from './ScrollToTop/ScrollToTop'

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/academics' element={ <Academics /> } />
          <Route path='/blog' element={<Blog />} />
          <Route path='/about' element={<About />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/single/:id' element={<Single />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
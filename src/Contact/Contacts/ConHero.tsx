import React from 'react'
import { Link } from 'react-router-dom'
import './contat.css'

const ConHero = () => {
  return (
    <div className="con_hero">
        <div className="about_1">
          <div className="abo_left">
            <h3>Welcome to Wisdom Schools</h3>
            <h1>Contact Us</h1>
          </div>
          <div className="abo_right">
            <Link to="/"><p className='i'>Home</p></Link>
            <p>|</p>
            <span>Contact Us</span>
          </div>
        </div>
    </div>
  )
}

export default ConHero
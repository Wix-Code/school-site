import React from 'react'
import { Link } from 'react-router-dom'
import './aca.css'

const AcaHero = () => {
  return (
    <div className="aca1">
        <div className="about_1">
          <div className="abo_left">
            <h3>Welcome to Wisdom Schools</h3>
            <h1>Academics</h1>
          </div>
          <div className="abo_right">
            <Link to="/"><p className='i'>Home</p></Link>
            <p>|</p>
            <span>Academics</span>
          </div>
        </div>
    </div>
  )
}

export default AcaHero
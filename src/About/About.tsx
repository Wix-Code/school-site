import React from 'react'
import './about.css'
import Icons from '../All/Icons'
import { Link } from 'react-router-dom'
import MIssion from './AllAbout/MIssion'
import Welcome from './AllAbout/Welcome'

const About = () => {
  return (
    <div className='about'>
      <div className="about1">
        <div className="about_1">
          <div className="abo_left">
            <h3>Welcome to Wisdom Schools</h3>
            <h1>About Us</h1>
          </div>
          <div className="abo_right">
            <Link to="/"><p className='i'>Home</p></Link>
            <p>|</p>
            <span>About Us</span>
          </div>
        </div>
      </div>
      <Welcome />
      <MIssion />
      <Icons />
    </div>
  )
}

export default About
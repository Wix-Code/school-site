import React from 'react'
import './welcome.css'
import { FaMessage } from 'react-icons/fa6'
import img from '../AllAbout/pic/stu8.jpg'


const Welcome = () => {
  return (
    <div className='welcome'>
      <div className="welcome1">
        <img src={img} alt="" />
      </div>
      <div className="welcome2">
        <div className="lov">
          <FaMessage />
          <h4>About Us</h4>
        </div>
        <h1>Welcome to Wisdom International School</h1>

        <p>Wisdom International School is a full boarding co- educational Christian Secondary School that is positioned to offer quality international education in a purpose-built, beautiful, serene campus with state-of-the-arts facility.</p>

        <p>At Wisdom International School, we believe that educating the heart of a champion is as important as building physical strength. Guided by a staff of highly qualified coaches, students hone athletic skill through healthy competition while also learning the value of hard work, discipline, teamwork, and sportsmanship as they strive for victory on and off of the playing field.</p>

        <div className="times">
          <p>The function of education is to teach one to think intensively and to think critically. Intelligence plus character - that is the goal of true education</p>
          <div className="times_div">
            <span>40X40</span>
            <span>Alexanda</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
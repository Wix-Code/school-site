import React from 'react'
import './section.css'
import { FaHeart } from 'react-icons/fa6'
import { TiTick } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import img from '../Sections/pic/main.jpg'


const Main = () => {
  return (
    <div className='main'>
      <div className="main1">
        <img src={img} alt="" />
        <h1>Ogbonna Ugochukwu .W.</h1>
        <i>Principal</i>
      </div>
      <div className="main2">
        <div className="heat">
          <FaHeart />
          <p>About Us</p>
        </div>
        <h1>Welcome to WIS.</h1>
        <span>Wisdom International School is a full boarding co- educational Christian Secondary School located at KM 1, Ihiagwa Nkaramoche Road at the outskirts of Owerri, the capital city of Imo State in the South east part of Nigeria.</span>
        <div className="good">
          <TiTick className='go' />
          <p>Individual focus</p>
        </div>
        <div className="good">
          <TiTick className='go' />
          <p>Individual focus</p>
        </div>
        <div className="good">
          <TiTick className='go'/>
          <p>Individual focus</p>
        </div>
        <div className="good">
          <TiTick className='go'/>
          <p>Individual focus</p>
        </div>
        <div className="good">
          <TiTick className='go'/>
          <p>Individual focus</p>
        </div>
        <Link to='/academics'><button>Learn more</button></Link>
      </div>
    </div>
  )
}

export default Main
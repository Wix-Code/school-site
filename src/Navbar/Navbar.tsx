import React, { useState } from 'react'
import './navbar.css'
import { FaBars, FaEnvelope, FaFacebookF, FaInstagram, FaTimes, FaTwitter } from 'react-icons/fa'
import { FaLinkedinIn, FaPhone, FaYoutube } from 'react-icons/fa6'
import { Paths } from '../AllData'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Navbar = () => {

  const location = useLocation()
  const{pathname} = location

  const [open, setOpen] = useState(false)

  return (
    <div className='navbar'>
      <div className="navv">
        <div className="navv1">
          <div className="enve">
            <FaEnvelope color='green' />
            <a href="mailto:ogbonna428alex@gmail.com">ogbonna428alex@gmail.com</a>
          </div>
          <div className="env">
            <div className="tel">
              <FaPhone color='red' />
              <a href="tel:+2348126829146">+234 812 682 9146</a>
            </div>
            <button>Portal Login</button>
          </div>
        </div>
      </div>
      <div className="nav">
        <div className="nav1">
          <div className="left">
            <Link to='/'><h1>W.I.S</h1></Link>
          </div>
          <div className={open ? "cent" : "cen"}>
            {
              Paths.map((item, i)=> {
                return (
                  <ul>
                    <Link to={item.path}><li onClick={()=>setOpen(false)} key={i} className={pathname === item.path ? "active" : ""} >{item.name}</li></Link>
                  </ul>
                )
              })
            }
          </div>
          <div className="right">
            <span><FaFacebookF /></span>
            <span><FaLinkedinIn /></span>
            <span><FaTwitter /></span>
            <span><FaYoutube /></span>
            <span><FaInstagram /></span>
          </div>
          <div className="nav_button">
            <button onClick={()=>setOpen(!open)}>{open ? <FaTimes className='time' /> : <FaBars className='time' />}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
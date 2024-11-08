import React from 'react'
import './footer.css'
import { FaFacebookF, FaInstagram, FaMessage, FaPhone, FaTwitter, FaYoutube } from 'react-icons/fa6'
import { Link, useLocation } from 'react-router-dom'
import { Paths } from '../AllData'

const Footer = () => {

  const location = useLocation()
  const {pathname} = location
  return (
    <div>
      <div className="footer1">
        <div className="foot">
          <h1>Get in touch</h1>
          <div className="foo">
            <span className='phone'><FaPhone /></span>
            <div className="let">
              <a href="tel:+2348126829146">+234 812 6829 146</a>
              <a href="tel:+2349134716652">+234 913 4716 652</a>
            </div>
          </div>
          <div className="foo">
            <span className='mes'><FaMessage /></span>
            <div className="let">
              <a href="mailto:ogbonna428alex@gmail.com">ogbonna428alex@gmail.com</a>
              <a href="mailto:ogbonna428alex@gmail.com">ogbonna428alex@gmail.com</a>
            </div>
          </div>
          <div className="foo">
            <span className='mes'><FaMessage /></span>
            <div className="let">
              <p>located at Ezialaukwu, Lorji,</p>
              <p>Aboh Mbaise, Imo State.</p>
            </div>
          </div>
          <div className="foo_icons">
            <span><FaFacebookF /></span>
            <span><FaTwitter /></span>
            <span><FaYoutube /></span>
            <span><FaInstagram /></span>
          </div>
        </div>
          <div className="foot1">
            <div className="links">
              <h2>About us</h2>
              <div className="sho">
                <p>Faq</p>
                <p>About</p>
                <p>Event Details</p>
                <p>Events</p>
                <p>Team</p>
                <p>contact us</p>
              </div>
            </div>
            <div className="shot">
              {
                Paths.map((item: {name: string, path: string})=>{
                  return(
                    <ul>
                      <Link to={item.path}>
                        <li key={item.name} className={pathname === item.path ? "active" : ""}>{item.name}</li>
                      </Link>
                    </ul>
                  )
                })
              }
            </div>
            <div className="links">
              <h2>Events</h2>
              <div className="shot">
                <p>Faq</p>
                <p>About</p>
                <p>Event Details</p>
                <p>Events</p>
                <p>Team</p>
                <p>contact us</p>
              </div>
            </div>
          </div>
      </div>
      <div className="footer2">
        <p><span>Alexanda</span> - 2024. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
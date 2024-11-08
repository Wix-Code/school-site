import React from 'react';
import './contat.css'
import { GoMail } from 'react-icons/go';
import { FaArrowRight, FaLocationDot, FaPhone } from 'react-icons/fa6';

const Sect = () => {
  return (
    <div className='sect'>
      <div className="sect1">
        <div className="sec_1">
          <button><GoMail /></button>
          <div className="mail">
            <h3>Email address</h3>
            <p>Send mail asap anytime</p>
          </div>
        </div>
        <div className="sec_2">
          <div className="mai">
            <a href="mailto:ogbonna428alex@gmail.com">ogbonna428alex@gmail.com</a>
            <a href="mailto:ogbonna428alex@gmail.com">ogbonna428alex@gmail.com</a>
          </div>
          <button><FaArrowRight /></button>
        </div>
      </div>
      <div className="sect1">
        <div className="sec_1">
            <button><FaPhone /></button>
            <div className="mail">
              <h3>Phone Number</h3>
              <p>Call us asap anytime</p>
            </div>
          </div>
          <div className="sec_2">
            <div className="mai">
              <a href="tel:+2348126829146">+234 812 682 9146</a>
              <a href="tel:+2349034716652">+234 903 471 6652</a>
            </div>
            <button><FaArrowRight /></button>
          </div>
      </div>
      <div className="sect1">
          <div className="sec_1">
            <button><FaLocationDot /></button>
            <div className="mail">
              <h3>Office Address</h3>
              <p>Send mail asap anytime</p>
            </div>
          </div>
          <div className="sec_2">
            <div className="mai">
              <a href="mailto:ogbonna428alex@gmail.com">ogbonna428alex@gmail.com</a>
              <a href="mailto:ogbonna428alex@gmail.com">ogbonna428alex@gmail.com</a>
            </div>
            <button><FaArrowRight /></button>
          </div>
      </div>
    </div>
  )
}

export default Sect
import React from 'react'
import { FaMap, FaPhoneAlt, FaRegHeart, FaUser } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

const Zip = () => {
  return (
    <div className="zipp">
      <div className='zip'>
        <div className="zip1">
          <div className="zip_icon">
            <FaRegHeart />
            <span>Call to Action</span>
          </div>
          <h1>Education is the key to unlocking the world, a passport to freedom
          </h1>
        </div>
        <div className="zip2">
          <div className="zip_int">
            <div className="zip_int1">
              <FaUser />
              <input type="text" placeholder='Enter your name' />
            </div>
            <div className="zip_int1">
              <FaPhoneAlt />
              <input type="text" placeholder='Enter your number' />
            </div>
          </div>
          <div className="zip_int">
            <div className="zip_int1">
              <FaLocationDot />
              <input type="text" placeholder='Enter your address' />
            </div>
            <div className="zip_int1">
              <FaMap />
              <input type="text" placeholder='Enter your zip code' />
            </div>
            <div className="zip_btn">
              <button>Get involved today</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Zip
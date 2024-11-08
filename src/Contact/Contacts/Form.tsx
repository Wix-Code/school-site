import React from 'react'
import { GoPencil } from "react-icons/go";


const Form = () => {
  return (
    <div className='formed'>
      <div className="form">
        <GoPencil />
        <p>Write here</p>
      </div>
      <h1>Get in touch</h1>
      <div className="input_contain">
        <div className="input_data">
          <div className="inpu">
            <label htmlFor="Full name">Full Name</label>
            <input type="text" placeholder='Enter Name' />
          </div>
          <div className="inpu">
            <label htmlFor="Email Address">Email Address</label>
            <input type="email" placeholder='Enter Name' />
          </div>
        </div>
        <div className="input_data">
          <div className="inpu">
            <label htmlFor="Password">Password</label>
            <input type="password" placeholder='Enter Password' />
          </div>
          <div className="inpu">
            <label htmlFor="Full name">Full Name</label>
            <input type="text" placeholder='Enter Name' />
          </div>
        </div>
        <div className="textera">
          <label htmlFor="message">Enter Message</label>
          <textarea name="" id="" placeholder='Enter message'></textarea>
        </div>
      </div>
      <div className="boton">
        <button>Contact Us</button>
      </div>    
    </div>
  )
}

export default Form
import React, { useState } from 'react'
import { Slid } from '../../AllData';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Slide = () => {

  const [state, setState]=useState<number>(0)

  const click = ({direct}:{direct :string}) => {
    let nextslide;
    if(direct === "p"){
      nextslide = state === 2 ? 0 : state + 1
    } else{
      nextslide = state === 0 ? 2 : state - 1
    } setState(nextslide)
  }

  return (
    <div className='slid'>
      <div className="sliding" style={{backgroundImage:`linear-gradient(to bottom, rgba(0,0, 0, 0.5), rgba(0,0,0,0.5)), url(${Slid[state].pic})`}}>
        <div className="sled">
          <h2>Welcome To:</h2>
          <h1>{Slid[state].head}</h1>
          <h3>{Slid[state].para}</h3>
          <div className="sled_btn">
            <Link to="/about"><button className='btn2'>About Us</button></Link>
            <button className='btn1'>Apply now</button>
          </div>
          <div className="slid_btn">
          <button className='left' onClick={()=>click({ direct : "p" })}>
            <FaAngleLeft />
          </button>
          <button className='right' onClick={()=>click({ direct : "n" })}>
            <FaAngleRight />
          </button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Slide
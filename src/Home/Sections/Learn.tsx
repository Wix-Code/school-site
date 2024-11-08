import React from 'react'
import './section.css'
import { FaRegHeart } from "react-icons/fa6";
import { Lean } from '../../AllData';


const Learn = () => {
  return (
    <div className='learn_container'>
      <div className="hat">
        <div className="spy">
          <FaRegHeart />
          <p>Insights</p>
        </div>
        <h1>Learning Is Just the Beginning</h1>
      </div>
      <div className="learn">
        {
          Lean.map((item)=>{
            return(
              <div className="learn1">
                <div className="learn_img">
                  <img src={item.pic} alt="" />
                </div>
                <div className="learn_contain">
                  <h1>{item.head}</h1>
                  <p>{item.para.slice(0,40)}...</p>
                  <button>Read More</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Learn
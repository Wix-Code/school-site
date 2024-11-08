import React from 'react'
import './section.css'
import { Skeme } from '../../AllData'
import { FaCalendar, FaRegHeart } from 'react-icons/fa6'

const Scheme = () => {
  return (
    <div className="schme">
      <div className='scheme'>
      <div className="hat">
       <div className="spy">
         <FaRegHeart />
         <p>Trending Cause</p>
       </div>
        <h1>Forecast Of Event</h1>
      </div>
      <div className="learn">
        {
          Skeme.map((item)=>{
            return(
              <div className="learn1">
                <div className="learn_contain">
                  <div className="skeme">
                    <FaCalendar className='heart' />
                    <p>{item.head}</p>
                  </div>
                  <h1>{item.para}</h1>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  </div>
  )
}

export default Scheme
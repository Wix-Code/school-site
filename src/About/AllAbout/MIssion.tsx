import React from 'react'
import './mission.css'
import { Abot } from '../../AllData'
import img from '../AllAbout/pic/stu1.jpg'

const MIssion = () => {
  return (
    <div className='mission'>
      <div className="mission1">
        <img src={img} alt="" />
      </div>
      <div className="mission2">
        {
          Abot.map((item)=>{
            return(
              <div className="mison">
                <div className="mison1">
                  <img src={item.pic} alt="" />
                </div>
                <div className="mison2">
                  <h1>{item.head}</h1>
                  <p>{item.para}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default MIssion
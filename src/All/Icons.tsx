import React from 'react'
import './icons.css'
import { Ico } from '../AllData'

const Icons = () => {
  return (
    <div className='all_icons'>
      <div className="all_icon">
        {
          Ico.map((item)=>{
            return(
              <div className="all_ico">
                <img src={item.ico} alt="" />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Icons
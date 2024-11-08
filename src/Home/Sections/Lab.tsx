import React from 'react'
import { Sector } from '../../AllData'
import { Link } from 'react-router-dom'
import img from '../Sections/pic/stu1.jpg'


const Lab = () => {
  return (
  <div className='mission'>
    <div className="mission1">
      <img src={img} alt="" />
    </div>
    <div className="mission2">
      {
        Sector.map((item)=>{
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
      <div className="lab">
        <Link to="/about"><button>Read More</button></Link>
      </div>
    </div>
  </div>
  )
}

export default Lab
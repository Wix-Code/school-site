import React from 'react'
import { Acad } from '../../AllData'

const Aim : React.FC = () => {
  return (
    <div className='mission'>
      <div className="mission1">
        <img src="./pic/stu1.jpg" alt="" />
      </div>
      <div className="mission2">
        {
          Acad.map((item)=>{
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

export default Aim
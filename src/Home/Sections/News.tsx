import React from 'react'
import { Blo, Lean } from '../../AllData'
import { FaRegHeart } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const News = () => {
  return (
    <div className='learn_container'>
      <div className="hat">
       <div className="spy">
         <FaRegHeart />
         <p>Events</p>
       </div>
        <h1>Featured News</h1>
      </div>
      <div className="learn">
        {
          Blo.map((item, index)=>{
            return(
              <div className="learn1" key={index}>
                <div className="learn_img">
                  <img src={item.pic} alt="" />
                </div>
                <div className="learn_contain">
                  <h1>{item.head}</h1>
                  <p>{item.para.slice(0,40)}...</p>
                  <Link to={`/single/${item.id}`}><button>Read More</button></Link>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default News
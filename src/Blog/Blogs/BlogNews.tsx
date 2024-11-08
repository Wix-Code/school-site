import React from 'react'
import './blogs.css'
import { Lean } from '../../AllData'
import { Link } from 'react-router-dom'

const BlogNews = () => {
  return (
    <div>
      {
        Lean.map((item, index)=>{
          return(
            <div className="blog1" key={index}>
              <Link to={`/single/${item.id}`}><img src={item.pic} alt="" /></Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default BlogNews
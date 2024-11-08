import React from 'react'
import { Link } from 'react-router-dom'
import './blogs.css'

const BlogHero = () => {
  return (
    <div className="blog_hero">
        <div className="about_1">
          <div className="abo_left">
            <h3>Welcome to Wisdom Schools</h3>
            <h1>Blog</h1>
          </div>
          <div className="abo_right">
            <Link to="/"><p className='i'>Home</p></Link>
            <p>|</p>
            <span>Blog</span>
          </div>
        </div>
    </div>
  )
}

export default BlogHero
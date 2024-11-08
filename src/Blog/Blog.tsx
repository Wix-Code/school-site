import React from 'react'
import './blog.css'
import BlogHero from './Blogs/BlogHero'
import News from '../Home/Sections/News'
import Icons from '../All/Icons'

const Blog = () => {
  return (
    <div>
      <BlogHero />
      <News />
      <Icons />
    </div>
  )
}

export default Blog
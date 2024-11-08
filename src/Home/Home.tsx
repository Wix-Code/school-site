import React from 'react'
import './home.css'
import Icons from '../All/Icons'
import Learn from './Sections/Learn'
import Lab from './Sections/Lab'
import Scheme from './Sections/Scheme'
import News from './Sections/News'
import Skills from './Sections/Skills'
import Main from './Sections/Main'
import Mapping from './Sections/Mapping'
import Zip from './Sections/Zip'
import Slide from './Sections/Slide'

const Home = () => {
  return (
    <div className='home'>
      <Slide />
      <Main />
      <Learn />
      <Scheme />
      <Zip />
      <News />
      <Lab />
      <Skills />
      <Icons />
      <Mapping />
    </div>
  )
}

export default Home
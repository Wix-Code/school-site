import React from 'react'
import './academics.css'
import Icons from '../All/Icons'
import Aim from './Acad/Aim'
import Achieve from './Acad/Achieve'
import AcaHero from './Acad/AcaHero'


const Academics : React.FC = () => {
  return (
    <div className='academics'>
      <AcaHero />
      <Achieve />
      <Aim />
      <Icons />
    </div>
  )
}

export default Academics
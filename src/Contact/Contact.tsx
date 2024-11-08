import React from 'react'
import "./contact.css"
import Sect from './Contacts/Sect'
import Form from './Contacts/Form'
import ConHero from './Contacts/ConHero'
import Mapping from '../Home/Sections/Mapping'

const Contact = () => {
  return (
    <div>
      <ConHero />
      <div className='contat'>   
        <Sect />
        <Form />
      </div>
      <Mapping />
    </div>
  )
}

export default Contact
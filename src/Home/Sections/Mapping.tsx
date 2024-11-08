import React from 'react'
import './section.css'

const Mapping : React.FC = () => {
  return (
    <div className='mapping'>
      <iframe className='mapped' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d427463.81438948587!2d7.148837881442712!3d5.5030297191827815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1042f23c4043d1e1%3A0x53f612beca3d6930!2sAboh-Mbaise%2C%20Imo!5e0!3m2!1sen!2sng!4v1720188180703!5m2!1sen!2sng" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Mapping
import React from 'react'
import { useParams } from 'react-router-dom'
import { Blo } from '../AllData'
import './single.css'

const Single : React.FC = () => {

  const { id } = useParams<{ id: string }>();

  const details = Blo.find((item)=>{
    return item.id === parseInt(id || "")
  })

  if (!details) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className='single'>
      <h1>{details.head}</h1>
      <img src={details.pic} alt="" />
      <p>{details.para}</p>
    </div>
  )
}

export default Single
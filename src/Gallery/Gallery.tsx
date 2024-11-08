import React, { useState } from 'react'
import './gallery.css'
import { Images } from '../AllData'
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa'

const Gallery = () => {
  
  const [select, setSelect] = useState<string>("All")
  const [view, setView] = useState<number | null>(null)

  const Clicked = (i : number) => {
    setView(i)
  }
  const Slide = ({direct} : { direct : string}) => {

    if(view === null ) return;

    let nextslide : number;
    if (direct === "l") {
     nextslide = view === 0 ? 11 : view - 1
    } else {
     nextslide = view === 11 ? 0 : view + 1
    }
    setView(nextslide)
  }

  return (
    <div className='gallary'>
      {
        view !== null && 
        <div className="view">
          <button onClick={()=>Slide({ direct : "l" })}><FaArrowLeft /></button>
          <img src={Images[view].img} alt="" />
          <button onClick={()=>Slide({ direct : "r" })}><FaArrowRight /></button>
          <div className="close">
            <button onClick={()=>setView(null)}><FaTimes /></button>
          </div>
        </div>
      }
      <div className="opt">
        <ul>
          <li onClick={()=>setSelect("All")} className={select === "All" ? "active" : ""}>All</li>
          <li onClick={()=>setSelect("GroupA")} className={select === "GroupA" ? "active" : ""}>GroupA</li>
          <li onClick={()=>setSelect("GroupB")} className={select === "GroupB" ? "active" : ""}>GroupB</li>
        </ul>
      </div>
      <div className="image">
        {
          Images.filter((item)=> select === "All" ? true : item.cat === select).map((item, i)=>{
            return(
              <div className="images" key={i}>
                <img onClick={()=>Clicked(i)} src={item.img} alt="" />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Gallery
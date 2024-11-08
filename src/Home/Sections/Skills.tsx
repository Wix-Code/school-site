import React from 'react'
import './section.css'
import { FaHeart } from 'react-icons/fa6'
import { Skill } from '../../AllData'

const Skills = () => {
  return (
    <div className='skill'>
      <div className="skill1">
        <div className="heat">
          <FaHeart />
          <p>Skills</p>
        </div>
        <h1>Our Skillset <span>Stand</span> On Our Works.</h1>
        <p>The beautiful thing about learning is that no one can take it away from you.</p>
        <div className="circle_container">
          <div className="circle">
            <div className="cir">
              <h1>97%</h1>
            </div>
            <p>Complete Project</p>
          </div>
          <div className="circle">
            <div className="cir">
              <h1 className='fist'>94%</h1>
            </div>
            <p>Project Per Month</p>
          </div>
        </div>
      </div>
      <div className="skill2">
        {
          Skill.map((item)=>{
            return (
              <div className="skills">
                <img src={item.pic} alt="" />
                <div className="skill_content">
                  <p>{item.para}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Skills
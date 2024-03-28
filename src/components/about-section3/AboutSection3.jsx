import React from 'react'
import Title from '../title/Title'
import image from "./../../asset/img/TourPlans-img.png"
import './AboutSection3.css'

const AboutSection3 = () => {
  return (
    <div className='section3'>
        <div className="leftimg">
            <img src={image} alt="" />
        </div>
        <div className='right-desc'>
        <Title title = "TREND" h1 = "Our Popular Tour Plans" offer="offer1" sectiontitle="section1-title1"/>
        <p className='ser-desc1'>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium.</p>
       <div className='percent'>
       <div className='percent1'><span>78%</span>
       <p>Vacations</p></div>
       <div className='percent1'><span>55%</span>
       <p>Honeymoon</p></div>
       </div>
       
        </div>
        
    </div>
  )
}

export default AboutSection3
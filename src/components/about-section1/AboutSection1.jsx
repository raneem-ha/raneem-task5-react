import React from 'react'
import './AboutSection1.css'
import image from './../../asset/img/promotion_img.png'
import Title from '../title/Title'

const AboutSection1 = () => {
  return (
    <div className='section1'>
        <div className="left-description">
        <Title title = "PROMOTION" h1 = "We Provide You Best Europe Sightseeing Tours" offer="offer1"/>
        <p className='ser-desc'>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat
         nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!</p>
         <button className=' explore view1'>View Packages</button>


        </div>
        <div className="rigrt">
       <img src={image} alt="" /></div>

    </div>
  )
}

export default AboutSection1
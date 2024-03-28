import React from 'react'
import './TrendContainer.css'
import Title from '../title/Title'

const TrendContainer = (props) => {
  return (
   
        <div className='section-1'>
        <Title title = "TRENDY" h1 = "Our Trending Tour Packages" sectiontitle = "section1-title"/>
    <div className='trend-container'>
        {props.children}</div>
    </div>
  )
}

export default TrendContainer
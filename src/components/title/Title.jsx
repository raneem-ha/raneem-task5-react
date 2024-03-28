import React from 'react'
import './Title.css'

const Title = (props) => {
  return (
    <div className={props.sectiontitle}> <span className='gategory'>{props.title}</span>
    <h1 className={props.offer} >{props.h1}</h1></div>
  )
}

export default Title
import React from 'react'
import './PromotionStyle.css'

const Promotion = (props) => {
  return (
    <div className='promotion' style={{backgroundImage:`url(${props.pimage})`}}>
        <div className="pro-content">
        <span className='pro-subtitle'>{props.subtitle}</span>
        <h1>{props.title}</h1>
        <button className='view'>{props.btn}</button>
        </div>
       
    </div>
  )
}

export default Promotion
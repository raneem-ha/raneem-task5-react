import React from 'react'
import './FooterStyle.css'

const Footer = (props) => {
  return (
  
       <div>
    <div className='footer' style={{backgroundImage:`url(${ props.fimage})`}}>
        {props.children}
        
        </div>
        <p className='copy'>{props.copy}</p>
        </div>
    
  )
}

export default Footer
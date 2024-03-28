import React from 'react'
import './FooterComponent.css'

const FooterComponent = ({footerlist,title}) => {
  return (
    <div className='footer-list'><h2 className='sub-title'>{title}</h2>
    <ul className='footer-ul'>
        {footerlist.map((element , index)=>{return(
            <li key={index}>  {element} </li>

        )})}

        </ul></div>
  )
}

export default FooterComponent
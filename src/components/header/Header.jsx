import './Header.css'
import React from 'react'
const Header = ({children,image}) => {
  return (
    <div className ="header" style={{backgroundImage:`url(${image})`}}>
     
    {children}
      
           
            
            

    </div>
  )
}

export default Header
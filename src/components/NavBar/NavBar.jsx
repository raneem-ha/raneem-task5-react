import { useState } from 'react'
import './NavBarStyle.css'
import { Link } from 'react-router-dom'



    const NavBar = ( {menu , logo, btn}) => {
      const [list,setlist] = useState(false)
      return (
        <div>
        <nav>
          <div className='logo-div'>
           
            <img  className="logo-img"  src={logo} alt="" />
            </div>
            

            <ul >
            
               {menu.map ((element,index) => { 
                return (
                
                  <li key={index}> <Link to={element.path}> {element.title} <div className={element.class}/> </Link></li>
                  
                  )}
                
              
     )}
            </ul>
            <button className='btn-get'>{btn}</button>
         
            <button className="menu" onClick={()=>{setlist(!list)}}><i className="fa-solid fa-bars"></i></button>
          
        </nav>
        
          <div className='media-list' style={{display : (list)? "block" : "none"}}>
          <i className="fa-solid fa-xmark close" onClick={()=>{setlist(!list)}}></i>

          <ul className='menu1' >
          
             {menu.map ((element,index) => { 
              return (
              
                <li key={index} > <Link to={element.path}>  {element.title}</Link>  </li>
                
                )}
              
            
   )}
          </ul>  
          <button className=' btn-get1'>{btn}</button>

    </div>   
    </div> 
  
      )
    }


export default NavBar


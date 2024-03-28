import React from 'react'
import './SocialMedia.css'

const SocialMedia = ({logo , description , icons}) => {
  return (
    <div className='social'>
        <img  className="logo-img"  src={logo} alt="" />
        <p className='social-desc'>{description}</p>
        <div  className="soial-icon">
      {icons.map((element , index)=>{
        return(
            <i key={index} className={element } ></i> 
        )
      })}
</div>
</div>

  )
}

export default SocialMedia
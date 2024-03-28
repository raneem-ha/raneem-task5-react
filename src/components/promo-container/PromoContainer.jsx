import React from 'react'
import './PromoContainer.css'

const PromoContainer = (props) => {
  return (

    <div className='promo-container'>{props.children}</div>

  )
}

export default PromoContainer
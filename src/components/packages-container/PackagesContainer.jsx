
import React from 'react'
import './PackagesContainer.css'

const PackagesContainer = (props) => {
  return (
    <div className='package-container'>
    {props.children}</div>

  )
}

export default PackagesContainer
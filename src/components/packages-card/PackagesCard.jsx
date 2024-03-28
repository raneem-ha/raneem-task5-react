import React from 'react'
import './PackagesCard.css'

const PackagesCrad = (props) => {
  return (
    <div className='package-card'>
        <img src={props.img} alt="" />
        <div className="date">
            <span>{props.date}</span>
            <span>{props.people}</span>

        </div>
        < h2 className='place'>{props.place}</h2>
        <div className="package-desc">{props.desc}</div>
        <div className='price-rate'>
            <span className='price'>{props.price}</span>
            <span className='rate'>< i className="fa-solid fa-star"></i> {props.rate}</span>
        </div>

    </div>
  )
}

export default PackagesCrad
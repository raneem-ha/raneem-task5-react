import './CardStyle.css'

const Card = (props) => {
  return (
    <div className='card'>
        <div className='card-img'>
        <img className='ser-img' src={props.img} alt="" /></div>
        <h2 className='ser-title'>{props.title}</h2>
        <p className='ser-desc'>{props.description}</p>

    </div>
  )
}

export default Card
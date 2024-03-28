import './AboutVedio.css'
import image from './../../asset/img/video-play.svg'
import image1 from './../../asset/img/video-banner.png'


const AboutVedio = ({titleclass}) => {
  return (
    <div className='section2'>
      <img src={image1} className="vedio-img" alt="" style={{position:'absolute'}} />
    
      <h1 className= {titleclass} >Wanderlust</h1>
      <img src={image} alt="" style={{zIndex : 9}} />
    </div>
  )
}

export default AboutVedio
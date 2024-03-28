import './Hero.css'

const Hero = ({title , titleclass}) => {
  return (
   <div className='hero' >
   
    <h1 className= {titleclass} >{title}</h1>
   </div>
  )
}

export default Hero
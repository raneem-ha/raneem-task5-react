import './Tcard.css'

const Tcard = ({img ,img1 ,list ,place ,icon ,desc ,btn}) => {
  return (
    <div className='trend-card'>

    <img src={img}  className='tcard-img'  alt="" />
    <div className="outcircle">
                   <img src={img1} className='smallcircle' alt="" />
                   </div>
                   <div className='count'>
                    {list.map((element, index)=>{return(
                         
                   
                   <div  key={index} className='numpeople'> < i className={element.svg}></i><span>{element.span}</span></div>  )
                      
                }

                    )}
                   
              </div>
              <div className='swis-star'>
              <h2>{place}</h2>
                    <div  className="stars">
              {icon.map((element, index)=>{return(
                         
                   
                         <i key={index} className={element}></i>  )
                            
                      }
      
                          )}
                          </div>
                          </div>
                          <p className='parg'>{desc}</p>
                          <button className=' explore'>{btn}</button>

                </div> 
               
  )
}

export default Tcard
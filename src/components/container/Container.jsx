import './ContainerStyle.css'
import Title from '../title/Title'

const Container = (props) => {
  return (
    <div className='section-1'>
       <Title title = "CATEGORY" h1 = "We Offer Best Services" sectiontitle = "section1-title"/>
    <div className='container'>
{props.children}
    </div>
    </div>
  )
}

export default Container 
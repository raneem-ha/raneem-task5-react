import imgs from './../../asset/img/about-bg.png'
import logo from "./../../asset/img/logo.png"
import NavBar from '../NavBar/NavBar'
import Hero from '../hero/Hero'
import Header from '../header/Header'

import FooterComponent from '../FooterComponent/FooterComponent';
import SocialMedia from '../socialmedia/SocialMedia';
import logob from './../../asset/img/logo-black.png'
import Footer from '../footer/Footer';
import fimage from "./../../asset/img/footer-bg.png";
import AboutSection1 from '../about-section1/AboutSection1'
import AboutVedio from '../about-vedio/AboutVedio'
import AboutSection3 from '../about-section3/AboutSection3'





const About = () => {
 
  return (
    <>
    <Header image = {imgs}>
    <NavBar menu ={[{title :"Home" ,path :"/"} ,{title :"About" , class : "home" ,path :"/about"} , {title :"Packages", path :"/packages" } ,{title :"Services"} ]} logo = {logo}  btn ="Get In Touch " /> 
   <Hero  title="About Us" titleclass = "about-title"/></Header>
   <AboutSection1 />
   <AboutVedio titleclass ='about-title' />
   <AboutSection3/>






<Footer fimage={fimage} copy ={"Copyright @ Xpro 2023 All Rights Reserved."}>
  
<SocialMedia logo={logob}  description="Travel helps companies manage payments easily." icons = {["fa-brands fa-linkedin-in","fa-brands fa-facebook-messenger","fa-brands fa-twitter","fa-solid fa-infinity"]}/> 
<FooterComponent title="Company" footerlist ={["About Us","Careers","Blog","Pricing"]}/>
<FooterComponent title="Destinations" footerlist ={["Maldives","Los Angelas","Las Vegas","Torronto"]}/>
</Footer>
</>
  )
}

export default About
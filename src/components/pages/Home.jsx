import React from 'react'
import logo from "./../../asset/img/logo.png"

import NavBar from '../NavBar/NavBar'
import Hero from '../hero/Hero'
import Header from '../header/Header'
import Card from '../card/Card'
import serviceimg1 from './../../asset/img/service-1.png'
import serviceimg2 from './../../asset/img/service-2.png'
import serviceimg3 from './../../asset/img/service-3.png'
import serviceimg4 from './../../asset/img/service-4.png'
import Container from '../container/Container'
import Tcard from '../tcard/Tcard'
import n1 from './../../asset/img/n1.png'
import n2 from './../../asset/img/n2.png'
import n3 from './../../asset/img/n3.png'
import flag1 from './../../asset/img/flag-1.png'
import flag2 from './../../asset/img/flag-2.png'
import flag3 from './../../asset/img/flag-3.png'
import TrendContainer from '../trend-container/TrendContainer';
import FooterComponent from '../FooterComponent/FooterComponent';
import SocialMedia from '../socialmedia/SocialMedia';
import logob from './../../asset/img/logo-black.png'
import Footer from '../footer/Footer';
import imgs from "./../../asset/img/header-bg.png";
import fimage from "./../../asset/img/footer-bg.png";
import Promotion from '../promption/Promotion';
import imag1 from './../../asset/img/e1.png'
import imag2 from './../../asset/img/e2.png'
import PromoContainer from '../promo-container/PromoContainer';



const Home = () => {
 
     const services =[{img : serviceimg1 , title : "Guided Tours", description :"sunt qui repellat saepe quo velit aperiam id aliquam placeat."},
    { img :serviceimg2, title : "Best Flights Options", description :"sunt qui repellat saepe quo velit aperiam id aliquam placeat."},
    {img : serviceimg3, title : "Religious Tours" , description : "sunt qui repellat saepe quo velit aperiam id aliquam placeat."},
  { img : serviceimg4 , title : "Medical insurance"  , description : "sunt qui repellat saepe quo velit aperiam id aliquam placeat."}]
  
  const trendcard =[{img:n1 , img1:flag1 ,list: [{svg : "fa-regular fa-calendar" , span :"8 days"} , {svg : "fa-regular fa-user" , span : "30 People going"}] , place : "Switzerland" ,
  icon : ["fa-solid fa-star" ,"fa-solid fa-star" ,"fa-solid fa-star" ,"fa-solid fa-star" ,"fa-solid fa-star" ] , desc:"Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.",
   btn :"Explore Now" },
  {img:n2 , img1 : flag2  ,list:[{svg : "fa-regular fa-calendar" , span :"8 days"} , {svg : "fa-regular fa-user" , span : "60 People going"}] , place : "Amazon" ,
  icon:  ["fa-solid fa-star" ,"fa-solid fa-star" ,"fa-solid fa-star" ,"fa-solid fa-star" ,"fa-solid fa-star" ] , desc: "Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.",
   btn:"Explore Now" },
  { img:n3  , img1:flag3 , list:[{svg : "fa-regular fa-calendar" , span :"8 days"} , {svg : "fa-regular fa-user" , span : "120 People going"}] , place : "Giza", 
  icon : ["fa-solid fa-star" ,"fa-solid fa-star" ,"fa-solid fa-star" ,"fa-solid fa-star" ,"fa-solid fa-star" ] , desc :"Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos."
  , btn : "Explore Now" }]
  
  const promo = [{ pimage :imag1 ,subtitle:"Promotion" , title:"Explore Nature" , btn:"View Packages"} , 
  { pimage :imag2 , subtitle:"Promotion" , title:"Explore Cities" , btn:"View Packages"}]
  
    return (
    <> 
    
  <Header image = {imgs}>
    <NavBar menu ={[{title :"Home" , class : "home" , path :"/"} ,{title :"About" ,path :"./about"} , {title :"Packages", path:"/packages" } ,{title :"Services"} ]} logo = {logo}  btn ="Get In Touch " /> 
   <Hero  title="No matter where you’re going to, we’ll take you there" titleclass = "hero-title"/></Header>
   <Container>
  {services.map((element,index)=>{
    return (<div key={index}><Card img = {element.img} title = {element.title} description = {element.description} /></div>);
  
    
  })}
   </Container>
   <PromoContainer>
   {promo.map((element,index)=>{
    return (<Promotion key={index} pimage = {element.pimage} subtitle = {element.subtitle} title= {element.title} btn = {element.btn}/>);
  
    
  })}
   </PromoContainer>
  
   <TrendContainer >
   {trendcard.map((element,index)=>{
    return (<div key={index}><Tcard img = {element.img}  img1 = {element.img1} list = {element.list} place= {element.place} icon={element.icon} desc = {element.desc} btn = {element.btn} countclass={element.countclass} tcardimg = {element.tcardimg}/></div>);
  })}
   
  
  
  
    </TrendContainer>
    <Footer fimage={fimage} copy ={"Copyright @ Xpro 2023 All Rights Reserved."}>
  
    <SocialMedia logo={logob}  description="Travel helps companies manage payments easily." icons = {["fa-brands fa-linkedin-in","fa-brands fa-facebook-messenger","fa-brands fa-twitter","fa-solid fa-infinity"]}/> 
    <FooterComponent title="Company" footerlist ={["About Us","Careers","Blog","Pricing"]}/>
    <FooterComponent title="Destinations" footerlist ={["Maldives","Los Angelas","Las Vegas","Torronto"]}/>
    </Footer>
    </>
  
     
   
     
    
    );
  
}

export default Home
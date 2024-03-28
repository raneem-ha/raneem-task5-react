import imgs from './../../asset/img/packages-bg.png'
import logo from "./../../asset/img/logo.png"
import NavBar from '../NavBar/NavBar'
import Hero from '../hero/Hero'
import Header from '../header/Header'

import FooterComponent from '../FooterComponent/FooterComponent';
import SocialMedia from '../socialmedia/SocialMedia';
import logob from './../../asset/img/logo-black.png'
import Footer from '../footer/Footer';
import fimage from "./../../asset/img/footer-bg.png";
import React from 'react'
import city1 from "./../../asset/img/city-1.png"
import city2 from "./../../asset/img/city-2.png"
import city3 from "./../../asset/img/city-3.png"
import city4 from "./../../asset/img/city-4.png"
import city5 from "./../../asset/img/city-5.png"
import city6 from "./../../asset/img/city-6.png"
import PackagesContainer from '../packages-container/PackagesContainer'
import PackagesCard from '../packages-card/PackagesCard'


const Packages = () => {
  const packcard =[{img:city1 ,date :" 27, September 2023" , people : "30+ People",place : "Maldives" ,
  desc :"Qui tempore voluptate qui quia commodi rem praesentium alias et." ,price:"3000 $" , rate :"5.0"},
  {img:city2 ,date :" 13, October 2023" , people : "120+ People",place : "Switzerland" ,
  desc :"Qui tempore voluptate qui quia commodi rem praesentium alias et." ,price:"1290 $" , rate :"4.9"},
  {img:city3 ,date :" 2, November 2022" , people : "139+ People",place : "Berlin" ,
  desc :"Qui tempore voluptate qui quia commodi rem praesentium alias et." ,price:"2790 $" , rate :"5.0"},
  {img:city4 ,date :" 14, December 2022" , people : "50+ People",place : "Torronto" ,
  desc :"Qui tempore voluptate qui quia commodi rem praesentium alias et." ,price:"1110 $" , rate :"4.0"},
  {img:city5 ,date :" 20, September 2022" , people : "80+ People",place : "Baku" ,
  desc :"Qui tempore voluptate qui quia commodi rem praesentium alias et." ,price:"1220 $" , rate :"4.5"},
  {img:city6 ,date :" 27, August 2022" , people : "100+ People",place : "Chinese" ,
  desc :"Qui tempore voluptate qui quia commodi rem praesentium alias et." ,price:"2500 $" , rate :"5.0"}]
   
  return (
    <>
    <Header image = {imgs}>


    <NavBar menu ={[{title :"Home" ,path :"/"} ,{title :"About" ,path :"/about"} , {title :"Packages",  class : "home" ,path :"/packages" } ,{title :"Services"} ]} logo = {logo}  btn ="Get In Touch " /> 
   <Hero  title="Travel With Us" titleclass = "about-title"/></Header>

   <PackagesContainer>
   {packcard.map((element,index)=>{
    return (<PackagesCard key={index} img = {element.img} date = {element.date} people= {element.people} place = {element.place} desc ={element.desc} price={element.price} rate = {element.rate}/>);
  
    
  })}
   </PackagesContainer>
  

   


<Footer fimage={fimage} copy ={"Copyright @ Xpro 2023 All Rights Reserved."}>
  
<SocialMedia logo={logob}  description="Travel helps companies manage payments easily." icons = {["fa-brands fa-linkedin-in","fa-brands fa-facebook-messenger","fa-brands fa-twitter","fa-solid fa-infinity"]}/> 
<FooterComponent title="Company" footerlist ={["About Us","Careers","Blog","Pricing"]}/>
<FooterComponent title="Destinations" footerlist ={["Maldives","Los Angelas","Las Vegas","Torronto"]}/>
</Footer>
</>
  
     
   
     
    
    );
  
}
export default Packages
import React, { useState } from 'react'
import image1 from '../images/icons8-hamburger-menu-50.png'
import image2 from '../images/icons8-cross-50.png'

export default function Nav2() {
    const [navDis,setNavDis]=useState(false);
    const [Img , setImg]=useState(false)
  return (
    <nav className='nav2'>
        {
            navDis ?
            <img src={image2} alt="" onClick={()=>setNavDis(!navDis)} style={{position:'sticky', left:'5%', width:'2em', padding:'0.4em 0px', backgroundColor:'rgb(192, 176, 147)'}} />  
            :
            <img src={image1} alt="" onClick={()=>setNavDis(!navDis)} style={{position:'sticky', left:'5%', width:'3em', padding:'0.4em 0px', backgroundColor:'rgb(192, 176, 147)'}} />
        }
         
         {
            navDis ?
            <div className="nav2list">

             <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/'>Latest</a></li>
          <li><a href='/'>Brands</a></li>
          <li><a href='/about'>About Us</a></li>
          <li><a href='/contact'>Contact</a></li>
        </ul>
            </div>
        : null
        } 
      
        </nav>
  )
}

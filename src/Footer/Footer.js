import React from 'react'
import './Footer.css'
import { FiInstagram } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='mainf'>
       <div className='foter'>
          
        <div className='foternames'>
                    <div style={{height:"40px",width:"250px",backgroundColor:"#6f9196 ",marginTop:"50px",marginLeft:"20px",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"20px",cursor:"pointer"}}>
                      <span style={{fontSize:"30px",color:"white"}}>Chintu Foods</span>
                  
                    </div>
          <div className='firstone'>
           <div>
             <h3>Indian</h3>
                <p> Chicken Biryani</p> 
                <p> Egg rice</p>
                <p> Chicken Fry</p>
                <p> Veg Biryani</p>
                
            </div>
          
          </div>
          
          <div className='secone'>
           <div>
             <h3>Korea</h3>
                <p> Veg Noodles</p> 
                <p> Egg Noodles</p>
                <p> Chicken Fry</p>
                <p> Prawns</p>
                
            </div>
          
          </div>
          <div className='thirdone'>
           <div>
             <h3>East</h3>
                <p> Veg Noodles</p> 
                <p> Egg Noodles</p>
                <p> Chicken Fry</p>
                <p> Prawns</p>
                
            </div>
          
          </div>

          <div className='fourdone'>
           <div>
             <h3>Freanch</h3>
                <p> Veg Noodles</p> 
                <p> Egg Noodles</p>
                <p> Chicken Fry</p>
                <p> Prawns</p>
                
            </div>
          
          </div>
          <div className='fivedone'>
           <div>
             <h3>Chinese</h3>
                <p> Veg Noodles</p> 
                <p> Egg Noodles</p>
                <p> Chicken Fry</p>
                <p> Prawns</p>
                
            </div>
          
          </div>
          
        </div>
           <div className='line'>

           </div>

            <div className='icons'>
              <div><FiInstagram /></div>
              <div>  <FaFacebook /></div>
              <div>  <FaTwitter /></div>
              <div>  <FaLinkedin /></div>
              <div>   <FaGooglePlay /></div>
            
            </div>
           <div className='rights'>
            <p>Copyright. All rights reserved</p>
           </div>

              
       </div>
       
    </div>
  )
}

export default Footer

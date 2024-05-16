import React, { useState } from 'react'
import './Upper.css'
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { IoRestaurant } from "react-icons/io5";

const Upper = () => {
  const[data,setData]=useState();

  return (
    <div className='upper'>
      
       <h3 style={{color:"red" , marginLeft:"40px" ,marginTop:"7px"}}>CHINTU</h3>  <h3 style={{color:"blue" ,marginTop:"7px"}} >FOODS</h3> 
       <IoRestaurant className='rest-icon' size={18}/>
            
          <div  className='search'>
                      
                       <CiSearch size={20} className='search-icon'/>
                    
             <input type='search'   />
                    
          </div>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
              <IoCartOutline className='cart-icon'/>
                <span style={{cursor:"pointer"}} >cart</span>
          </div>
        
   
    </div>
  )
}

export default Upper

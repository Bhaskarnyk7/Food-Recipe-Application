import React,{ useState } from 'react'
import { FaBars, FaHome } from "react-icons/fa";
import { RiAccountCircleFill, RiCursorFill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { IoWallet } from "react-icons/io5";
import { MdOutlineHelp } from "react-icons/md";
import { NavLink } from 'react-router-dom';

import { IoFastFoodOutline } from "react-icons/io5";
import Upper from '../../Upper/Upper';
const Navbar = ({children}) => {
    const [isOpen,setIsOpen]=useState(false);
    const toggle =()=> setIsOpen(!isOpen);
    const menuItem=[
        {
            path:'/',
            name:"Home",
            icon:<FaHome/>
        },
        {
            path:'/Myaccount',
            name:"Myaccount",
            icon:<RiAccountCircleFill/>

        },
        {
            path:'/Delivery',
            name:"Delivery",
            icon:<TbTruckDelivery/>
        },
        {
            path:'/Mywallet',
            name:"Mywallet",
            icon:<IoWallet/>
        },
        {
            path:'/Help',
            name:"Help",
            icon:<MdOutlineHelp/>
        }

    ];
  return (
    // <div> <Home/>
   
        
    <div className='container'>
             
       <div style={{marginLeft: isOpen ? "0px" : "0px"} }  className='bars'> 
                         <FaBars onClick={toggle} />
       </div>
       
        <div style={{display: isOpen?'block':'none'}} className='Navbar'>
            <div className='top-sec'>
                {/* <h2 style={{display: isOpen ? "block" : "none",margin:"0px" , padding:"0px" ,display:"flex"}} className='logo'><IoFastFoodOutline size={30} style={{marginRight:"20px"}}/>  
                 <p style={{ color:"red"}}>C</p> <p style={{color:"blue" , position:"relative", left:"10px"}}> F</p></h2>  */}

                     {/* <div style={{marginLeft: isOpen ? "60px" : "8px" } }  className='bars'> 
                         <FaBars onClick={toggle} />
                     </div>  */}
              </div>
        
                    <div className='menuBar'>
                    {
                            menuItem.map((item,index)=>(
                                <NavLink to={item.path} key={index} className="link" /*activeclassName="active" */>
                                    <div className='icon' style={{display: isOpen? "block" : "none" }}>{item.icon}</div>
                                    <div  style={{display: isOpen ? "block" : "none"}} className='name'>{item.name}</div>
                                </NavLink>
                            ))
                        }
                
                     </div>
         </div>
      
      
      <main>{children}</main>
      
    </div>
  
   
  )
}

export default Navbar

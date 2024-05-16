
import { Link} from 'react-router-dom';
import Upper from "../../Upper/Upper"
import SimpleImageSlider from "react-simple-image-slider";
import React from 'react';

import Second from "./mainpic00.jpg"
import third from "./mainpic1.jpg"
import fourth from "./mainpic22.jpg"
import fifth from "./mainpic66.png"
import sixth from "./pic22.jpg"
import "./Home.css";
import Korea from '../../Recipess/Korea/Korea';
import Footer from '../../Footer/Footer';


const images = [
 
  { url: third },
  { url: Second },
  { url: fifth },
  { url: sixth },
];


const Home = () => {
  
  //for recipes buttons
  const recipebuttons=[
    {
        path:'/Chinese',
        names:"Chinese",
      
    },
    {
        path:'/East',
        names:"East",
      

    },
    {
        path:'/French',
        names:"French",
        
    },
    {
        path:'/Indian',
        names:"Indian",
      
    },
    {
        path:'/Korea',
        names:"Korea",
        
    },
    {
      path:'/Mexico',
      names:"Mexixo",
      
    }
   

];
  
  return (
    <div className="cc">
      <div>
      
          <div className="imageSlider" >
                <SimpleImageSlider
                  width={window.screen.width-17}          
                  height={window.screen.height-300}
                  images={images}
                  showBullets={true}
                  showNavs={true}
                  // autoPlay={true}
                  slideDuration={1.8}
                  autoPlayDelay={1} 
              
                 />
           </div>
           
            <div><h4 style={{color:"",display:"flex", justifyContent:"center",marginTop:"20px"}}>Choose a Category</h4></div>
            <div> <h2 style={{color:"red", position:"relative",top:"20px",display:"flex",justifyContent:"center"}}>Choose Recipe Category</h2></div>
              <div className="recipes">
                <div className="Crecipes">  </div>
                <div className="Mrecipes">   </div>
                <div className="Erecipes">   </div>
                <div className="Irecipes">   </div>
                <div className="Frecipes">   </div>
                <div className="Krecipes">   </div>
              </div>

      
          </div> 
                 
              <div className='Linkrecipes'>
                  <Link to='/Chinese' className='Link'>Chinese</Link>
                  <Link to='/Korea'className='Link'>Korea</Link>
                  <Link to='/East'className='Link'>East</Link>
                  <Link to='/French'className='Link'>French</Link>
                  <Link to='/Indian'className='Link'>Indian</Link>
                  <Link to='/Mexico'className='Link'>Mexico</Link>
              </div>      
          
               {/* <div className='burger'>
                <div className='burgerpic'></div> */}
                <br/> <br/>
                <Footer/>  
     
    </div>
  )
}

export default Home
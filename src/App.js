import React,{useState} from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Delivery from './Pages/Delivery/Delivery'
import Myaccount from './Pages/Myaccount/Myaccount'
import Help from './Pages/Help/Help'
import Mywallet from './Pages/MyWallet/Mywallet'
import Navbar from './Pages/Navbar/Navbar'
import Chinese from './Recipess/Chinese/Chinese'
import East from './Recipess/East/East'
import French from './Recipess/French/French'
import Indian from './Recipess/Indian/Indian'
import Mexico from './Recipess/Mexico/Mexico'
import Korea from './Recipess/Korea/Korea'
import Upper from './Upper/Upper'
import Footer from './Footer/Footer'



const App = () => {
  
    
  return (
    <div className='one'>
     <Upper/>
      
       <BrowserRouter>
       <Navbar>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/Myaccount" element={<Myaccount/>}/>
            <Route path="/delivery" element={<Delivery/>}/>
            <Route path="/MyWallet" element={<Mywallet/>}/>
            <Route path="/Help" element={<Help/>}/>

            <Route path="/Chinese" element={<Chinese/>}/> 
                <Route path="/East" element={<East/>}/>
                <Route path="/French" element={<French/>}/> 
                <Route path="/Indian" element={<Indian/>}/>
                <Route path="/Mexico" element={<Mexico/>}/>
                <Route path='/Korea' element={<Korea/>}/>
          </Routes>
        </Navbar>
        
       </BrowserRouter>
      
       
     </div>
    
  )
}

export default App



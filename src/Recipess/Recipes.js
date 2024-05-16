import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import East from './East/East'
import French from './French/French'
import Indian from './Indian/Indian'
import Mexico from './Mexico/Mexico'
import Korea from './Korea/Korea'
import Home from '../Pages/Home/Home'
import Chinese from './Chinese/Chinese'

const Recipes = () => {
  return (
    <div>   
        
      <BrowserRouter>
        
            <Routes>
            
                <Route path="/Chinese" element={<Chinese/>}/> 
                <Route path="/East" element={<East/>}/>
                <Route path="/French" element={<French/>}/> 
                <Route path="/Indian" element={<Indian/>}/>
                <Route path="/Mexico" element={<Mexico/>}/>
                <Route path='/Korea' element={<Korea/>}/>
            </Routes>
     
     </BrowserRouter>
    </div>
  )
}

export default Recipes

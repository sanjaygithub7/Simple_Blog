import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Content from './content';
import Postdetail from './postdetail';
import Header from './header';
import Footer from './footer'


export default function App() {
 
  
return (

  <div>
   
  <Router>
  <Header/>
      <Routes>
        <Route path='/' element={ <Content/>}   />
        <Route path='/posts/:id' element={ <Postdetail/>}   />
        </Routes>
    </Router>
   

  </div>
 

  
 
  );
}

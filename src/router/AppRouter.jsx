import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Stages from "../components/Stages";

import React from 'react'
import List from "../components/List";
import Todos from "../components/Todos";

const AppRouter = () => {
  return (
    <BrowserRouter>
       
        <Routes>
        <Route path="/" element={<Stages/>} />
          <Route path="/list" element={<List/>} />
   

        </Routes>
     
     

        <Footer/>
    </BrowserRouter>
  )
}

export default AppRouter
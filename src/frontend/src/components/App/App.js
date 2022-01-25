import React from 'react';
import styled from 'styled-components';
import {Routes, Route} from "react-router-dom"

import Header from '../Header';
import Home from "../Home";
import About from '../About'
import Courses from '../Courses';
import Login from '../Login';


const App =()=>{

    return(
        <>
            <Header/>
            <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="/about" exact element={<About/>} />  
                <Route path="/courses" exact element={<Courses/>} /> 
                <Route path="/login/suprise/adminCredentials" exact element={<Login/>} />
            </Routes>
        </>
    )
}

export default App;
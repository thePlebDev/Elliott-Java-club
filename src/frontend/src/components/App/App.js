import React from 'react';
import styled from 'styled-components';
import {Routes, Route} from "react-router-dom"

import Header from '../Header';
import Home from "../Home";
import About from '../About'
import Courses from '../Courses';


// const Main = styled.h1`
//     color: ${({theme})=>theme.main}
// `


const App =()=>{

    return(
        <>
            <Header/>
            <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="/about" exact element={<About/>} />  
                <Route path="/courses" exact element={<Courses/>} /> 
            </Routes>
        </>
    )
}

export default App;
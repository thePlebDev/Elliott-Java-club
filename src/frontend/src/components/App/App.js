import React from 'react';
import styled from 'styled-components';

import Header from '../Header';
import Home from "../Home";


// const Main = styled.h1`
//     color: ${({theme})=>theme.main}
// `


const App =()=>{

    return(
        <div>
            <Header/>
            <Home/>
        </div>
    )
}

export default App;
import React from 'react';
import styled from "styled-components";

import Working from '../../resources/CoursesPage.png'


const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    text-align:center;
    
`

const Image = styled.img`
    width:40%;
    height:50%;
    

`

const Text = styled.h1`
    margin:0 auto;
    margin-top:40px;
    color:${({theme})=>theme.main};
    
`




const Courses =()=>{
    return (
        <Container>
            <Text> STILL UNDER CONSTRUCTION</Text>
            <Image src={Working}/>
        </Container>
    )
}


export default Courses;
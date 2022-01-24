import React,{useState,useEffect} from 'react';
import styled from 'styled-components';

import { CloseOutlined,CloseCircleOutlined } from '@ant-design/icons';




const Container = styled.div`
    position:absolute;
    right:${({state})=>state ? "-50%" : "0"};
    height:100%;
    width:50%;
    background-color: rgba(0,0,0,0.9);
    transition:all 0.25s;


`
const SubContainer = styled.div`
position:relative;

`


const Text = styled.div`
    color:${({theme})=>theme.main};
    font-size:1.9rem;
    margin:10px 0;
`

const IconContainer = styled.div`
    color:${({theme})=>theme.main};
    font-size:2em;
    
    position:absolute;
    left:10px;
    top:10px;

`

const LinkContainer = styled.div`
    padding-top:100px;
    display:flex;
    flex-direction:column;
    align-items:center;
`

const linksObject = { //need to look into object iteration in JavaScript
    Home:"link",
    Courses:"link",
    About:"link",

}
const arrays = ["Home","Courses","About"]




const MobileNav = ({clicked,setClicked})=>{



    return(
        <Container state={clicked}>
            <SubContainer>
                <IconContainer onClick={()=>setClicked(true)}>
                    <CloseCircleOutlined />
                </IconContainer>
                <LinkContainer>
                    {
                        arrays.map((title,index)=>{
                            return <Text key={index}>{title}</Text>
                        })
                    }
                </LinkContainer>
            </SubContainer>
        </Container>
    )
}

export default MobileNav
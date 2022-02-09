import React from 'react';
import styled from 'styled-components';
import { TwitterOutlined, CaretRightOutlined,ExclamationOutlined} from '@ant-design/icons';


const Container = styled.div`
width:80%;

margin:100px auto;
position: absolute;
left: 0;
right: 0;

border:2px solid;
border-color:${({theme})=>theme.main};
border-radius:4px;
padding:0 10px;
padding-bottom:20px;
background-color:white;
`

const Header = styled.div`
    color:${({theme})=>theme.main};
    font-size:1.5em;
    margin-top:30px;

`
const SubText = styled.div`
    margin-top:10px;
    margin-left:10px;
    font-size:1.2em;
`
const Dash = styled.div`
    color:${({theme})=>theme.main};
    font-size:80px;
    border:1px solid red;
    display:inline-block;
    height:10px;
`

const LinkUnderline = styled.span`
    border-bottom:${({theme})=>"2px solid" + theme.main};
    cursor:pointer;
    color:black;

`



const About =()=>{

    return(
        <Container>
                <Header>
                    About Elliott Engineering Club
                </Header>
                <SubText>
                <CaretRightOutlined style={{color:"#00a862"}}/> The Elliott Engineering Club strives to create a community of software engineers
                and create hand crafted tools like, parsers, compilers, databases and much more.
                </SubText>
                <SubText>
                <CaretRightOutlined style={{color:"#00a862"}}/> We publish free weekly blog posts with a strong empasis on software engineering. 
                </SubText>
                <Header>
                    Upcoming News!
                </Header>
                <SubText>
                <CaretRightOutlined style={{color:"#00a862"}}/> 
                Our team has officaly started development on our join subscription based community
                   
                </SubText>

                <Header>
                    Follow the Creator
                </Header>
                <SubText>
                <CaretRightOutlined style={{color:"#00a862"}}/> 
                <a href="https://twitter.com/TristanJava" target="_blank" rel="noopener noreferrer">
                    <LinkUnderline>Twitter</LinkUnderline>
                </a>
                </SubText>
                
        </Container>
    )
}


export default About;
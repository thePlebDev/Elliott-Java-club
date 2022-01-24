import React,{useState} from 'react';
import styled from 'styled-components';
import { AlignRightOutlined } from '@ant-design/icons';

import Logo from '../../resources/backgroundPicture.png'
import MobileNav from './MobileNav'


const Nav = styled.nav`
    width:100%;
    height:100px;
    box-shadow: 0 1px 3px rgb(0 0 0 / 10%), 
    0 2px 2px rgb(0 0 0 / 6%), 
    0 0 2px rgb(0 0 0 / 7%);
    display:flex;
    align-items:center;
    justify-content:space-between;
   
`

const SubContainer = styled.div`
    display:flex;
    align-items:center;

`

const Image = styled.img`
    height:130px;
    width:130px;
    
`
const Text = styled.div`
    color:${({theme})=>theme.main};
    font-size:1.9rem;
        display:none;
    padding-left:5px;
`

const IconContainer = styled.div`
    color:${({theme})=>theme.main};
    font-size:2em;
    margin-right:20px;
`


const Header = ()=>{
    const [clicked,setClicked] = useState(true)
    return(
        <>
        <MobileNav clicked={clicked} setClicked={setClicked}/>
        <Nav>
        
            <SubContainer >
                <Image src={Logo}/>
                <Text> E-ELLIOTT</Text>
            </SubContainer>
            <IconContainer onClick={()=>{setClicked(false)}}>
                <AlignRightOutlined/>
            </IconContainer>
        </Nav>
        </>
    )
}

export default Header;
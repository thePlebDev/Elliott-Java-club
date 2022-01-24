import React from "react";
import styled from 'styled-components'

import DefaultImage from '../../resources/defaultPostImage.png'

const Container = styled.div`
    width:280px;
    min-height:176px;
    cursor:pointer;
    margin:5px;
    display:flex;
    flex-direction:column;
    text-align:center;
    border:${({theme})=>"1px solid" + theme.main};
    border-radius:4px;
    transition:all 0.25s;
    &:hover {
    
        transform: scale(1.1);
      }

    @media only screen and (max-width: 400px) {
        width:220px;
       
      }

`
const Image = styled.img`
      width:150px;
      height:100px;
      margin:10px auto;

`
const Title = styled.div`
      margin-top:10px;
      color:${({theme})=>theme.main};
      font-size:1.2rem;
`




const BlogPostCard =()=>{
    return(
        <Container>
            <Image src={DefaultImage}/>
            <Title>
                Java for begginers - PART 1
            </Title>
            
        </Container>
    )
}


export default BlogPostCard
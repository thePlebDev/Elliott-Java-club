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
    
    border-radius:4px;
    transition:all 0.25s;
    box-shadow: 0 1px 3px rgb(0 0 0 / 10%), 
    0 2px 2px rgb(0 0 0 / 6%), 
    0 0 2px rgb(0 0 0 / 7%);
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
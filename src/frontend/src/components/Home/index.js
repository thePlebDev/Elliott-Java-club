import React from "react";
import styled from "styled-components";

import BlogPostCard from "../BlogPostCard";

const Container = styled.div`
    width:80%;
    
    margin:100px auto;
    box-shadow: 0 1px 3px rgb(0 0 0 / 10%), 
    0 2px 2px rgb(0 0 0 / 6%), 
    0 0 2px rgb(0 0 0 / 7%);
    padding:5px;
    border-radius:4px;
    display: grid;
    align-items: center;
    
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
`



const Home =()=>{
    return(
        <Container>
           <BlogPostCard/>
           <BlogPostCard/>
           <BlogPostCard/>
           <BlogPostCard/>
        </Container>
    )
}


export default Home
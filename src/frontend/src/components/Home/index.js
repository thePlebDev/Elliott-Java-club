import React from "react";
import styled from "styled-components";

import BlogPostCard from "../BlogPostCard";

const Container = styled.div`
    width:80%;
    
    margin:100px auto;
    border:${({theme})=>"2px solid" + theme.main};
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
import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom'

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
const blogPosts= [
    {
        title:"the man and Another",
        body: "IT DO BE LIKE THAT SOMTIMES",
        id:1
    },
    {
        title:"Elliott Engineering blog",
        body: "```for i in range of meat```",
        id:2
    },
    {
        title:"the man and Another",
        body: "IT DO BE LIKE THAT SOMTIMES",
        id:3
    },
    {
        title:" the man and Another",
        body: "IT DO BE LIKE THAT SOMTIMES",
        id:4
    },
]


const Home =()=>{
    return(
        <Container>
            {
                blogPosts.map((element)=>{
                    return <Link key={element.id} to={`/posts/${element.id}`}>
                              <BlogPostCard  title={element.title}/>
                        </Link>
                })
            }
        </Container>
    )
}


export default Home
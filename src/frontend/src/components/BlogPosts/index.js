import React,{useState} from 'react';
import styled from "styled-components";
import MDEditor from '@uiw/react-md-editor';


const Container = styled.div`
    padding:10px;
    margin:10px;
    width:70%;
`

const BlogPost = ()=>{
    const [state,setState] = useState(" # CREATING A PARSER")

    return(
        <Container>
            <MDEditor.Markdown source={state} />
        </Container>
        
    )
}


export default BlogPost
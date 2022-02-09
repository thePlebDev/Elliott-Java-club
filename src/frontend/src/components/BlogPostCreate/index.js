import React,{useState} from "react";
import styled from "styled-components";
import MDEditor from '@uiw/react-md-editor';


const Container = styled.div`
    width:100%;
    height:85vh;
    margin:0 auto;
    border:2px solid blue;
    display:flex;
`
const Editor = styled.div`
    border:2px solid red;
    width:50%;
    height:99vh;
`


const BlogPostCreate =()=>{
    const [state,setState] = useState("")

    const handleChange =(e)=>{
        const {value,name} = e.target;
        setState({[name]:value})
    }

    return(
        <Container>
            
                <MDEditor
                value ={state}
                onChange={setState}
                />

            
            <MDEditor.Markdown source={state}/>
            
        </Container>
    )
}



export default BlogPostCreate;
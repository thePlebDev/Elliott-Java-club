import React,{useState} from 'react';
import styled from 'styled-components';

import useForm from '../../utils/hooks/useForm.js'
import usernamePassword from '../../utils/validation/usernamePassword.js';

import Form from '../FormParts'
import TextInput from '../FormParts/TextInput'


const Container = styled.div`
    width:80%;

    max-width:700px;
    margin:100px auto;

    border:2px solid;
    border-color:${({theme})=>theme.main};
    border-radius:4px;
    display:flex;
    flex-direction:column;
    max-width:500px;
    padding:10px;

`

const Text = styled.div`
    text-transform:uppercase;
    text-align:center;
    font-size:30px;
    font-weight:700;

`
const Input = styled.input`
    padding: 12px 16px;
    margin:10px auto;
    border-radius:8px;
    outline:none;
    border:none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 40%);
    width:100%;
    max-width:800px;
    font-size:20px;
    
`

const Button = styled.button`
    width:100px;
   
    text-align:center;
    padding:5px 20px;
    border-radius:8px;
    outline:none;
    border:none;
    background-color:${({theme})=>theme.main};
    color:white;
    font-weight:700;
    font-size:20px;
    cursor:pointer;
    
`


const Login = ()=>{
    const {state,errors,handleChange,handleSubmit} = useForm(usernamePassword);
    
    return(
        <Container>
            <Text>
                 LOGIN
            </Text>
            <Form handleSubmit={handleSubmit}>
                    <TextInput value={state.username} id={"username"} error={errors.username} handleChange={handleChange} type={"text"}/>
                
                    <TextInput value={state.password} id={"password"} error={errors.password} handleChange={handleChange} type={"password"}/>

                    <Button type="submit">Submit</Button>  
            </Form>
           
        </Container>
    )
}

export default Login
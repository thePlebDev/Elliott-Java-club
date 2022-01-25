import React from 'react';
import styled from 'styled-components';

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

//{error && <p style={{color:"red"}}>{error}</p>}
const TextInput = ({error,id,handleChange,value,type})=>{

    return(
        <>
            <label htmlFor={id}/>
            {error && <p style={{color:"red"}}>{error}</p>}
            <Input type={type} id={id} name={id} placeholder={id} onChange={(e)=>{handleChange(e)}} value={value}/>
        </>
    )
}


export default TextInput
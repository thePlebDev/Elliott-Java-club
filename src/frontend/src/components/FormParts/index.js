import React from 'react';
import styled from 'styled-components';


const Form = styled.form`
   
    display:flex;
    flex-direction:column;
   
    
`

const FormParts =({handleSubmit,children})=>{


    return(
        <Form onSubmit={(e)=>handleSubmit(e)}>
            {
                children
            }
        </Form>
    )
}


export default FormParts;
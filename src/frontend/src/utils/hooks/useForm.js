import React,{useState,useEffect} from 'react';

//PUT THE BACKEND CALL TO THE USE EFFECT HOOK
const useForm =(validator)=>{

    const [state,setState] = useState({username:"",password:""})
    const [errors,setErrors] = useState({})
    const [isSubmitting,setIsSubmitting] = useState(false);

    const handleChange =(e)=>{
        const {name,value} = e.target

        setState({...state,[name]:value})

    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        setErrors(validator(state));
        setIsSubmitting(true)
    }
    useEffect(()=>{
        if(Object.keys(errors).length === 0 && isSubmitting){
            console.log(state)
        }

    },[errors])

    return{
        state,
        errors,
        handleSubmit,
        handleChange
    }

}

export default useForm;
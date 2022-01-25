const validateForm=(state)=>{
    const errors={}

    if(state.username.length < 5){
        errors.username = "INCORRECT USERNAME"
    }

    if(state.password.length < 10){
        errors.password = "INCORRECT PASSWORD";
    }

    return errors;

}

export default validateForm;
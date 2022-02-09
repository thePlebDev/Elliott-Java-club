import { useEffect,useState } from "react"

const UseScanner =(data)=>{

    const [state,setState] = useState(data)

useEffect(()=>{
    setState(data )
    
},[data])
    return{
        state
    }
}


export default UseScanner
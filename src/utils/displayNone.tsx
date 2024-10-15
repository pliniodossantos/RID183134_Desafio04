import { useEffect, useState } from "react";
function DisplayNone(path: string){

const [none, setNone] = useState<string>('')
  
  
    if (window.location.pathname === path) {
        useEffect(() =>{
            setNone(none + 'none')
            
        },[]) ;
    }else {

        useEffect(() =>{
            setNone(none + 'inline')
            
        },[]) 

    }

    return(
        none
    )
}

export default DisplayNone
import { useEffect, useState } from "react"
// useLocalStorage("key", [value])
export default function useLocalStorage(key, defaultValue) {
    
    const initialize = (key, defaultValue) => {
        try{
            const jsonValue = localStorage.getItem(key)
            if (jsonValue === null || jsonValue === 'undefined') {
                return defaultValue
            }
    
            if (typeof defaultValue === "function") {
                return defaultValue
            }
            
            else {
                return JSON.parse(jsonValue)
            }
        } catch{
            return(defaultValue)
        }
    }

    const [value, setValue] = useState();
  
    useEffect(()=>{
        setValue(initialize(key, defaultValue));
    },[]);

    useEffect(() => {
        if(value){
            localStorage.setItem(key, JSON.stringify(value))
        }
    }, [key, value])


    
    return [value, setValue]
}
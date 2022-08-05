import { useState } from "react";

export function useLocalStorage (key,initiativeValue) {

    const [storagedValue,setStoredValue] =useState(()=>{
        try{
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initiativeValue;
        }catch(error){
            return initiativeValue;
        }
    });

    const setValue = value =>{
        try{
            setStoredValue(value)
            localStorage.setItem(key,JSON.stringify(value));
        }catch(error){
            console.error(error);
        }
    }
    return [storagedValue, setValue]
}
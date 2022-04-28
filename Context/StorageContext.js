import { useState,createContext,useEffect } from "react";

export const UseStorageContext = createContext();

export function StorageContext ({children}) {

    const [carritoStorage, setCarritoStorage]=useState([])

    useEffect(()=>{
        if(!localStorage.getItem("Carrito")){
            localStorage.setItem("Carrito",JSON.stringify(carritoStorage))
        }else{
            setCarritoStorage(JSON.parse(localStorage.getItem("Carrito")))
        }
    },[])// eslint-disable-line react-hooks/exhaustive-deps

    const CarritoCargado=(info)=>{
        if(info.length!==0){
            localStorage.setItem("Carrito",(JSON.stringify(info)))
        }
    }

    return(
    <UseStorageContext.Provider value={{CarritoCargado,carritoStorage}}>
        {children}
    </UseStorageContext.Provider>)
}
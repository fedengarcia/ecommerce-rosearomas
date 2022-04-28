import { useState,createContext,useEffect } from "react";

export const UseStorageContext = createContext();

export function StorageContext ({children}) {

    const [carritoStorage, setCarritoStorage]=useState([])

    useEffect(()=>{
        if(!localStorage.getItem("CarritoRoseAromas")){
            localStorage.setItem("CarritoRoseAromas",JSON.stringify(carritoStorage))
        }else{
            setCarritoStorage(JSON.parse(localStorage.getItem("CarritoRoseAromas")))
        }
    },[])// eslint-disable-line react-hooks/exhaustive-deps

    const CarritoCargado=(info)=>{
        if(info.length!==0){
            localStorage.setItem("CarritoRoseAromas",(JSON.stringify(info)))
        }
    }

    return(
    <UseStorageContext.Provider value={{CarritoCargado,carritoStorage}}>
        {children}
    </UseStorageContext.Provider>)
}
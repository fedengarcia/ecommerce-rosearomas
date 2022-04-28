import { useState,createContext,useEffect } from "react";

export const UseStorageContext = createContext();

export function StorageContext ({children}) {

    const [carritoStorage, setCarritoStorage]=useState([])

    useEffect(()=>{
        const data = {'fecha': new Date()};
        if(!localStorage.getItem("CarritoRoseAromas")){
            localStorage.setItem("CarritoRoseAromas",JSON.stringify(carritoStorage))
            localStorage.setItem("FechaCarrito",JSON.stringify(data))
        }else{
            const fecha = new Date();
            const data = localStorage.getItem("FechaCarrito");
            if (fecha - data.fecha < (24 * 60 * 60 * 1000)) { // un dia en ms
                setCarritoStorage(JSON.parse(localStorage.getItem("CarritoRoseAromas")))
              }
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
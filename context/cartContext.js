import { useState,createContext } from "react";

export const cartContext = createContext();

export const CartContext = ({children}) => {
    const [order,setOrder] = useState(undefined);


    return(<cartContext.Provider value={{order,setOrder}}>
        {children}
    </cartContext.Provider>)



}
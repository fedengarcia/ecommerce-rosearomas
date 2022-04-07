import { useState,createContext,useEffect } from "react";

export const UseCartContext = createContext();

export const CartContext = ({children}) => {
    const [items,setItem] = useState([]);
    const [order,setOrder] = useState(undefined);
    const [itemTrashId,setItemTrashId] = useState(undefined);
    const [idCompra,setIdCompra] = useState(undefined);

    useEffect(() => {
        console.log(items)
    }, [items]);

    //DEVUELVE -1 SI NO EXISTE EL ITEM
    const getIndex = (id) =>{
        return items.findIndex(item => item.id === id);
    }

    //AGREGO UN ITEM AL CARRITO, SI EXISTE LE CAMBIO LA CANTIDAD
    const addItem = (item) => {
        let result = getIndex(item.item.id);
        if(result === -1){
            setItem(items => [...items,item])
        }else{
            const newItems = [...items];
            newItems[result]["quantity"] = newItems[result]["quantity"] + item.quantity;
            setItem(newItems);
        }
        
    }

    //ARMO UN JSON PARA ENVIAR LA INFORMACION A MERCADO PAGO
    const saveBuy = (buyer) => {
        const order = {
            items: items,
            buyer: buyer,
            date: new Date().toLocaleString() + "",
            price: getTotalPrice(),
        }
    }

    //DEVUELVO EL PRECIO TOTAL DE LA COMPRA
    const getTotalPrice = () =>{
        const totalPrice = items.reduce(function(accumulator, currentValue) {
            return accumulator + (currentValue.item.precio * currentValue.quantity) ;
          },0);

        return totalPrice;
    }

    //DEVUELVO CANTIDAD DE TOTAL ITEMS EN CARRITO
    const getQuantity = () => {
        const quantity = items.reduce(function(accumulator, currentValue) {
            return accumulator + currentValue.quantity ;
          },0);

        return quantity;
    }

    //SACO UN ITEM DEL CARRITO, 
    const removeItem = (id) => {
        setItem(items.filter(item => item.item.id !== id));
    }

    //LIMPIO POR COMPLETO EL CARRITO
    const clear = () => {
        setItem([])
    }

    // DEVUELVO TODOS LOS ITEMS DEL CARRITO
    const getItems = () => {
        return items;
    }
    return(<UseCartContext.Provider value={{addItem, getTotalPrice,getQuantity,getItems}}>
        {children}
    </UseCartContext.Provider>)



}
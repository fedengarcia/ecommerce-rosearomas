import { useState,createContext,useEffect } from "react";

export const UseCartContext = createContext();

export const CartContext = ({children}) => {
    const [items,setItems] = useState([]);
    const [order,setOrder] = useState(undefined);
    const [itemTrashId,setItemTrashId] = useState(undefined);
    const [idCompra,setIdCompra] = useState(undefined);


    // ACTUALIZAR CANTIDAD DE UN ITEM
    const updateQuantityItem = (id, newQuantity) => {
        const newItems = [...items]
        const position = getIndex(id);
        newItems[position]["quantity"] = newQuantity;
        setItems(newItems);
    }


 
    //DEVUELVE -1 SI NO EXISTE EL ITEM
    const getIndex = (id) =>{
        return items.findIndex(item => item.id === id);
    }

    //AGREGO UN ITEM AL CARRITO, SI EXISTE LE CAMBIO LA CANTIDAD
    const addItem = (item) => {
        let result = getIndex(item.id);
        if(result === -1){
            setItems(items => [...items,item])
        }else{
            const newItems = [...items];
            newItems[result]["quantity"] = newItems[result]["quantity"] + item.quantity;
            setItems(newItems);
            // FUNCIONA PERO ESTA CARGANDO MAL LA CANTIDAD
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
            return accumulator + (currentValue.Precio * currentValue.quantity) ;
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
        setItems(items.filter(item => item.item.id !== id));
    }

    //LIMPIO POR COMPLETO EL CARRITO
    const clear = () => {
        setItems([])
    }

    // DEVUELVO TODOS LOS ITEMS DEL CARRITO
    const getItems = () => {
        return items;
    }
    return(<UseCartContext.Provider value={{clear,updateQuantityItem,addItem, getTotalPrice,getQuantity,getItems}}>
        {children}
    </UseCartContext.Provider>)



}
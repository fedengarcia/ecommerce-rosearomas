import { useState,createContext,useEffect } from "react";

export const UseCartContext = createContext();

export const CartContext = ({children}) => {
    const [items,setItems] = useState([]);
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
        }
    }


    const addShippment = (unit_price) => {
        const shippment = {
            id:"envioprod",
            title: "Dinero de Envio",
            quantity: 1,
            unit_price: unit_price,
        }

        let result = getIndex("envioprod");
        if(result === -1){
            setItems(items => [...items,shippment])
        }else{
            const newItems = [...items];
            newItems[result]["unit_price"] = shippment.unit_price;
            setItems(newItems);
        }


    }


    //DEVUELVO EL PRECIO TOTAL DE LA COMPRA
    const getTotalPriceCart = () =>{
        const totalPrice = items.filter(item=>item.id!=="envioprod").reduce(function(accumulator, currentValue) {
            return accumulator + (currentValue.unit_price * currentValue.quantity) ;
          },0);
        return totalPrice;
    }

    const getTotalPriceForm = () =>{
        const totalPrice = items.reduce(function(accumulator, currentValue) {
            return accumulator + (currentValue.unit_price * currentValue.quantity) ;
          },0);
        return totalPrice;
    }

    //DEVUELVO CANTIDAD DE TOTAL ITEMS EN CARRITO
    const getQuantity = () => {
        const quantity = items.reduce(function(accumulator, currentValue) {
            if(currentValue.id!=="envioprod"){
                return accumulator + currentValue.quantity;
            }else{
                return accumulator + currentValue.quantity - 1;
            }
          },0);
        
        return quantity;
    }

    //SACO UN ITEM DEL CARRITO, 
    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    }

    //LIMPIO POR COMPLETO EL CARRITO
    const clear = () => {
        setItems([])
    }

    // DEVUELVO TODOS LOS ITEMS DEL CARRITO
    const getItems = () => {
        return items;
    }
    return(<UseCartContext.Provider value={{addShippment,items, clear,updateQuantityItem,addItem, getTotalPriceCart,getTotalPriceForm,getQuantity,getItems,removeItem}}>
        {children}
    </UseCartContext.Provider>)



}
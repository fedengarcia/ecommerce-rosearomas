


export default function ({producto,type,amount}){


    const handleOnClick = () => {
        if(type === "none"){
            // PUSH MODAL
        }else{
            //AGREGAR AL CARRO
        }
    }

    return(
        <button onClick={handleOnClick} className="add-cart-button">Agregar al carrito</button>
    )
}
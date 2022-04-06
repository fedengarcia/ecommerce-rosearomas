


export default function ({producto,type,amount}){


    const handleOnClick = () => {
        if(type === "none"){
            // PUSH MODAL
            console.log(type,amount,producto)
        }else{
            //AGREGAR AL CARRO
            console.log(type,amount)
        }
    }

    return(
        <button onClick={handleOnClick} className="add-cart-button">Agregar al carrito</button>
    )
}
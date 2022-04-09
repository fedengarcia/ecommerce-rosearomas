import ItemCount from '../ItemCount/ItemCount';


export default function ItemCart({producto}) {

    console.log(producto)


    return(
        <div className="item-cart">
            <div className="item-row">
                <h2>{producto.Nombre}</h2>
            </div>
            

            <ItemCount />
        </div>
        
    )
}
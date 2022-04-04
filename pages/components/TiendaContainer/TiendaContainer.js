import CardProducto from '../CardProducto/CardProducto'



export default function TiendaContainer ({productos, itemType}) {


    return (
        <div className="tienda-container">
            <div className="title-container">
                <h1>{itemType}</h1>
            </div>

            <div className="tienda">

                {itemType === "Todo" 
                ? productos.map(producto => <CardProducto producto={producto} key={producto.id}></CardProducto>) 
                :  productos.filter(prod => prod.Categoria === itemType).map(producto => <CardProducto producto={producto} key={producto.id}></CardProducto>)}
            
            </div>
        </div>
    )
}
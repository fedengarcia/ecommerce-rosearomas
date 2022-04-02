import CardProducto from '../CardProducto/CardProducto'
import TiendaTabs from '../TiendaTabs/TiendaTabs'



export default function TiendaContainer ({productos, itemType}) {



    return (
        <div className="tiendaContainer">
            <h1>PROD / {itemType}</h1>
            {productos.map(producto => <CardProducto producto={producto} key={producto.id}></CardProducto>)}
            {/* <TiendaTabs productos={productos}/> */}
        </div>
    )
}
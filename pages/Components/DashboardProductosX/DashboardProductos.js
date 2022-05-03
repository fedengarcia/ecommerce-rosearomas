import { useEffect,useState } from "react"
import { getProductos } from "../../../firebaseX/Firebase"
import DashboardBuscador from "../DashboardBuscadorX/DashboardBuscador"
import DashboardProductoItem from "../DashboardProductoItemX/DashboardProductoItem"

export default function DashboardProductos () {
    
    const [listaProds,setListaProds]=useState([])
    const [prodsFiltrados, setProdsFiltrados]=useState([])
    const [busqueda,setBusqueda]=useState(false)

    useEffect(()=>{
        getProductos("Todo",9999).then(res=>{
            setListaProds(res)
        })
    },[])

    return (
        <div className="dashboard-productos">
            <h2>Tus Productos</h2>
            
            <DashboardBuscador  listaProds={listaProds} setProdsFiltrados={setProdsFiltrados} prodsFiltrados={prodsFiltrados} setBusqueda={setBusqueda}/>

            <div className="dashboard-productos-container">
                {busqueda? <p className="noSeEncontro">No se encontraron productos</p> 
                :   prodsFiltrados.length === 0 ? listaProds.map(prod => <DashboardProductoItem key={prod.id} producto={prod}/>)
                :
                prodsFiltrados.map(prod => <DashboardProductoItem key={prod.id} producto={prod}/>)
                }
            </div>

        </div>
        
    )
}
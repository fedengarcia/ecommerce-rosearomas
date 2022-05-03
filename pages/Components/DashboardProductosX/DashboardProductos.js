import { useEffect,useState } from "react"
import { getProductos } from "../../../firebaseX/Firebase"
import DashboardBuscador from "../DashboardBuscadorX/DashboardBuscador"

export default function DashboardProductos () {
    
    const [listaProds,setListaProds]=useState([])
    const [prodsFiltrados, setPordFiltrados]=useState([])


    useEffect(()=>{
        getProductos("Todo",9999).then(res=>{
            setListaProds(res)
        })
    },[])

    return (
        <div>
            <h1>Productos</h1>
            
            <div>
                <DashboardBuscador/>
            </div>
        </div>
        
    )
}
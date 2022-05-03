import { useEffect,useState } from "react"
import { getProductos } from "../../../firebaseX/Firebase"

export default function DashboardProductos () {
    
    const [listaProds,setListaProds]=useState([])
    const [prodsFiltrados, setPordFiltrados]=useState([])


    useEffect(()=>{
        getProductos("Todo",9999).then(res=>{
            setListaProds(res)
        })
    },[])

    
    const buscador=(e)=>{
        if(e.target.value.length!=0){
            let busqueda = e.target.value.toUpperCase()
            console.log("busqueda",busqueda)

            for(let prod of listaProds){
                let tituloProd = prod.Nombre.toUpperCase().slice(0,busqueda.length)
                console.log("tituloPrd",tituloProd)

                if(tituloProd === busqueda){
                    setPordFiltrados(prodsFiltrados=>[...prodsFiltrados,prod])
                }
            }
            console.log(prodsFiltrados)
        }
    }

    return (
        <div>
            <h1>Productos</h1>
            
            <div>
                <input type="text" placeholder="Buscar producto" onChangeCapture={buscador}/>

            </div>
        </div>
        
    )
}
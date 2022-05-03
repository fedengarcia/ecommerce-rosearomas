import { useEffect } from "react";

export default function DashboardBuscador ({listaProds,setProdsFiltrados,prodsFiltrados}) {
    

    const getIndex = (id) =>{
        return prodsFiltrados.findIndex(item => item.id === id);
    }

    const buscador=(e)=>{
        var variable = 0
        if(e.target.value.length!=0){
            let busqueda = e.target.value.toUpperCase()
            for(let prod of listaProds){
                let tituloProd = prod.Nombre.toUpperCase().slice(0,busqueda.length)
                if(tituloProd === busqueda){
                    console.log(busqueda,tituloProd)
                    variable=1
                    if(getIndex(prod.id) === -1){
                        setProdsFiltrados(prodsFiltrados => [...prodsFiltrados, prod])
                    }
                }
            }
        }else{
            setProdsFiltrados([])
        }
        if(variable===0){
            setProdsFiltrados([])
        }
    }

    useEffect(()=>{
        console.log(prodsFiltrados)
    },[prodsFiltrados])

    return (
        <div>
            <input type="text" placeholder="Buscar producto" onChangeCapture={buscador}/>
        </div>
    )
}
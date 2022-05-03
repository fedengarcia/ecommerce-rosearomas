export default function DashboardBuscador () {
    
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
        <>
                        <input type="text" placeholder="Buscar producto" onChangeCapture={buscador}/>
                
        </>
    )
}
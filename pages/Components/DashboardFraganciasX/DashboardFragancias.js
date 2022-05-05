import { useState, useContext } from "react"
import { crlContext } from "../../../Context/CarouselContext"
import Image from "next/image"
import anadir from "../../A-imgs/icons8-más-2-matemáticas-100.png"

import { changeStockFragancia, removeFragancia } from "../../../firebaseX/Firebase"
import DashboardAddFragancias from "../DashboardAddFraganciasX/DashboardAddFragancias"

export default function DashboardFragancias () {

    const {carouselFragancia, carouselFraganciaSML}=useContext(crlContext)

    const [addFragancia,setAddFragancia]=useState(false)
    const [pantalla,setPantalla]=useState("")

    const [fraganciaEliminar,setFraganciaEliminar]=useState("")
    const [docEliminar,setDocEliminar]=useState("")

    const [disp,setDisp]=useState("none")

    const disponibilidad = (e)=>{
        changeStockFragancia(e.target.name,e.target.checked)
    }

    return (
        <>
            <div className="dashboard-fragancias">
                <h1>Fragancias</h1>
                <div className="tipo-pantalla">
                    <h2>Fragancias Pantalla Grande</h2>
                    <div>
                        <Image src={anadir} width={100} height={100} alt="añadir" onClick={()=>{setPantalla("Pantalla Grande"),setAddFragancia(true)}}/>
                    </div>
                </div>
                <br/>
                <div className="fragancia-container">
                    {carouselFragancia.map(img=>(
                        <div key={img.id} className="linea-fragancia">
                            <p>{img.Nombre}</p>
                            <p className="borrar-fragancia" onClick={()=>{setFraganciaEliminar(img.id),setDocEliminar("CarouselFragancias"),setDisp("block")}}>X</p>
                            <div className="foto-stock">
                                <Image src={img.img} width={800} height={170} alt={img.Nombre}/>
                                <div>
                                    <p>Disponible:</p>
                                    <label className="switch">
                                        <input type={"checkbox"} name={img.id} id={img.id} onClick={disponibilidad} defaultChecked={img.stock?true:false}/>
                                        <span className="slider round"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="tipo-pantalla">
                    <h2>Fragancias Pantalla Chica</h2>
                    <div>
                        <Image src={anadir} width={100} height={100} alt="añadir" onClick={()=>{setPantalla("Pantalla Chica"),setAddFragancia(true)}}/>
                    </div>
                </div>
                <br/>
                <div className="fragancia-container">
                    {carouselFraganciaSML.map(img=>(
                        <div key={img.id} className="linea-fragancia">
                            <p>{img.Nombre}</p>
                            <p className="borrar-fragancia" onClick={()=>{setFraganciaEliminar(img.id),setDocEliminar("CarouselFraganciasSML"),setDisp("block")}}>X</p>
                            <div className="foto-stock">
                                <Image src={img.img} width={400} height={300} alt={img.Nombre}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='fondo-block' style={{display:disp}}>
                <div className='confirm-cancel-info'>
                    <p className='button-borrar-order' onClick={()=>{removeFragancia(fraganciaEliminar,docEliminar),setDisp("none")}}>Confirmar</p>
                    <p className='button-borrar-order' onClick={()=>{setDisp("none")}}>Cancelar</p>
                </div>
            </div>
            {!addFragancia?<></>:
                <DashboardAddFragancias setAddFragancia={setAddFragancia} pantalla={pantalla}/>
            }
        </>
    )
}
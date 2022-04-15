import Image from "next/image"
import { useState, useEffect } from "react"
import { getCarouselFraganciaImg, getCarouselImg, addStorage } from "../firebase/Firebase"

export default function Dashboard({}){

    // LOGIN------------------------------
    const [login, setLogin]=useState(false)

    const loginExito=(usuario,contraseña)=>{
        if(usuario==="Caro" & contraseña==="1"){
            setLogin(!login)
        }
    }

    // DATOS DE FIREBASE---------------------
    const [carouselFragancia,setCarouselFraganciaImg]=useState([]);
    const [carousel,setCarouselImg] = useState([]);

    useEffect(()=>{
        getCarouselImg().then(res =>{
            setCarouselImg(res);
        })
    },[])

    // SUBIDA DE IMG CAROUSEL-------------------------
    const [imagen, setImagen] = useState();
    const [formAgregar,setFormAgregar]=useState(false)

    const changeImagen = (e)=>{
        setImagen(e.target.files[0]);
    }

    const [titulo,setTitulo]=useState("")
    const [descripcion,setDescripcion]=useState("")
    const [mensajeCarousel, setMensajeCarousel]=useState(true)
    const [botonCarousel,setBotonCarousel]=useState(true)

    const Add=(carpeta)=>{
        if(titulo!=""&&descripcion!=""&&imagen!=undefined){
            setMensajeCarousel(true)
            setBotonCarousel(false)
            addStorage(titulo,carpeta,imagen)
        }else{
            setMensajeCarousel(false)
        }
    }

    return(
        <>
            
            {login?
                <div className="logeo-block">
                    <div className="logeo-container">
                        <label form="usuario">USUARIO:</label>
                        <input placeholder="Usuario" name="usuario" id="usuario"/>
                        <label form="contraseña">CONTRASEÑA:</label>
                        <input placeholder="Contraseña" name="contraseña" id="contraseña"/>
                        <div className="container-logeo-button">
                            <p onClick={()=>{loginExito(usuario.value,contraseña.value)}}>CONFIRMAR</p>
                        </div>
                    </div>
                </div>
                :
                <div className="dashboard-container">
                    <div className="navegacion">
                        <a href="#inicio">
                            <p>INICIO</p>
                        </a>
                        <a href="#tienda">
                            <p>TIENDA</p>
                        </a>
                    </div>
                    <div className="navegacion-1">
                        <p id="inicio">INICIO</p>
                        <div className="navegacion-1-1">
                            <p>CAROUSEL-INICIO</p>
                            {carousel.map(dat=>{
                                return(
                                    <div className="separacion"  key={dat.id}>
                                        <div className="container">
                                            <div className="container-img">
                                                <Image src={dat.img} width={700} height={500}/>
                                            </div>
                                            <p className="titulo">{dat.titulo}</p>
                                            <p className="descripcion">{dat.descripcion}</p>
                                            <p className="id">{dat.id}</p>
                                        </div>
                                        <p className="button">Editar</p>
                                        <p className="button">Borrar</p>
                                    </div>
                                )
                            })}
                            <br/><p className="button" onClick={()=>{setFormAgregar(!formAgregar)}}>Agregar</p>
                            {formAgregar?
                                <div className="form-agregar-container">
                                    <div className="form-agregar">
                                            <p onClick={()=>{setFormAgregar(!formAgregar), setMensajeCarousel(true)}} className="cerrar">CERRAR</p>
                                            <input placeholder="Titulo" name="titulo" id="titulo" onChange={e=>{setTitulo(e.target.value)}}/>
                                            <input placeholder="Descripcion" name="descripcion" id="descripcion" onChange={e=>{setDescripcion(e.target.value)}}/>
                                            <input
                                                type="file"
                                                name="img"
                                                id="img"
                                                onChange={(e) => {changeImagen(e)}}
                                            />
                                            {botonCarousel?
                                                <>
                                                    <p onClick={()=>Add("carousel")} className="agregar">AGREGAR</p>
                                                </>
                                                :
                                                <>
                                                    <p className="agregar">CARGANDO...</p>
                                                </>
                                            }
                                            {mensajeCarousel?<></>:
                                                <>
                                                    <span className="text-danger text-small d-block mb-2">Datos incorrectos</span>
                                                </>
                                            }
                                    </div>
                                </div>
                            :
                                <>
                                </>
                            }
                        </div>
                        <br/>
                        <p>CAROUSEL-FRAGANCIAS</p>
                    </div>
                    <div className="navegacion-2">
                        <p id="tienda">TIENDA</p>
                        <p>PRODUCTOS</p>
                    </div>
                </div>
            }
        </>    
    )
}
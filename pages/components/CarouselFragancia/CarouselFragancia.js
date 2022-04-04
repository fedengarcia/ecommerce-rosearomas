import React, { useContext,useState } from "react";
import { Carousel } from "react-bootstrap";
import  'bootstrap/dist/css/bootstrap.min.css' ;
import left from "../Carousel/icons8-izquierda-círculo-90.png";
import right from "../Carousel/icons8-derecha-círculo-90.png";
import { crlContext } from "../../../context/carouselContext";
import Image from "next/image";
import { width } from "@mui/system";

export default function CarouselFragancia(){
    
    const leftArrow=(
        <Image src={left} alt="FLECHA" width={60} height={60} className="prev-next-btn"/>
    )
    const rightArrow=(
        <Image src={right} alt="FLECHA" width={60} height={60} className="prev-next-btn"/>
    )

    const {carouselFragancia,carouselFraganciaSML} = useContext(crlContext);
    
    const [carouselTamaño,setCarouselTamaño]=useState(carouselFragancia)

    return(
        <>
            <h1 className="titulo-fragancias">NUESTRAS FRAGANCIAS</h1>
            <div className="container-carouselFragancia">
                <Carousel prevIcon={leftArrow} nextIcon={rightArrow} interval={3000}>
                        {carouselTamaño.map((foto)=>{
                            return(
                                <Carousel.Item key={foto.id}>
                                    <Image
                                    src={foto.img}
                                    alt={foto.titulo}
                                    width={1320}
                                    height={300}
                                    className="carouselF-foto"
                                    />
                                    <Carousel.Caption>
                                        <h3>{foto.titulo}</h3>
                                        <p>{foto.descripcion}</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            )
                        })}
                </Carousel>
            </div>
        </>
    )
}
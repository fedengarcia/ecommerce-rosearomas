import React, { useContext } from "react";
import { Carousel } from "react-bootstrap";
import  'bootstrap/dist/css/bootstrap.min.css' ;
import left from "../Carousel/icons8-izquierda-círculo-90.png"
import right from "../Carousel/icons8-derecha-círculo-90.png"
import { crlContext } from "../../../context/carouselContext";
import Image from "next/image";

export default function CarouselFraganciaSml({tamañoF}){
    
    const leftArrow=(
        <Image src={left} alt="FLECHA" className="arrow-F-sml"/>
    )
    const rightArrow=(
        <Image src={right} alt="FLECHA" className="arrow-F-sml"/>
    )

    const {carouselFraganciaSML} = useContext(crlContext);

    return(
        <>
            <h1 className="titulo-fragancias" style={{fontSize:"6vw"}}>NUESTRAS FRAGANCIAS</h1>
            <div className={`carouselFraganciaSML ${tamañoF}`}>
                <Carousel prevIcon={leftArrow} nextIcon={rightArrow} interval={3000}>
                        {carouselFraganciaSML.map((foto)=>{
                            return(
                                <Carousel.Item key={foto.id}>
                                    <Image
                                    src={foto.img}
                                    alt={foto.titulo}
                                    width={400}
                                    height={400}
                                    className="foto-car"
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
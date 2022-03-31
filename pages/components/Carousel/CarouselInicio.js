import React, { useContext } from "react";
import { Carousel } from "react-bootstrap";
import  'bootstrap/dist/css/bootstrap.min.css';
import left from "./icons8-izquierda-círculo-90.png"
import right from "./icons8-derecha-círculo-90.png"
import Image from "next/image";
import { crlContext } from "../../../context/carouselContext";


export default function CarouselInicio(){
    const leftArrow=(
        <Image src={left} alt="FLECHA" className="prev-next-btn"/>
    )
    const rightArrow=(
        <Image src={right} alt="FLECHA" className="prev-next-btn"/>
    )

    const {carousel} = useContext (crlContext);

    return(
        <div className="container-carousel">
            <Carousel prevIcon={leftArrow} nextIcon={rightArrow} interval={4000}>
                {carousel.map((foto)=>{
                    return(
                        <Carousel.Item key={foto.id}>
                            <Image
                            src={foto.img}
                            alt={foto.titulo}
                            width={500}
                            height={500}
                            className="carousel-foto"
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
    )
}
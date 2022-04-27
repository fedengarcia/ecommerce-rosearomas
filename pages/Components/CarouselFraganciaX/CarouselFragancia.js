import React, { useContext,useState,useEffect } from "react";
import { Carousel } from "react-bootstrap";
import  'bootstrap/dist/css/bootstrap.min.css' ;
import left from "./icons8-izquierda-círculo-90.png";
import right from "./icons8-derecha-círculo-90.png";
import { crlContext } from "../Context/CarouselContext";
import Image from "next/image";

export default function CarouselFragancia(){
    
    const leftArrow=(
        <Image src={left} alt="FLECHA" width={60} height={60} className="prev-next-btn"/>
    )
    const rightArrow=(
        <Image src={right} alt="FLECHA" width={60} height={60} className="prev-next-btn"/>
    )

    const {carouselFragancia,carouselFraganciaSML} = useContext(crlContext);

    return(
        <>
            <h1 className="titulo-fragancias">NUESTRAS FRAGANCIAS</h1>
            <div className="container-carouselFragancia">
                <Carousel prevIcon={leftArrow} nextIcon={rightArrow} interval={3000} className="carouselF-1">
                        {carouselFragancia.map((foto)=>{
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
                <Carousel prevIcon={leftArrow} nextIcon={rightArrow} interval={3000} className="carouselF-2">
                        {carouselFraganciaSML.map((foto)=>{
                            return(
                                <Carousel.Item key={foto.id}>
                                    <Image
                                    src={foto.img}
                                    alt={foto.titulo}
                                    width={700}
                                    height={500}
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
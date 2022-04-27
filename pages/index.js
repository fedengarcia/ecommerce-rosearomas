import Image from 'next/image'
import {useEffect, useState} from "react";
import CarouselInicio from "./Components/Carousel/CarouselInicio";
import banner_1 from "./A-imgs/banner/banner.png";
import banner_2 from "./A-imgs/banner/banner2.png";
import logoWhap from "./A-imgs/whatsapp.png";
import CarouselFragancia from "./Components/CarouselFraganciaX/CarouselFragancia";
import Header from "./Components/HeaderX/Header";
import Footer from "./Components/FooterX/Footer";
import ProductosInicio from './Components/ProductosInicioX/ProductosInicio';

export default function Home() {
  const [carga,setCarga]=useState(true)


    setTimeout(() => {
        setCarga(false)
    }, 1000);

    return(
                <div>
                    <Header/>

                    <div className='banner-1'>
                        <Image src={banner_1} layout="responsive"  alt="BANNER" className="appear"/>
                    </div>
                    
                    <div className='banner-2'>
                        <Image src={banner_2} layout="responsive" alt="BANNER" className="appear-ban2"/>
                    </div>

                    <CarouselInicio/>

                    <ProductosInicio/>

                    <CarouselFragancia/>

                    <div className="container-logoWhap">
                        <a href="https://wa.me/543487513839?text=Hola Rosé! Quería hacer una consulta" target="_blank" rel="noreferrer">
                            <Image src={logoWhap} alt="Whap" className='logoWhap' width={80} height={80}/>
                        </a>
                    </div>

                    <Footer/>
                </div>
    )
}



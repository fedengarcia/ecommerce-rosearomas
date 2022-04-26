import Image from 'next/image'
import {useEffect, useState} from "react";
import CarouselInicio from "./components/Carousel/CarouselInicio";
import banner_1 from "../public/banner/banner.png";
import banner_2 from "../public/banner/banner2.png";
import logoWhap from "../public/whatsapp.png";
import CarouselFragancia from "./components/CarouselFragancia/CarouselFragancia";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductosInicio from './components/ProductosInicio/ProductosInicio';

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



import Image from 'next/image'
import {useState} from "react";
import CarouselInicio from "./components/Carousel/CarouselInicio";
import banner_1 from "../public/banner/banner.png";
import banner_2 from "../public/banner/banner2.png";
import Media from "react-media";
import logoWhap from "../public/whatsapp.png";
import CarouselFragancia from "./components/CarouselFragancia/CarouselFragancia";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductosInicio from './components/ProductosInicio/ProductosInicio';
import Loader from './components/Loader/Loader';

export default function Home() {
  const [carga,setCarga]=useState(true)

    setTimeout(() => {
        setCarga(false)
    }, 1000);

    return(
                <div>
                    <Header/>

                    <Media queries={{
                        banner2:"(max-width: 575px)",
                        banner1:"(min-width: 576px)"
                        }}>
                        {matches => (
                            <>
                                {matches.banner1 && <Image src={banner_1} layout="responsive"  alt="BANNER" className="appear"/>}
                                {matches.banner2 && <Image src={banner_2} layout="responsive" alt="BANNER" className="appear-ban2"/>}
                            </>
                        )}
                    </Media>

                    <CarouselInicio/>

                    <ProductosInicio/>

                    <CarouselFragancia/>

                    <div className="container-logoWhap">
                        <a href="https://wa.me/543487513839?text=Hola Rosé! Quería hacer una consulta" target="_blank" rel="noopener">
                            <Image src={logoWhap} alt="Whap" className='logoWhap' width={80} height={80}/>
                        </a>
                    </div>

                    <Footer/>
                </div>
    )
}



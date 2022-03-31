import Image from 'next/image'
import {useState} from "react";
import CarouselInicio from "./components/Carousel/CarouselInicio";
import banner1 from "../public/banner/banner.png";
import banner2 from "../public/banner/banner2.png";
import Media from "react-media";
import logoWhap from "../public/whatsapp.png";
import CarouselFragancia from "./components/CarouselFragancia/CarouselFragancia";
import CarouselFraganciaSml from "./components/CarouselFragancia/CarouselFragancia-sml";
import Header from './components/Header/Header';
import Script from 'next/script';


export default function Home() {
  const [carga,setCarga]=useState(true)

    setTimeout(() => {
        setCarga(false)
    }, 1000);
    
    return(
        <>
            {carga?
                <p className="texto-cargando">Cargando...</p>
            :
                <div>
                    <Header/>

                    <Media queries={{
                        banner2:"(max-width: 575px)",
                        banner1:"(min-width: 576px)"
                        }}>
                        {matches => (
                            <>
                                {matches.banner1 && <>
                                                        <Image src={banner1} layout="responsive"  alt="BANNER" className="appear"/>
                                                    </>}
                                {matches.banner2 && <>
                                                        <Image src={banner2} layout="responsive" alt="BANNER" className="appear-ban2"/>
                                                    </>}
                            </>
                        )}
                    </Media>

                    <CarouselInicio/>
                    
                    <Media queries={{
                        carouselF4:"(max-width: 380px)",
                        carouselF3:"(min-width: 381px) and (max-width: 540px)",
                        carouselF2:"(min-width: 541px) and (max-width: 900px)",
                        carouselF1:"(min-width: 901px)"
                    }}>
                        {matches=>(
                            <>
                                {matches.carouselF1 && <CarouselFragancia carouselFFoto={"carouselF-foto"} carouselF_arrow={"prev-next-btn"}/>}
                                {matches.carouselF2 && <CarouselFragancia carouselFFoto={"carouselF-foto-mid"} carouselF_arrow={"prev-next-btn-mid"}/>}
                                {matches.carouselF3 && <CarouselFraganciaSml tamañoF={""}/>}
                                {matches.carouselF4 && <CarouselFraganciaSml tamañoF={"tamañoF"}/>}
                            </>
                        )}
                    </Media>
                    <Media queries={{
                        logoWhap4:"(max-width: 450px)",
                        logoWhap3:"(min-width: 451px) and (max-width: 600px)",
                        logoWhap2:"(min-width: 601px) and (max-width: 900px)",
                        logoWhap1:"(min-width: 901px)"
                    }}>
                        {matches=>(
                            <>
                                {matches.logoWhap1 && <Image src={logoWhap} alt="Whap" className="logoWhap"  width={80} height={80}/>}
                                {matches.logoWhap2 && <Image src={logoWhap} alt="Whap" className="logoWhap"  width={70} height={70}/>}
                                {matches.logoWhap3 && <Image src={logoWhap} alt="Whap" className="logoWhap"  width={60} height={60} />}
                                {matches.logoWhap4 && <Image src={logoWhap} alt="Whap" className="logoWhap"  width={50} height={50} />}
                            </>
                        )}
                    </Media>
                </div>
                
            }

            <Script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"/>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"/>
        </>
    )
}



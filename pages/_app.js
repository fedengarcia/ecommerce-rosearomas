import '../styles/style.scss';
import { CarouselContext } from '../Context/CarouselContext';
import {CartContext} from '../Context/CartContext';
import Head from 'next/head';
import Script from "next/script";
import { StorageContext } from '../Context/StorageContext';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    var ads = document.getElementsByClassName("adsbygoogle").length;
    for (var i = 0; i < ads; i++) {
      try {
        (adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) { }
    }
  }, []);

  return (
    <>
      <Head>
        <title>Rosé Aromas</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta charSet="utf-8"/>
        <meta name="description" content="Sitio web de Rosé Aromas, emprendimiento de Zárate. Dedicado a la venta de velas, homesprays, difusores y bombones aromatizados."/>
	      <meta name="keywords" content="aromas, vela, difusor, bombon, homespray, perfume, decoracion, emprendimiento, rose"/>
        <meta name="theme-color" content="#084444"/>
        <link rel="apple-touch-icon" href="./A-imgs/rose.webp"></link>
      </Head>
      
      <CarouselContext>
        <StorageContext>
          <CartContext>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossOrigin="anonymous"/>
            
            <Component {...pageProps} />            
            
            <Script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></Script>
            <Script type="text/javascript" id='emailJS'>
              {() =>{
                  emailjs.init("iAGffvAUjlmg0kSrt");}
              }
            </Script>
          </CartContext>
        </StorageContext>
      
      </CarouselContext>
    </>)
}

export default MyApp

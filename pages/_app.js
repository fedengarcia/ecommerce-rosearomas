import '../styles/style.scss';
import { CarouselContext } from '../context/carouselContext';
import {CartContext} from '../context/CartContext';
import Script from 'next/script';


function MyApp({ Component, pageProps }) {
  return (
    
    <CarouselContext>
      <CartContext>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossOrigin="anonymous"/>
        
        <Component {...pageProps} />
      </CartContext>
    
    </CarouselContext>
  )
}

export default MyApp

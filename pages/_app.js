import '../styles/style.scss';
import { CarouselContext } from '../context/carouselContext';
import {CartContext} from '../context/CartContext';
import Script from 'next/script';


function MyApp({ Component, pageProps }) {
  return (
    
    <CarouselContext>
      <CartContext>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>

        <Component {...pageProps} />
      </CartContext>
      <Script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"/>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"/>
    </CarouselContext>
  )
}

export default MyApp

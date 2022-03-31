import '../styles/style.scss';
import { CarouselContext } from '../context/carouselContext';


function MyApp({ Component, pageProps }) {
  return (<CarouselContext>
  <Component {...pageProps} />
  </CarouselContext>)
}

export default MyApp

import Header from "./Components/HeaderX/Header";
import Footer from "./Components/FooterX/Footer";
import logoWhap from "../public/whatsapp.png";
import Image from "next/image";

function QuienSoy() {

  return (<>
    <Header />
      <div className='container-bio'>
          <div className='biografia'>
              <h1>Carolina Magnani</h1>
              <p>Hola! Bienvenidos! <br></br> Les voy a contar sobre mi, soy estudiante de marketing y emprendedora. Este emprendimiento nació como una forma de distenderme y hacer lo que me gusta. Espero que en los productos encuentren la relajación y bienestar que intento transmitir.</p>
          </div>
      </div>

      <div className="container-map">
        <p className="container-map-titulo">Me encuentro en:</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.9751660023026!2d-59.02641888506977!3d-34.09577663830547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bb0b73b7edaef3%3A0xb64dedbafcacaf5a!2sIngenieria%20%26%20Obras!5e0!3m2!1ses!2sar!4v1649103856858!5m2!1ses!2sar" allowFullScreen=""  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div className="container-logoWhap">
        <a href="https://wa.me/543487513839?text=Hola Rosé! Quería hacer una consulta" target="_blank" rel="noreferrer">
            <Image src={logoWhap} alt="Whap" className='logoWhap' width={80} height={80}/>
        </a>
      </div>
    <Footer/>
    </>
  );
}


export default QuienSoy;
import Header from "./Components/Header/Header.js";
import Footer from "./Components/Footer/Footer.js";
import logoWhap from "../public/whatsapp.png";
import Image from "next/image";
import Form from "./Components/Form/Form.js";

function FinalizarCompra() {

  return (<>
    <Header />
      <div className="form-title">
          <h1>FINALIZAR COMPRA</h1>
      </div>

      <div className="form-container">
      <Form />
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


export default FinalizarCompra;
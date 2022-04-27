import { useEffect } from "react";
import Header from "./Components/HeaderX/Header";
import Footer from "./Components/FooterX/Footer";
import logoWhap from "./A-imgs/whatsapp.png";
import Image from "next/image";
import { useRouter } from 'next/router';
import Router from 'next/router';
import { removeOrder } from "../firebaseX/Firebase";
import { sendEmail } from "../helpersX/helpers";

function StatusCompra() {
  const router=useRouter();
  
  const handleButton = () => {
    Router.push({ pathname: '/'})
  }

  useEffect(() => {
    if(router.query.keyword === "failure"){
      removeOrder(router.query.idCompra);
      sendEmail("template_qkm691n",router.query.idCompra)
    }
  }, [router.query.idCompra]);// eslint-disable-line react-hooks/exhaustive-deps

  return (<>

    <Header />

        <div style={{height: '40vh'}}></div>

        <div className="status-compra-container">
            <div className="status-compra">
                {router.query.keyword === "success" ? <p className="title-status">Tu compra ha sido procesada con exito!</p> : <p className="title-status">Tu compra ha sido rechazada, por favor intenta nuevamente.</p>}
                <div className="button-accept-status">
                    <button onClick={handleButton}>ACEPTAR</button>
                </div>
            </div>
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


export default StatusCompra;
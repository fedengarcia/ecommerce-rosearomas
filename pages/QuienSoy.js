import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import logoWhap from "../public/whatsapp.png";
import Image from "next/image";
import foto from "../public/fotoCara.png";

function QuienSoy() {


  return (<>
    <Header />
      <div className='container-bio'>
          <div className='biografia'>
              <Image src={foto} alt="Foto del usuario" width={100} height={100}/>
              <h1>{"<Nombre del usuario>"}</h1>
              <h1>{"JAJAJAJAJJAJJAJAJAJAJ"}</h1>
              <p>DESCRIPCION DEL USUARIO</p>
          </div>
      </div>

      <div className="container-logoWhap">
        <a href="https://wa.me/543487513839?text=Hola Rosé! Quería hacer una consulta" target="_blank" rel="noopener">
            <Image src={logoWhap} alt="Whap" className='logoWhap' width={80} height={80}/>
        </a>
      </div>
    <Footer/>
    </>
  );
}


export default QuienSoy;
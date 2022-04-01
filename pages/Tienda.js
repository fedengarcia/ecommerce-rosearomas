import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import logoWhap from "../public/whatsapp.png";
import Image from "next/image";


function Tienda() {


  return (<>
    <Header />
        <h1>Tienda</h1>

        <div className="container-logoWhap">
          <Image src={logoWhap} alt="Logo de whatsapp" width={80} height={80}/>
        </div>
    <Footer/>
    </>
  );
}


export default Tienda;
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import logoWhap from "../public/whatsapp.png";
import Image from "next/image";


function QuienSoy() {


  return (<>
    <Header />
        <h1>Quien Soy?</h1>

        <div className="container-logoWhap">
          <Image src={logoWhap} alt="Logo de whatsapp" width={80} height={80}/>
        </div>
    <Footer/>
    </>
  );
}


export default QuienSoy;
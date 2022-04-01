import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function NuestrosProductos() {


  return (<>
    <Header />
        <h1>Nuestros Productos</h1>

        <div className="logoWhap">
          <Image src={logoWhap} alt="Whap" width={80} height={80}/>
        </div>
    <Footer/>
    </>
  );
}


export default NuestrosProductos;
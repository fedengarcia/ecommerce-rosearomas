import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";


function Tienda() {


  return (<>
    <Header />
        <h1>Tienda</h1>

        <div className="logoWhap">
          <Image src={logoWhap} alt="Whap" width={80} height={80}/>
        </div>
    <Footer/>
    </>
  );
}


export default Tienda;
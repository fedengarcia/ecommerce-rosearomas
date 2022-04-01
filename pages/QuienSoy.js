import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


function QuienSoy() {


  return (<>
    <Header />
        <h1>Quien Soy?</h1>

        <div className="logoWhap">
          <Image src={logoWhap} alt="Whap" width={80} height={80}/>
        </div>
    <Footer/>
    </>
  );
}


export default QuienSoy;
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import logoWhap from "../public/whatsapp.png";
import Image from "next/image";

function NuestrosProductos() {


  return (<>
    <Header />
      <div className='container-Nprods'>
        <div className='container-Nprods-left'>
            <img src="https://firebasestorage.googleapis.com/v0/b/rosepagina.appspot.com/o/nuestrosProductos%2Fvela.png?alt=media&token=79251fd4-5591-45cb-9322-0ebedb490feb"
            alt="VELAS" className='fotoProd'/>
            <div className="container-Nprods-info">
                <h2>VELAS</h2>
                <p>
                  Realizadas con cera natural de soja, la cual posee diversas propiedades,
                  entre ellas que no emite gases tóxicos,duran más que las de parafina y no dejan residuos.
                  Además le agregamos esencias concentradas de larga duración.
                </p>
            </div>
        </div>
        <div className='container-Nprods-right'>
            <img src="https://firebasestorage.googleapis.com/v0/b/rosepagina.appspot.com/o/nuestrosProductos%2Fdifusor.png?alt=media&token=94fe8b7e-2860-4d7b-918c-1586d6ba0362"
            alt="VELAS" className='fotoProd'/>
            <div className="container-Nprods-info">
                <h2>DIFUSORES</h2>
                <p>
                  Perfumes para ambiente y textiles, realizados con esencias concentradas de larga duración.
                  Disponibles en versión plástico pet.
                </p>
            </div>
        </div>
        <div className='container-Nprods-left'>
            <img src="https://firebasestorage.googleapis.com/v0/b/rosepagina.appspot.com/o/nuestrosProductos%2Fhomespray.png?alt=media&token=ee23a5c1-9ca9-4bf5-ac10-d69429939263"
            alt="VELAS" className='fotoProd'/>
            <div className="container-Nprods-info">
                <h2>HOMESPRAYS</h2>
                <p>
                  Perfumes realizados con esencias concentradas de larga duración, incluye varillas de madera. 
                  Disponible en versión plástico pet y vidrio.
                </p>
            </div>
        </div>
        <div className='container-Nprods-right'>
            <img src="https://firebasestorage.googleapis.com/v0/b/rosepagina.appspot.com/o/nuestrosProductos%2Fbombon.png?alt=media&token=58ee5f8d-a0b9-44ad-ab6a-63ec346e2be7"
            alt="VELAS" className='fotoProd'/>
            <div className="container-Nprods-info">
                <h2>BOMBONES</h2>
                <p>
                  Realizados con cera de soja natural y perfumados con esencias concentradas. 
                  Ideales para decoración o para su uso en el hornito (del mismo modo que se usaría la esencia). 
                  Disponibles en su versión en bolsa de encaje o caja.
                </p>
            </div>
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


export default NuestrosProductos;
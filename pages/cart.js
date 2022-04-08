import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import logoWhap from "../public/whatsapp.png";
import Image from "next/image";
import { useState,useContext } from "react";
import { cartContext } from "../context/CartContext";

function Cart() {
  const {getItems} = useContext(cartContext);
  const [items, setitems] = useState(undefined);

  return (<>
    <Header />
        <h1>Cart</h1>



        <div className="container-logoWhap">
          <a href="https://wa.me/543487513839?text=Hola Rosé! Quería hacer una consulta" target="_blank" rel="noopener">
              <Image src={logoWhap} alt="Whap" className='logoWhap' width={80} height={80}/>
          </a>
        </div>
    <Footer/>
    </>
  );
}


export default Cart;
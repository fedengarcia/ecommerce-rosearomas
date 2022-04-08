import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import logoWhap from "../public/whatsapp.png";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getProductos } from "../firebase/Firebase";
import TiendaContainer from "./components/TiendaContainer/TiendaContainer";
import NavBarTienda from "./components/NavBar/NavBarTienda";
import { useRouter } from 'next/router'
import Notification from "./components/Notification/Notification";


function Tienda({typeProd}) {
  const [productos, setProductos] = useState([]);
  const [itemType, setItemType] = useState("Todo");
  const [showNotification,setShowNotification] = useState(false)
  
  // const handleChange = (event, newValue) => {
  //   setItemType(newValue);
  // };
  
  const router=useRouter()

  useEffect(()=>{
    if(router.query.keyword != undefined){
      setItemType(router.query.keyword)
    }
  },[router])

  useEffect(() => {

    getProductos().then(res => {
      setProductos(res);
      
    }).catch(err => console.log(err))
    

  }, []);


  return (<>
    <Header />

        {productos && <NavBarTienda setItemType={setItemType}/>} 

        <TiendaContainer itemType={itemType} productos={productos} setShowNotification={setShowNotification}/>
        
        <div className="notification-container" style={showNotification ? {zIndex:'5'} : null}>
          <Notification showNotification={showNotification} text={"Recuerda seleccionar una fragancia"}/>
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

export default Tienda;
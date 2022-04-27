import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import logoWhap from "../public/whatsapp.png";
import Image from "next/image";
import { useState, useEffect } from "react";
import TiendaContainer from "./Components/TiendaContainer/TiendaContainer";
import NavBarTienda from "./Components/NavBar/NavBarTienda";
import { useRouter } from 'next/router'
import Notification from "./Components/Notification/Notification";

function Tienda({typeProd}) {

  const [itemType, setItemType] = useState("Todo");
  const [showNotification,setShowNotification] = useState(false)
  const [showNotification2,setShowNotification2] = useState(false)

  
  const router=useRouter()

  useEffect(()=>{
    if(router.query.keyword != undefined){
      setItemType(router.query.keyword)
    }
  },[router])


  return (<>
    <Header />

        <NavBarTienda setItemType={setItemType}/>

        <TiendaContainer itemType={itemType} setItemType={setItemType} setShowNotification={setShowNotification} setShowNotification2={setShowNotification2}/>
        
        <div className="notification-container" style={showNotification ? {zIndex:'5'} : null}>
          <Notification showNotification={showNotification} text={"Recuerda seleccionar una fragancia"}/>
        </div>

        <div className="notification-container" style={showNotification2 ? {zIndex:'5'} : null}>
          <Notification showNotification2={showNotification2} text={"Se agrego correctamente"}/>
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

export default Tienda;
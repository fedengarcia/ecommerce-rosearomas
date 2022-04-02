import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import logoWhap from "../public/whatsapp.png";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getProductos } from "../firebase/Firebase";
import TiendaContainer from "./components/TiendaContainer/TiendaContainer";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


function Tienda() {
  const [productos, setProductos] = useState([]);
  const [filtro, setFiltro] = useState("1");
  
  const handleChange = (event, newValue) => {
    setFiltro(newValue);
  };

  useEffect(() => {


    getProductos().then(res => {
      setProductos(res);
      
    }).catch(err => console.log(err))
    
  }, []);




  return (<>
    <Header />

        <div className="tiendaTabs">
          <TabContext value={filtro}>
            <div className="tabs"> 
              <TabList onChange={handleChange} textColor="secondary"
                 indicatorColor="secondary">
                <Tab label="Todo" value="1" />
                <Tab label="Velas" value="2" />
                <Tab label="Difusores" value="3" />
                <Tab label="Homespray" value="4" />
                <Tab label="Bombones" value="5" />
              </TabList>
            </div>
            <div className="tabsPanel">
              <TabPanel value="1"><TiendaContainer itemType={filtro} productos={productos}/></TabPanel>
              <TabPanel value="2"><TiendaContainer itemType={filtro} productos={productos}/></TabPanel>
              <TabPanel value="3"><TiendaContainer itemType={filtro} productos={productos}/></TabPanel>
              <TabPanel value="4"><TiendaContainer itemType={filtro} productos={productos}/></TabPanel>
              <TabPanel value="5"><TiendaContainer itemType={filtro} productos={productos}/></TabPanel>
            </div>
          </TabContext>
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
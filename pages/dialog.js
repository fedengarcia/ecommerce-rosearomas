import { useState,useEffect, useContext } from "react";
import {useRouter} from 'next/router';
import ClearCartDialog from "./components/DialogComponent/ClearCartDialog";
import Header from "./components/Cabecero/Cabecero";
import Footer from "./components/Footer/Footer";
import logoWhap from "../public/whatsapp.png";
import Image from "next/image";
import { UseCartContext } from "../context/CartContext";


function Dialog() {
  const route = useRouter();
  const [dialogType, setDialogType] = useState(route.query);
  const [openClearCartDialog, setOpenClearCartDialog] = useState(true);
  const {clear} = useContext(UseCartContext);


  useEffect(() => {
      if(dialogType.keyword !== undefined){
        //   if(dialogType.keyword === "selectFraganciaDialog"){
        //       console.log(dialogType.keyword)
        //       setOpenSelectFraganciaDialog(true);
        //   }
          if(dialogType.keyword === "ClearCartDialog"){
            console.log(dialogType.keyword)
            setOpenClearCartDialog(true);

        }
      }
  }, [dialogType]);


  
  return <>

        {openClearCartDialog && ClearCartDialog({openClearCartDialog,setOpenClearCartDialog,clear})}

  </>
}


export default Dialog;
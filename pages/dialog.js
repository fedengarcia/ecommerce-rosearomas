import { useState,useEffect } from "react";
import {useRouter} from 'next/router';
import SelectFraganciaDialog from "./components/DialogComponent/SelectFraganciaDialog";

function Dialog() {
  const route = useRouter();
  const [dialogType, setDialogType] = useState(route.query);
  const [openSelectFraganciaDialog, setOpenSelectFraganciaDialog] = useState(true);

  useEffect(() => {
      if(dialogType.keyword !== undefined){
          if(dialogType.keyword === "selectFraganciaDialog"){
              console.log(dialogType.keyword)
              setOpenSelectFraganciaDialog(true);

          }
      }
  }, [dialogType]);


  
  return <>

      {openSelectFraganciaDialog && SelectFraganciaDialog({openSelectFraganciaDialog,setOpenSelectFraganciaDialog})}

  </>
}


export default Dialog;
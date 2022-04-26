import DialogComponent from './DialogComponent';


export default function SelectFraganciaDialog ({openSelectFraganciaDialog,setOpenSelectFraganciaDialog}) {

    return(
    
    <>
    <DialogComponent
        open={openSelectFraganciaDialog}
        openDialog={setOpenSelectFraganciaDialog}
        closeDialog={() => setOpenSelectFraganciaDialog(false)}
        handleConfirm={() => setOpenSelectFraganciaDialog(false)}
        title='NO SELECCIONASTE UNA FRAGANCIA'
        secondButton='OK'
    >
    Recuerda de seleccionar una fragancia para tu producto
    </DialogComponent>
    </>)
}

import DialogComponent from './DialogComponent';


export default function ClearCartDialog ({openClearCartDialog,setOpenClearCartDialog,clear}) {

    return(
    
    <>
    <DialogComponent
        open={openClearCartDialog}
        openDialog={setOpenClearCartDialog}
        closeDialog={() => setOpenClearCartDialog(false)}
        handleConfirm={() => setOpenClearCartDialog(false)}
        clearCart={() => clear()}
        title='VACIAR CARRO DE COMPRAS'
        firstButton='CANCELAR'
        secondButton='VACIAR CARRO'
    >
    Estas seguro que deseas eliminar todos los productos?
    </DialogComponent>
    </>)
}

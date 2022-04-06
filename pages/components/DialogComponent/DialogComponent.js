import {forwardRef} from 'react';
import { Dialog,DialogContent,DialogTitle,DialogActions, Typography } from '@material-ui/core';
import Slide from '@mui/material/Slide';
import { useRouter } from 'next/router';
import Router from 'next/router';


const Transition = forwardRef((props, ref) => {
    return <Slide direction="up" ref={ref} {...props} />;
  });



export default function DialogComponent (props) {
    const route = useRouter()
    const {title,open,firstButton,secondButton,children,openDialog,closeDialog} = props;

    const handleClose = () => {

        if(closeDialog){
            closeDialog();
        }
        openDialog(false);

    }

    const handleAccept = () => {
        //SEND TO
        if(route.query.keyword === 'SelectFraganciaDialog'){
            Router.push({ pathname: '/Tienda', query: { keyword: 'Todo' } })
        }
    }

    return <Dialog 
            open={open} 
            onClose={handleClose}
            TransitionComponent={Transition}
            keepMounted
            aria-describedby="alert-dialog-slide-description"
            className="dialog-container"
    >

        <DialogTitle className="dialogContent">{title}</DialogTitle>
        <DialogContent className="dialogContent">
            {children}
        </DialogContent>
        <DialogActions style={{display:"flex", justifyContent:"center"}}>
            {firstButton && <button className="buttonDialog" onClick={handleClose} >{firstButton}</button>}
            {secondButton && <button className="buttonDialog" onClick={handleAccept} >{secondButton}</button>}
        </DialogActions>


    </Dialog>


}
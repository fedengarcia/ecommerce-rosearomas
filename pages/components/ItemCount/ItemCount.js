import {useState} from 'react'
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Typography } from '@material-ui/core';




export default function ItemCount ({stock, setAmount}) {
    const [cantidad, setCantidad] = useState(1);


    const handleAddItem = () => {
        if(cantidad < stock){
            setCantidad(cantidad + 1);
            setAmount(cantidad + 1);
        }
    }
    
    const handleRemoveItem = () => {
        if(cantidad > 0){
            setCantidad(cantidad - 1);
            setAmount(cantidad - 1);
        }
    }

    return (
        <div className="itemCountContainer">


            <RemoveIcon className="buttonitemcount"onClick={handleRemoveItem} color="primary" style={{fontSize:"1.2em"}}/>


            <div className="itemCount">
                <Typography style={{fontSize:"0.7em"}}>{`Cantidad: ${cantidad}`}</Typography>
            </div>


            <AddIcon className="buttonitemcount" onClick={handleAddItem} style={{fontSize:"1.2em"}}/>

        </div>
    );
}
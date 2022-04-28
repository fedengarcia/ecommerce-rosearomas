import {useContext} from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@material-ui/core/Badge';
import Link from 'next/link';
import { UseCartContext } from '../../../Context/CartContext';



export default function CartWidget(){
    const {getQuantity} = useContext(UseCartContext);


    return(
        <Link href="/CartX" passHref >          
            <div className='cartWidget-container'>  
                <Badge badgeContent={getQuantity()} color="primary">
                    <ShoppingCartOutlinedIcon fontSize="large"/>
                </Badge>
            </div>
        </Link>
    )
}

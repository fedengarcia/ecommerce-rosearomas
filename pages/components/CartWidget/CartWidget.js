import {useContext} from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@material-ui/core/Badge';
import Link from 'next/link';



export default function CartWidget({cantProduco}){
    
    return(
        <Link href="/cart">          
        <div className='cartWidget-container'>  
            <Badge badgeContent={cantProduco} color="primary">
                <ShoppingCartOutlinedIcon fontSize="large"/>
            </Badge>
        </div>
        </Link>
    )
}

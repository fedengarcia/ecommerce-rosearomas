import {useContext} from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@material-ui/core/Badge';
import Link from 'next/link';



export default function CartWidget({cantProduco}){
    
    return(
        // <Link href="/cartContainer">          </Link>
        <Badge badgeContent={2} color="primary">
            <ShoppingCartOutlinedIcon fontSize="large"/>
        </Badge>


    )
}

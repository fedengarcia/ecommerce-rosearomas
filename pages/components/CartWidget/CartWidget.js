import React,{useContext} from 'react';
import carro from './cart.png';
import Link from 'next/link';
// import { CartContext } from '../../Context/CartContext';
// import { Link } from "react-router-dom";

export default function CartWidget({cantx,cart}){
    
    // const {cant}=useContext(CartContext)

    return(
        <div className='CartCant'>
            <Link href={"/"}>
                <Image src={carro} alt="carro" width={30} height={30} className={`Cart ${cart}`}/>
            </Link>
        </div>
    )
}

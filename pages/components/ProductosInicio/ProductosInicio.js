import React from 'react'
import Image from 'next/image'
import prod1 from "../../../public/productos-inicio/vela.png"
import prod2 from "../../../public/productos-inicio/homespray.png"
import prod3 from "../../../public/productos-inicio/difusor.png"
import prod4 from "../../../public/productos-inicio/bombon.png"
import Link from 'next/link'

export default function ProductosInicio(){

    return(
        <div>
            <h2 className="titulo-productos">NUESTROS PRODUCTOS</h2>
            <div className="contenedor-productos-inicio">
                <Link href={"/Tienda"} className="CardProdInicio">
                    <div className="productos-inicio">
                        <Image src={prod1} alt="DIFUSORES"/>
                        
                        <h3>VELAS</h3>
                    </div>
                </Link>
                <Link href={"/Tienda"}>
                    <div className="productos-inicio">
                        <Image src={prod2} alt="BOMBON"/>
                        <h3>HOMESPRAY</h3>
                    </div>
                </Link>
                <Link href={"/Tienda"}>
                    <div className="productos-inicio">
                        <Image src={prod3} alt="VELAS"/>
                        <h3>DIFUSORES</h3>
                    </div>
                </Link>
                <Link href={"/Tienda"}>
                    <div className="productos-inicio">
                        <Image src={prod4} alt="HOMESPRAY"/>
                        <h3>BOMBONES DE SOJA</h3>
                    </div>
                </Link>
            </div>
        </div>
    )
}
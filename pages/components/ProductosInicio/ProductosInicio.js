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
                <Link href={{ pathname: '/Tienda', query: { keyword: 'Velas' } }} passHref>
                    <div className="productos-inicio">
                        <div className='contenedor-card-inicio'>
                            <Image src={prod1} alt="DIFUSORES" width={445} height={520} className="img-card-inicio"/>
                        </div>
                        <h3>VELAS</h3>
                    </div>
                </Link>
                <Link href={{ pathname: '/Tienda', query: { keyword: 'Homespray' } }} passHref>
                    <div className="productos-inicio">
                        <div className='contenedor-card-inicio'>
                            <Image src={prod2} alt="BOMBON" width={445} height={520} className="img-card-inicio"/>
                        </div>
                        <h3>HOMESPRAY</h3>
                    </div>
                </Link>
                <Link href={{ pathname: '/Tienda', query: { keyword: 'Difusores' } }} passHref>
                    <div className="productos-inicio">
                        <div className='contenedor-card-inicio'>
                            <Image src={prod3} alt="VELAS" width={445} height={520} className="img-card-inicio"/>
                        </div>
                        <h3>DIFUSORES</h3>
                    </div>
                </Link>
                <Link href={{ pathname: '/Tienda', query: { keyword: 'Bombones' } }} passHref>
                    <div className="productos-inicio">
                        <div className='contenedor-card-inicio'>
                            <Image src={prod4} alt="HOMESPRAY" width={445} height={520} className="img-card-inicio"/>
                        </div>
                        <h3>BOMBONES</h3>
                    </div>
                </Link>
            </div>
        </div>
    )
}
import logo from './rose.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Header(){


    return (
        <div className="cabecero" id="cabecero">
            <h1 className='tituloMobile'>ROSÉ AROMAS</h1>

            <h1 className="tituloI">ROSÉ</h1>

            <div className='container-logoRose'>
                <div className='container2-logoRose'>
                    <Link href="/"><Image src={logo} alt="LOGO" width={230} height={200}/></Link>
                </div>
                <p>By Carolina</p>
            </div>

            <h1 className="tituloD">AROMAS</h1>
        </div>
    )
}
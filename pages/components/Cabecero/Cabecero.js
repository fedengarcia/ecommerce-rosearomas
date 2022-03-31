import logo from './rose.png'
import Image from 'next/image'


export default function Header(){


    return (
        <div className="cabecero" id="cabecero">
            <h1 className="tituloI">ROSÉ</h1>

            <div>
                <Image src={logo} alt="LOGO" width={180} height={150}/>
                <p>By Carolina</p>
            </div>

            <h1 className="tituloD">AROMAS</h1>
        </div>
    )
}
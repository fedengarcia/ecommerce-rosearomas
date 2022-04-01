import logo from './rose.png'
import Image from 'next/image'


export default function Header(){


    return (
        <div className="cabecero" id="cabecero">
            <h1 className='tituloMobile'>ROSÉ AROMAS</h1>

            <h1 className="tituloI">ROSÉ</h1>

            <div className='container-logoRose'>
                <div className='container2-logoRose'>
                    <Image src={logo} alt="LOGO" width={180} height={150}/>
                </div>
                <p>By Carolina</p>
            </div>

            <h1 className="tituloD">AROMAS</h1>
        </div>
    )
}
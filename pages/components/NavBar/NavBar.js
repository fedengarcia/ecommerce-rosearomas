import CartWidget from "../CartWidget/CartWidget"
import Link from 'next/link'

export default function NavBar() {
  

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id='navBar'>


            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span id="referenciaMenu">Incio</span>
                <span className="navbar-toggler-icon"></span>
            </button>

     
            <div className="collapse navbar-collapse justify-content-around" id="navbarNavAltMarkup">
                
                <div className="navbar-nav">
                <Link href={"/"} className="nav-link">Inicio</Link>
                <Link href={"/QuienSoy"} className="nav-link">¿Quién soy?</Link>
                <Link href={"/NuestrosProductos"} className="nav-link">Nuestros productos</Link>
                <Link href={`/Tienda`} className="nav-link">Tienda</Link>
                <Link href={"/Refill"} className="nav-link">Refill</Link>
                <Link href='#contacto' className="nav-link">Contacto</Link>

                </div>
                <CartWidget  cantProducto={"CantidadCart-big"} cart={"Cart-big"}/>

            </div>

        </nav>
    );
}






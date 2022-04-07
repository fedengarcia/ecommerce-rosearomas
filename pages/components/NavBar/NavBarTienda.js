export default function NavBarTienda({setItemType}) {
  

    const handleClick = (type) => {
        setItemType(type)
    }
    
    return(
        <nav className="navbar navbar-expand navbar-light navbar-tienda" id='navBar'>
                <div className="collapse navbar-collapse justify-content-around" id="navbarNavAltMarkup2">
                    <ul>
                        <div className="Filtro1">
                            <li onClick={() =>handleClick("Todo")}>Todo</li>
                            <li onClick={() =>handleClick("Velas")}>Velas</li>
                            <li onClick={() =>handleClick("Homespray")}>Homespray</li>
                        </div>
                        <div className="Filtro2">
                            <li onClick={() =>handleClick("Difusores")}>Difusores</li>
                            <li onClick={() =>handleClick("Bombones")}>Bombones</li>
                        </div>
                    </ul>
                </div>
        </nav>
    );
}






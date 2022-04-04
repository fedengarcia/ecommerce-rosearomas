

export default function NavBarTienda({setItemType}) {
  

    const handleClick = (type) => {
        setItemType(type)
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-light " id='navBar'>

            <div className="navbar-tienda">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span id="referenciaMenu">Incio</span>
                    <span className="navbar-toggler-icon"></span>
                </button>

        
                <div className="collapse navbar-collapse justify-content-around" id="navbarNavAltMarkup">
                    
                    <ul>
                        <li onClick={() =>handleClick("Todo")}>Todo</li>
                        <li onClick={() =>handleClick("Velas")}>Velas</li>
                        <li onClick={() =>handleClick("Homespray")}>Homespray</li>
                        <li onClick={() =>handleClick("Difusores")}>Difusores</li>
                        <li onClick={() =>handleClick("Bombones")}>Bombones</li>
                    </ul>

                </div>

            </div>
        </nav>
    );
}






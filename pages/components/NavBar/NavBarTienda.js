export default function NavBarTienda({setItemType}) {
  

    const handleClick = (type) => {
        setItemType(type)
    }

    

    return(
        <nav className="navbar navbar-expand navbar-light navbar-tienda" id='navBar'>

{/* 
                <button className="navbar-toggler" id="navbar-toggler-tienda" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup2" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span id="referenciaMenu">Tipo de producto</span>
                    <span className="navbar-toggler-icon"></span>
                </button> */}
        
                <div className="collapse navbar-collapse justify-content-around" id="navbarNavAltMarkup2">
                    
                    <ul>
                        <li onClick={() =>handleClick("Todo")}>Todo</li>
                        <li onClick={() =>handleClick("Velas")}>Velas</li>
                        <li onClick={() =>handleClick("Homespray")}>Homespray</li>
                        <li onClick={() =>handleClick("Difusores")}>Difusores</li>
                        <li onClick={() =>handleClick("Bombones")}>Bombones</li>

                    </ul>

                </div>

        </nav>
    );
}






import {Animated} from "react-animated-css";

export default function NavBarTienda({setItemType}) {
  

    const handleClick = (type) => {
        setItemType(type)
    }
    
    return(
        
            <nav className="navbar navbar-expand navbar-light navbar-tienda" id='navBar'>
                <div className="collapse navbar-collapse justify-content-around" id="navbarNavAltMarkup2">
                    <ul>
                        <div className="Filtro1">
                        <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
                            <li onClick={() =>handleClick("Todo")}>Todo</li>
                        </Animated>
                        <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
                        <li onClick={() =>handleClick("Velas")}>Velas</li>
                        </Animated>
                        <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
                        <li onClick={() =>handleClick("Homespray")}>Homespray</li>
                        </Animated>
                        </div>
                        <div className="Filtro2">
                        <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
                            <li onClick={() =>handleClick("Difusores")}>Difusores</li>
                        </Animated>
                        <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
                        <li onClick={() =>handleClick("Bombones")}>Bombones</li>
                        </Animated>
                           
                        </div>
                    </ul>
                </div>
        </nav>

        
    );
}






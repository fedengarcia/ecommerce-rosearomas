import {Animated} from "react-animated-css";

export default function NavBarTienda({setItemType}) {
  

    const handleClick = (type) => {
        setItemType(type)
    }
    
    return(
        
            <nav className="navbar navbar-expand navbar-light navbar-tienda" id='navBar'>
                <div className="collapse navbar-collapse justify-content-around" id="navbarNavAltMarkup2">
                    <ul>
                        <li style={{display:"flex"}}>
                            <div className="Filtro1">
                                <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
                                    <p onClick={() =>handleClick("Todo")}>Todo</p>
                                </Animated>
                                <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
                                    <p onClick={() =>handleClick("Velas")}>Velas</p>
                                </Animated>
                                <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
                                    <p onClick={() =>handleClick("Homespray")}>Homespray</p>
                                </Animated>
                            </div>
                            <div className="Filtro2">
                                <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
                                    <p onClick={() =>handleClick("Difusores")}>Difusores</p>
                                </Animated>
                                <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
                                    <p onClick={() =>handleClick("Bombones")}>Bombones</p>
                                </Animated>
                            </div>
                        </li>
                    </ul>
                </div>
        </nav>

        
    );
}






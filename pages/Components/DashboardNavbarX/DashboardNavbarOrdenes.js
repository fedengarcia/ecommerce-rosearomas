import {Animated} from "react-animated-css";

export default function DashboardNabvarOrdenes({setEntregado}) {


    const handleClick = (type) => {
        setEntregado(type);
    }


    return (
        <nav className="navbarorder navbar navbar-expand navbar-light navbar-tienda" id='navBar'>
                <div className="collapse navbar-collapse justify-content-around" id="navbarNavAltMarkup2">
                    <ul>
                        <div className="Filtro1">
                            <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
                                <li onClick={() =>handleClick(false)}>No Entregadas</li>
                            </Animated>
                            <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
                                <li onClick={() =>handleClick(true)}>Entregadas</li>
                            </Animated>
                        </div>
                       
                    </ul>
                </div>
        </nav>
    )
}
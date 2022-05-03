import {Animated} from "react-animated-css";

export default function DashboardNabvarOrdenes({setEntregado,entregado}) {


    const handleClick = (type) => {
        setEntregado(type);
    }


    return (
        <nav className="navbarorder navbar navbar-expand navbar-light navbar-tienda" id='navBar'>
                <div className="collapse navbar-collapse justify-content-around" id="navbarNavAltMarkup2">
                    <ul>
                        <div className="Filtro1">
                            <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true} className={entregado===false?"active":""}>
                                <li onClick={() =>handleClick(false)}>No Entregadas</li>
                            </Animated>
                            <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true} className={entregado===true?"active":""}>
                                <li onClick={() =>handleClick(true)}>Entregadas</li>
                            </Animated>
                            <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true} className={entregado==="rechazada"?"active":""}>
                                <li onClick={() =>handleClick("rechazada")}>Rechazadas</li>
                            </Animated>
                        </div>
                    </ul>
                </div>
        </nav>
    )
}
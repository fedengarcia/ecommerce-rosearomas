import { useState, useEffect } from "react"
import DashboardNavbar from "../DashboardNavbar/DashboardNavbar";
import DashboardOrdenes from "../DashboardOrdenes/DashboardOrdenes";
import DashboardProductos from "../DashboardProductos/DashboardProductos";
import DashboardFragancias from "../DashboardFragancias/DashboardFragancias";

export default function DashboardContainer () {
    const [typeContainer,setTypeContainer] = useState(undefined);


    useEffect(() => {
        setTypeContainer("Ordenes");
    }, []);

    return (
        <div className="dashboard-container">

            <div className="dashboard-title">
                <h2>ROSE AROMAS</h2>
                <h3>DASHBOARD</h3>
            </div>

            <DashboardNavbar setTypeContainer={setTypeContainer}/>


            <div className="dashboard-type">
                {typeContainer === "Ordenes" && <DashboardOrdenes/>}
                {typeContainer === "Productos" && <DashboardProductos/>}
                {typeContainer === "Fraganacias" && <DashboardFragancias/>}
            </div>
        </div>
            
    )
}
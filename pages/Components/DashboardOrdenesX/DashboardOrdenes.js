import { useEffect, useState } from "react"
import { getOrders } from "../../../firebaseX/Firebase";
import DashboardOrden from "../DashboardOrdenX/DashboardOrden";

export default function DashboardOrdenes() {
    const [orders, setOrders] = useState(undefined);

    useEffect(() => {
        getOrders().then(res => {
            setOrders(res)
        })
    }, []);


    return (
    
        <div className="dashboard-ordenes">
            <h2>Tus Ordenes</h2>

            <div className="ordenes-container">
                {orders && orders.map(orden => {<DashboardOrden orden={orden}/>})}
            </div>
            
        </div>
    
    
    )
}
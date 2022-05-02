import { useEffect, useState } from "react"
import { getOrders } from "../../../firebaseX/Firebase";
import DashboardNavbarOrdenes from "../DashboardNavbarX/DashboardNavbarOrdenes";
import DashboardOrden from "../DashboardOrdenX/DashboardOrden";

export default function DashboardOrdenes() {

    const [entregado,setEntregado]=useState(false)
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getOrders().then(res => {
            setOrders(res)
        })
    }, []);


    return (
    
        <div className="dashboard-ordenes">
            <h2>Tus Ordenes</h2>

            <DashboardNavbarOrdenes setEntregado={setEntregado}/>
            <div className="ordenes-container">
                {orders.lenght!=0?orders.filter(order=>order.entregado===entregado).map(order => <DashboardOrden order={order} key={order.id}/>):<></>}
            </div>
            
        </div>

    )
}

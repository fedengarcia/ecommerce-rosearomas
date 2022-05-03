import { useEffect, useState } from "react"
import { getOrders, getOrdersRechazadas } from "../../../firebaseX/Firebase";
import DashboardNavbarOrdenes from "../DashboardNavbarX/DashboardNavbarOrdenes";
import DashboardOrden from "../DashboardOrdenX/DashboardOrden";

export default function DashboardOrdenes() {

    const [entregado,setEntregado]=useState(false)
    const [orders, setOrders] = useState([]);
    const [ordersRechazada,setOrdersRechazadas]=useState([])

    useEffect(() => {
        getOrders("Orders").then(res => {
            setOrders(res)
        })
        getOrders("OrdersFalses").then(res => {
            setOrdersRechazadas(res)
        })
    }, [entregado]);

    return (
    
        <div className="dashboard-ordenes">
            <h2>Tus Ordenes</h2>

            <DashboardNavbarOrdenes setEntregado={setEntregado} entregado={entregado}/>
            <div className="ordenes-container">
                {entregado?
                    orders.lenght!=0?orders.filter(order=>order.entregado===entregado).map(order => <DashboardOrden order={order} key={order.id} entregado={entregado}/>):<></>
                :<></>
                }
                {entregado==="rechazada"?ordersRechazada.lenght!=0?ordersRechazada.map(order => <DashboardOrden order={order} key={order.id} entregado={entregado}/>):<></>:<></>}
            </div>
            
        </div>

    )
}

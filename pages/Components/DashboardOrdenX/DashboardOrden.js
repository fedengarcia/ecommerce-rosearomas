import {useState,useEffect} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { removeOrderFinal, setOrderEntregada } from '../../../firebaseX/Firebase';


export default function DashboardOrden({order,entregado}) {

    const [disp,setDisp]=useState("none")
    const [disp2,setDisp2]=useState("none")

    const handleEntregadoState = (order,state) => {
        setOrderEntregada(order.id,state)
    }

    const handleDetalles = () => {
      setDisp2("block")
    }

    console.log(order)

    return (
    <>
      {order && <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <p className='borrar-order' onClick={()=>{setDisp("block")}}>X</p>
          <Typography gutterBottom variant="h5" component="div">
            {order && `Nombre: ${order.payer.name} ${order.payer.surname}`}
          </Typography>
          <Typography variant="body1" color="text.secondary" className='desc-card-tienda'>
            {order && `Fecha: ${order.fecha.dia}/${order.fecha.mes}/${order.fecha.año}`}
          </Typography>
          <Typography variant="body1" color="text.secondary" className='desc-card-tienda'>
            {order && `Email: ${order.payer.email}`}
          </Typography>
          <Typography variant="h6" color="text.secondary" className='precio-card-tienda'>
            {order && `Telefono: ${order.payer.phone.area_code}-${order.payer.phone.number}`}
          </Typography>
          <Typography variant="h6" color="text.secondary" className='precio-card-tienda'>
            {order && `Localidad: ${order.payer.localidad}`}
          </Typography>
          <Typography variant="h6" color="text.secondary" className='precio-card-tienda'>
            {order && `Direccion: ${order.payer.address.street_name}-${order.payer.address.street_number} `}
          </Typography>
          <Typography variant="h6" color="text.secondary" className='precio-card-tienda'>
            {order.payer.street_piso && `Piso:${order.payer.street_piso} Numero: ${order.payer.street_apartamento}`}
          </Typography>
          
        </CardContent>

        <CardActions>
            <button onClick={() => handleDetalles()} className="button-entregada">Detalles</button>
        </CardActions>

        {entregado===true && entregado!="rechazada" && 
          <CardActions>
              <button onClick={() => handleEntregadoState(order,false)} className="button-entregada">NO ENTREGADA</button>
          </CardActions>
        }

        {entregado!=true && entregado!="rechazada" && 
          <CardActions>
              <button onClick={() => handleEntregadoState(order,true)} className="button-entregada">ENTREGADA</button>
          </CardActions>
        }
      </Card>
      }

      <div className='fondo-block' style={{display:disp2}}>
        <div className='detalles-info'>
          <p className='button-atras' onClick={()=>{setDisp2("none")}}>ATRAS</p>
          <ul className='ul-info'>
            <li>{order.fecha["dia"]}/{order.fecha["mes"]}/{order.fecha["año"]}</li>
            <li>{order.payer.name} {order.payer.surname} | {order.payer.email}</li>
            <li>{order.payer.localidad} {order.payer.address["zip_code"]} | {order.payer.address["street_name"]} {order.payer.address["street_number"]} | {order.payer.phone["area_code"]}-{order.payer.phone["number"]}</li>
            <li>{order.payer.metodo_pago}</li>
          </ul>
          <ul>
            {(order.items).map(item=><p key={item.id} className="item-list">{item.title} | Cantidad: {item.quantity} | Total: {item.quantity * item.unit_price} | Fragancia: {item.type}</p>)}
          </ul>
        </div>
      </div>

      <div className='fondo-block' style={{display:disp}}>
        <div className='confirm-cancel-info'>
          {entregado!="rechazada"?
            <p className='button-borrar-order' onClick={()=>{removeOrderFinal(order.id,"Orders"),setDisp("none")}}>Confirmar</p>
          :
            <p className='button-borrar-order' onClick={()=>{removeOrderFinal(order.id,"OrdersFalses"),setDisp("none")}}>Confirmar</p>
          }
          <p className='button-borrar-order' onClick={()=>{setDisp("none")}}>Cancelar</p>
        </div>
      </div>
    </>
  );
}
import {useState,useEffect} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { setOrderEntregada } from '../../../firebaseX/Firebase';

export default function DashboardOrden({order,actualizarOrders}) {


    const handleEntregadoState = (order) => {
        setOrderEntregada(order.id)
        actualizarOrders(order);
    }

    return (<>
    {order && <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {order && `Nombre: ${order.payer.name} ${order.payer.surname}`}
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

        {!order.entregada && 
        <CardActions>
            <button onClick={() => handleEntregadoState(order)}>ENTREGADA</button>
        </CardActions>
        }
    </Card>}</>
  );
}
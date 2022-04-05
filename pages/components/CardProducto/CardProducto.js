import {useState} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount';

export default function CardProducto({producto}) {
    const [amount,setAmount] = useState(undefined);

    return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={producto.Img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {producto.Nombre}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {producto.Descripcion}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {`Stock: ${producto.Stock}`}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {`Precio: $${producto.Precio}`}
        </Typography>
      </CardContent>
      <CardActions>
        <ItemCount stock={producto.Stock} setAmount={setAmount}/>
        <button className="add-cart-button">Agregar al carrito</button>
      </CardActions>
    </Card>
  );
}
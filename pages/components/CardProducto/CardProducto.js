import {useState} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount';
import ItemTypeSelect from '../ItemTypeSelect/ItemTypeSelect';
import AddCartButton from '../AddCartButton/addCartButton';

export default function CardProducto({producto, setShowNotification}) {
    const [type, setType] = useState("none");
    const [amount,setAmount] = useState("1");

    return (
    <Card sx={{ maxWidth: 345 }}>
      <div className='img-card-tienda'>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={producto.Img}
        />
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {producto.Nombre}
        </Typography>
        <Typography variant="body1" color="text.secondary" className='desc-card-tienda'>
          {producto.Descripcion}
        </Typography>
        <Typography variant="h6" color="text.secondary" className='precio-card-tienda'>
          {`Precio: $${producto.Precio}`}
        </Typography>
      </CardContent>
      <CardActions>
        <ItemTypeSelect setType={setType} type={type} className="select-card-tienda"/>
        <ItemCount stock={producto.Stock} setAmount={setAmount}/>
        <AddCartButton producto={producto} type={type} amount={amount} setShowNotification={setShowNotification}/>
      </CardActions>
    </Card>
  );
}
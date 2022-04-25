import {useState,useEffect} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount';
import ItemTypeSelect from '../ItemTypeSelect/ItemTypeSelect';
import AddCartButton from '../AddCartButton/AddCartButton';
import DetailsButton from '../DetailsButton/DetailsButton';
import DetailsBlock from '../DetailsBlock/DetailsBlock';

export default function CardProducto({producto, setShowNotification, setShowNotification2}) {
    const [type, setType] = useState("none");
    const [amount,setAmount] = useState(1);
    const [details,setDetails] = useState(false);

    return (
    <Card sx={{ maxWidth: 345 }}>
      <div className='img-card-tienda'>
        {producto && <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={producto.Img}
        />}
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {producto && producto.Nombre}
        </Typography>
        <Typography variant="body1" color="text.secondary" className='desc-card-tienda'>
          {producto && producto.Descripcion}
        </Typography>
        <Typography variant="h6" color="text.secondary" className='precio-card-tienda'>
          {producto && `Precio: $${producto.Precio}`}
        </Typography>
      </CardContent>
      <CardActions>
        <ItemTypeSelect setType={setType} type={type} className="select-card-tienda"/>
        <ItemCount stock={producto && producto.Stock} amount={amount} setAmount={setAmount}/>
        <AddCartButton producto={producto} type={type} amount={amount} setShowNotification={setShowNotification} setShowNotification2={setShowNotification2}/>
        <DetailsButton SetDetails={setDetails} Details={details}/>
        <DetailsBlock SetDetails={setDetails} Details={details} producto={producto} setShowNotification={setShowNotification} setShowNotification2={setShowNotification2}/>
      </CardActions>
    </Card>
  );
}
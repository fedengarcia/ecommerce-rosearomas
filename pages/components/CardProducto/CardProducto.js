import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardProducto({producto}) {
    console.log(producto)
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
        <button className="add-cart-button">Agregar al carrito</button>
      </CardActions>
    </Card>
  );
}
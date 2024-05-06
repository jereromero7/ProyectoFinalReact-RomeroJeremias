import {Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material"


export const ItemList = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image="/static/images/cards/paella.jpg"
          alt="Paella dish"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Titulos Del Articulo
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <p>icono</p>
        </IconButton>
        <IconButton aria-label="share">
          <p>icono</p>
        </IconButton>
      </CardActions>
    </Card>
  );
}

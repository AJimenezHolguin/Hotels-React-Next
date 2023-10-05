import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./card.module.css";
import { MainButton } from "../../atoms/button/button";

export const CardHotel = ({ hotel, Snackbar }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        className={styles.imageHotel}
        sx={{ height: 140 }}
        image={hotel.photo}
        title={hotel.name}
      />
      <CardContent className={styles.containerInfo}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className={styles.titleHotel}
        >
          {hotel.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className={styles.descriptionHotel}
        >
          {hotel.description}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className={styles.countryCityHotel}
        >
          country: {hotel.country} , city: {hotel.city}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className={styles.priceHotel}
        >
          Price: ${hotel.price}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className={styles.roomsHotel}
        >
          Rooms: {hotel.rooms}
        </Typography>
      </CardContent>
      <CardActions className={styles.containerButton}>
        <MainButton className={styles.buttonCardHotel}>
          DETAILS
        </MainButton>
        <MainButton className={styles.buttonCardHotel}
        onClick={()=>Snackbar(true)}
        >
          BOOKINGS
        </MainButton>
      </CardActions>
    </Card>
  );
};

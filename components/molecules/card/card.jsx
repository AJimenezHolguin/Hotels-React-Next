import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material";
import Typography from "@mui/material/Typography";
import styles from "./card.module.css";
import { MainButton } from "../../atoms/button/button";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addReservation } from "@/store/reservasSlice";
import { Snackbar } from "@mui/material"

export const CardHotel = ({ hotel, Snackbar }) => {
  const dispatch = useDispatch();

  const listHotelsReservation = useSelector(
    (state)=> state.reservation.hotelsReservation
  );


  const handleClick = () => {
    localStorage.setItem("selectedHotel", JSON.stringify(hotel));
  };

  const handleReservation = () =>{

    const hotelExist = listHotelsReservation.some(
      (hotels)=>hotels.name===hotel.name
      );

    if(hotelExist){
      alert("El hotel ya esta reservado")
    } else {
      console.log("Hotel agregado")
    dispatch(addReservation(hotel))
    Snackbar(true);
    } 
  }

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
        <Link href={`detail/${hotel.name}`}>
          <MainButton className={styles.buttonCardHotel} onClick={handleClick}>
            {" "}
            DETAILS
          </MainButton>
        </Link>

        <MainButton
          className={styles.buttonCardHotel}
          onClick={handleReservation}
        >
          BOOKINGS
        </MainButton>
      </CardActions>
    </Card>
  );
};

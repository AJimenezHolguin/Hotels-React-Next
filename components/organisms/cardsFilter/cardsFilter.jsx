"use client";
import { useState, useCallback, useEffect } from "react";
import { CardHotel } from "../../molecules/card/card";
import { Header } from "../../molecules/header/header";
import styles from "../../organisms/cardsFilter/cardsFilter.module.css";
import { hotelsRooms } from "@/app/utils/helper";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { Snackbar } from "@mui/material";

export const CardsFilter = ({ getDataHotels }) => {
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [dateHotelFrom, setDateFrom] = useState("all");
  const [dateHotelTo, setDateTo] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [selectedSize, setSelectedSize] = useState("all");
  const [filterHotels, setFilterHotels] = useState([]);
  const [setshowSnackbar, setShowSnackbar] = useState(false)

  //ESTA ES LA FORMA DE HACER LA PETICION A LA API CON REACT Y NEXT JS 12
  //   const [hotelsData, setHotelsData] = useState([])

  //   const fetchHotels = async() =>{
  //     try {
  //       const data = await hotelData()
  //       setHotelsData(data)
  //     } catch (error) {
  //       console.error("Error en los hoteles")
  //     }

  //   }

  // useEffect(()=>{
  //   fetchHotels()
  // },[])

  const clearButton = useCallback(() => {
    setSelectedCountry("all");
    setDateFrom("all");
    setDateTo("all");
    setSelectedPrice("all");
    setSelectedSize("all");

    const countrySelect = document.getElementById("countrySelect");
    const dateHotelFromInput = document.getElementById("dateHotelFrom");
    const dateHotelToInput = document.getElementById("dateHotelTo");
    const priceSelect = document.getElementById("priceSelect");
    const sizeSelect = document.getElementById("sizeSelect");

    if (countrySelect) countrySelect.value = "all";
    if (dateHotelFromInput) dateHotelFromInput.value = "all";
    if (dateHotelToInput) dateHotelToInput.value = "all";
    if (priceSelect) priceSelect.value = "all";
    if (sizeSelect) sizeSelect.value = "all";
  });

  const onSelectFromDate = useCallback((date) => {
    setDateFrom(date);
  });

  useEffect(() => {
    const dateFrom = new Date(dateHotelFrom);
    const dateTo = new Date(dateHotelTo);
    const todayDate = new Date().setHours(0, 0, 0, 0);

    const dateCheckInLocal = new Date(
      dateFrom.getTime() + dateFrom.getTimezoneOffset() * 60000
    );
    const dateCheckOutLocal = new Date(
      dateTo.getTime() + dateTo.getTimezoneOffset() * 60000
    );

    const filteredHotels = getDataHotels.filter((hotel) => {
      const availabilityHotels = todayDate + hotel.availabilityFrom;
      const availabilityDays = availabilityHotels + hotel.availabilityTo;

      const isCountryMatch =
        selectedCountry === "all" ||
        selectedCountry.toLocaleLowerCase() ===
          hotel.country.toLocaleLowerCase();

      const isPriceMatch =
        selectedPrice === "all" ||
        selectedPrice.toString() === hotel.price.toString();

      const isSizeMatch =
        selectedSize === "all" || selectedSize === hotelsRooms(hotel.rooms);

      let availability = true;

      if (dateHotelFrom !== "all" && dateHotelTo !== "all") {
        const availabilityHotels = todayDate + hotel.availabilityFrom;
        const availabilityDays = availabilityHotels + hotel.availabilityTo;

        availability =
          dateCheckInLocal.getTime() >= availabilityHotels &&
          dateCheckOutLocal.getTime() <= availabilityDays;
      }

      return isCountryMatch && isPriceMatch && isSizeMatch && availability;
    });
    setFilterHotels(filteredHotels);
  }, [
    selectedCountry,
    dateHotelFrom,
    dateHotelTo,
    selectedPrice,
    selectedSize,
  ]);

  return (
    <>
      <Header
        updateCountry={setSelectedCountry}
        updatePrice={setSelectedPrice}
        updateSize={setSelectedSize}
        updateDateTo={setDateTo}
        updateDateFrom={setDateFrom}
        clear={clearButton}
        onSelectFromDate={onSelectFromDate}
      />
      {filterHotels.length > 0 ? (
        <div className={styles.cardsConteainer}>
          {filterHotels.map((hotel, index) => (
            <CardHotel key={index} hotel={hotel} Snackbar={setShowSnackbar}/>
          ))}
        </div>
      ) : (
        <Alert severity="warning">
          <AlertTitle>¡LO SENTIMOS!</AlertTitle>
          NO HEMOS ENCONTRADO HOTELES DISPONIBLES PARA LA BUSQUEDA SELECCIONADA
          — <strong>INTENTA NUEVAMENTE</strong>
        </Alert>
      )}
      <Snackbar open={setshowSnackbar}
       autoHideDuration={2000} 
       onClose={setShowSnackbar}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          Hotel agregado correctamente
        </Alert>
      </Snackbar>
    </>
  );
};

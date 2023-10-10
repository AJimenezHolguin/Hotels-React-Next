"use client";

import { useSelector } from "react-redux";
import { CardHotel } from "../../molecules/card/card";

export const HotelsReservation = () => {
  const listHotelsReservation = useSelector(
    (state) => state.reservation.hotelsReservation
  );
  console.log(listHotelsReservation);
  return (
    <div>
      <h2>bloqueados</h2>
      {listHotelsReservation.map((hotel, index) => (
        <CardHotel key={index} hotel={hotel} />
      ))}
    </div>
  );
};

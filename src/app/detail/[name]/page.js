"use client";
import React, { useContext, useEffect, useState } from "react";
import { MainButton } from "../../../../components/atoms/button/Button";
import styles from "./page.module.css"
import { AppContext } from "@/store/CurrentProvider";

const Detail = () => {
   
  const [selectedHotel, setSelectedHotel] = useState({
    title: "",
    description: "",
    photo: "",
    country: "",
    city: "",
  });

  const {setDetailPage} = useContext(AppContext)

  useEffect(() => {
    const storedHotel = localStorage.getItem("selectedHotel");
    if (storedHotel) {
      setSelectedHotel(JSON.parse(storedHotel));
    }
    setDetailPage()
  }, []);

  const {name, photo,description, country, city} = selectedHotel;
  
  return (
    <div className={styles.container}>
        <img className={styles.detailImage} src={photo} width={300} height={300}/>
      <h2>{name}</h2>
      <p> {description} </p>
      <p>Pais: {country}</p>
      <p>Ciudad: {city}</p>
      <div>
        <MainButton className={styles.buttonCardHotel}>Reserve</MainButton>
        <MainButton className={styles.buttonSecondary}>Favorites</MainButton>
      </div>
    </div>
  );
};

export default Detail;

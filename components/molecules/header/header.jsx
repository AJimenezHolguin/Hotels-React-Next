import React from "react";
import styles from "./header.module.css";


export const Header = ({
  updateCountry,
  updatePrice,
  updateSize,
  updateDateTo,
  updateDateFrom,
  clear,
}) => {

  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>Book it</h1>
      <div className={styles.filtersBox}>
        <select
          onChange={(e) => updateCountry(e.target.value)}
          name=""
          id="countrySelect"
          className={`${styles.filtersBox__country}${styles.input}`}
        >
          <option value="all">All Country</option>
          <option value="argentina">Argentina</option>
          <option value="brasil">Brasil</option>
          <option value="chile">Chile</option>
          <option value="uruguay">Uruguay</option>
        </select>
        <input
          id="dateHotelFrom"
          onChange={(e) => updateDateFrom(e.target.value)}
          type="date"
          className={`${styles.filtersBox__input} ${styles.input}`}
          min={new Date().toISOString().split("T")[0]}
        />
        <input
          id="dateHotelTo"
          onChange={(e) => updateDateTo(e.target.value)}
          type="date"
          className={`${styles.filtersBox__input} ${styles.input}`}
          min={new Date().toISOString().split("T")[0]}
        />

        <select
          onChange={(e) => updatePrice(e.target.value)}
          name=""
          id="priceSelect"
          className={`${styles.filtersBox__country}${styles.input}`}
        >
          <option value="all">All price</option>
          <option value="1">$</option>
          <option value="2">$$</option>
          <option value="3">$$$</option>
          <option value="4">$$$$</option>
        </select>
        <select
          onChange={(e) => updateSize(e.target.value)}
          name=""
          id="sizeSelect"
          className={`${styles.filtersBox__country}${styles.input}`}
        >
          <option value="all">All size</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        <button onClick={clear} className={styles.filtersBox__btn}>
          Clear
        </button>
      </div>
    </header>
  );
};

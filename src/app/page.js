"use client";
import { CardsFilterTemplate } from '../../components/template/cardsFilter-template/cardsFiltersTemplate'
import { hotelData } from '../../services/getHotelsServices'
import styles from './page.module.css'

export default async function Home(){
  const getDataHotels = await hotelData()
  console.log(getDataHotels)
  return (
    <>
      <CardsFilterTemplate getDataHotels={getDataHotels}/>
    </>
  )
}
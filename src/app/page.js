
import { CardsFilterTemplate } from '../../components/template/cardsFilter-template/cardsFiltersTemplate'
import { hotelData } from '../../services/getHotelsServices'
import styles from './page.module.css'


export default async function Home(){
  const getDataHotels = await hotelData();


  return (
    <>
      <CardsFilterTemplate getDataHotels={getDataHotels}/>
    </>
  )
}
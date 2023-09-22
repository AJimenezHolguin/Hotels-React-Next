import {hotelData} from '../../../services/getHotelsServices'
import { CardHotel } from '../../molecules/card/card';
import {Header} from '../../molecules/header/header'
import styles from '../../organisms/cardsFilter/cardsFilter.module.css'

export const CardsFilter = () => {
    return (
        <>
        <Header/>
        <div className={styles.cardsConteainer}>
          {hotelData.map((hotel,index)=> (
            <CardHotel key={index} hotel={hotel}/>
          ))}  
        </div>
        </>
    );
};
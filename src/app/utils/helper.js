export const hotelsRooms = (rooms)=>{
   if(rooms <= 10){
    return 'small'
   } else if (rooms<=30){
    return 'medium'
   } else {
    return 'large'
   }
};
"use client"
import { createContext, useState } from "react";

export const AppContext = createContext()

export const CurrentPageProvider = ({children}) =>{
    const [currentPage, setCurrentPage] = useState('Home');
 
    const setDetailPage = () =>{
        setCurrentPage('Detail')
    }

    const setHomePage = () =>{
        setCurrentPage('Home')
    }

    return (
        <AppContext.Provider value={{currentPage,setDetailPage,setHomePage}}>
            {children}
        </AppContext.Provider>
  )  
}
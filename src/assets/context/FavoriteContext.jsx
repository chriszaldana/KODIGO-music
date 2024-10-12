/* eslint-disable react/prop-types */
import { createContext, useState } from "react";


export const FavoriteContext = createContext()

export const FavoriteProvider = ({children}) =>{
    const [cancionFavorita, setCancionFavorita] = useState([])

    const agregarFavoritos = (cancion) =>{
        setCancionFavorita((prevFavoritos) => [...prevFavoritos, cancion])
      }

      return (
        <FavoriteContext.Provider value={{cancionFavorita, agregarFavoritos, setCancionFavorita}}>
            {children}
        </FavoriteContext.Provider>
      )
}


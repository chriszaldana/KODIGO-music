import Swal from "sweetalert2";
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";


export const FavoriteContext = createContext()

export const FavoriteProvider = ({children}) =>{
    const [cancionFavorita, setCancionFavorita] = useState([])

    const agregarFavoritos = (cancion) =>{
        setCancionFavorita((prevFavoritos) => [...prevFavoritos, cancion])
        Swal.fire("Tu cancion se agrego a favoritos");
      }
      
    const [email, setEmail] = useState('')

      return (
        <FavoriteContext.Provider value={{cancionFavorita, agregarFavoritos, setCancionFavorita, setEmail, email}}>
            {children}
        </FavoriteContext.Provider>
      )
}


import { useForm } from "react-hook-form"
import { useContext, useState } from "react"
import { FavoriteContext } from "../context/FavoriteContext"

const MainPage = () => {

  const [canciones, setCanciones] = useState([])

  const {agregarFavoritos} = useContext(FavoriteContext)
  
  console.log(canciones);
  
  //Reac-hook-forms validation
  const {register, handleSubmit, setValue} = useForm()

  const handleSearch = (data) =>{
    

    if (data.cancion.trim()=== '') {
      alert('Debes escribir algo')
      return
    }

    setValue('cancion','')
    getSong(data.cancion)
  }

  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '56f2eb45f4msh49760829d5ebed0p14fbd0jsn9b1fd0f0c584',
      'x-rapidapi-host': 'spotify23.p.rapidapi.com'
    }
  };

  const getSong = async(cancion) =>{
    console.log(cancion);
    try {
      let url = `https://spotify23.p.rapidapi.com/search/?q=${cancion}&type=multi&offset=0&limit=20&numberOfTopResults=5`
      let data = await fetch(url,options)
      let response = await data.json()
      setCanciones(response.tracks.items);
      
    } catch (error) {
      alert(error,'Ups... no se encontro')
    }
    
  } 



  return (
    <>
    <div className="container">
        <form onSubmit={handleSubmit(handleSearch)}>
          <h1>¿Qué quieres escuchar hoy?</h1>
          <input
            type="text"
            placeholder="Escribe tu canción"
            id="cancion"
            {...register("cancion")}
          />
          <button type="submit">Buscar</button>
        </form>

        {canciones.map((cancion) => (
          <div className="card" style={{ width: "18rem" }} key={cancion.data.id}>
            <img
              src={cancion.data.albumOfTrack.coverArt.sources[0].url}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{cancion.data.name}</h5>
              <p className="card-text">
                {cancion.data.artists.items[0].profile.name}
              </p>
              <button
                onClick={() => agregarFavoritos(cancion)}
                className="btn btn-primary"
              >
                Agregar a Favoritos
              </button>
            </div>
          </div>
        ))}
       
        

      </div>
    
    </>
  )
}

export default MainPage



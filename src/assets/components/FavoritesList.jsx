import { useContext } from "react"
import { FavoriteContext } from "../context/FavoriteContext"


const FavoritesList = () => {

  const {cancionFavorita} = useContext(FavoriteContext)

  return (
    <>
      <h2>Tus Canciones Favoritas</h2>
      {cancionFavorita.length > 0 ? (
        cancionFavorita.map((cancion) => (
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
            </div>
          </div>
        ))
      ) : (
        <p>No tienes canciones favoritas aún.</p>
      )}
    </>
  );
}

export default FavoritesList
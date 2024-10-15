/* eslint-disable react/jsx-key */
import { useContext } from "react"
import { FavoriteContext } from "../context/FavoriteContext"


const FavoritesList = () => {

  const {cancionFavorita} = useContext(FavoriteContext)

  return (
    <>
      <h2 className="text-center">Tus Canciones Favoritas</h2>
      <div className="container mt-5">
          <div className="row">
      {cancionFavorita.length > 0 ? (
        cancionFavorita.map((cancion) => (
          
          <div className="d-flex justify-content-center col-xxl-3 col-xl-4 col-lg-6 col- mt-3 mb-3">
          <div className="card" style={{ width: "18rem" }} key={cancion.data.id}>
            <img
              src={cancion.data.albumOfTrack.coverArt.sources[0].url}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body bg-black text-white">
              <h5 className="card-title">{cancion.data.name}</h5>
              <p className="card-text">
                {cancion.data.artists.items[0].profile.name}
              </p>
              <a href={cancion.data.uri}><button
            className="btn btn-outline-success"
          >Play</button></a>
            </div>
          </div>
          </div>
        ))
      ) : (
        <p>No tienes canciones favoritas aún.</p>
      )}
      </div>
      </div>
    </>
  );
}

export default FavoritesList
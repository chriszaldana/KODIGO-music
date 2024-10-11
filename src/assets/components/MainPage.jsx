import { getAuth, signOut } from "firebase/auth"
import appFirebase from "../firebase/config"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"

const auth = getAuth(appFirebase)

const MainPage = () => {



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
      console.log(response.tracks.items);
      
    } catch (error) {
      alert(error,'Ups... no se encontro')
    }
    
  } 

  const navigate = useNavigate()

  const handleClick = () => {
    signOut(auth).then(() =>{
      navigate('/')
    }
      
    )
  }

  return (
    <>
    <div className="container">
      <form onSubmit={handleSubmit(handleSearch)}>
        <h1>¿Que quieres escuchar hoy?</h1>
        <input type="text" placeholder="Escribe tu cancion" id="cancion" {...register('cancion')}/>
        <button type="submit">Buscar</button>
      </form>
      <button onClick={handleClick}>Log out</button>
      <Link to='/songplaying'> Esuchar una cancion </Link>
    </div>
    
    </>
  )
}

export default MainPage
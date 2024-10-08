import { getAuth, signOut } from "firebase/auth"
import appFirebase from "../firebase/config"
import { Link, useNavigate } from "react-router-dom"
const auth = getAuth(appFirebase)

const MainPage = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    signOut(auth).then(() =>{
      navigate('/')
    }
      
    )
  }

  return (
    <>
    <h1>Main Page</h1>
    <Link to='/songplaying'> Esuchar una cancion </Link>
    <button onClick={handleClick}>Log out</button>
    </>
  )
}

export default MainPage
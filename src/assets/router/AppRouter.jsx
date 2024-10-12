import { Route, Routes } from "react-router-dom"
import MainPage from '../components/MainPage'
import Login from "../components/Login"
import FavoritesList from "../components/FavoritesList"
import NavBar from "../components/NavBar"
import { FavoriteProvider } from "../context/FavoriteContext"


const AppRouter = () => {
  return (
    <>
    <FavoriteProvider>
      <Routes>
            <Route path="/" element = {<NavBar/>}>
              <Route index element = {<Login />} />    
              <Route path="/mainpage" element = {<MainPage />} />
              <Route path="/favoritos" element = {<FavoritesList />}/>
            </Route>
            
      </Routes>
    </FavoriteProvider>
      
 
    </>
  )
}

export default AppRouter
import { Route, Routes } from "react-router-dom"
import MainPage from '../components/MainPage'
import Login from "../components/Login"
import SongPage from '../components/SongPage'

const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element = {<Login />} />    
            <Route path="/mainpage" element = {<MainPage />} />
            <Route path="/songplaying" element = {<SongPage />}/>
        </Routes>
    </>
  )
}

export default AppRouter
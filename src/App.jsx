import '../src/assets/css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import AppRouter from './assets/router/AppRouter'
import MainPage from './assets/components/MainPage'
import { useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import appFirebase from './assets/firebase/config'
import Login from './assets/components/Login'
const auth = getAuth(appFirebase)



function App() {
  const [usuario, setUsuario] = useState(null)

onAuthStateChanged(auth,(usuarioFirebase) =>{
  if (usuarioFirebase) {
    setUsuario(usuarioFirebase)
  }
  else{
    setUsuario(null)
  }
})
  return(

    <>
    <AppRouter />
    </>
    

  ) 
}

export default App

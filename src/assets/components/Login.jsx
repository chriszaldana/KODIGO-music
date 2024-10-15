/* eslint-disable no-unused-vars */
import appFirebase from "../firebase/config"
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'
import {useForm} from 'react-hook-form'
import SpotifyLogo from '../images/Spotify.svg'
import { FavoriteContext } from "../context/FavoriteContext"

const auth = getAuth(appFirebase)

const Login = () => {

    const {setEmail} = useContext(FavoriteContext)

    const {register, handleSubmit, formState} = useForm()
    const {errors} = formState

    const navigate = useNavigate()

    const [registrandose, setRegistrandose] = useState(false)

    const funcionToAuth = async(data) => {

        if (registrandose) {
            try {
                await createUserWithEmailAndPassword(auth,data.email,data.password)
                navigate('/mainpage')
                setEmail(data.email)
            } catch (error) {
                Swal.fire({
                    text: "Asegurese que la contraseña tenga 8 digitos",
                    icon: "error"
                  });
            }    
        }else{
            try {
                await signInWithEmailAndPassword(auth, data.email, data.password)
                navigate('/mainpage')
                setEmail(data.email)
            } catch (error) {
                Swal.fire({
                    text: "El correo o contraseña son incorrectos",
                    icon: "error"
                  });
            }
        }
        
    }

  return (
    <>
    
    
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
    <div>
    <img src={SpotifyLogo} alt="Spotify Logo" width={200}/>
    <p className="text-center fs-3 fw-bolder">Login to Spotify</p>
    </div>
    
        <form className="w-50" onSubmit={handleSubmit(funcionToAuth)} noValidate>
            <div className="mb-3">
                <label className="form-label">Correo Electronico</label>
                <input type="email" className="form-control w-100" id="email" {...register('email',{required:{value: true, message: 'El correo es necesario para ingresar'}, pattern:{value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, message: 'Correo invalido'}})}aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">No compartiremos tu correo electronico con nadie mas</div>
                <p className="text-danger">{errors.email?.message}</p>
            </div>
            <div className="mb-3">
                <label  className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="password" {...register('password', {required:{value: true, message: 'Necesita ingresar la contraseña'}})}/>
                <p className="text-danger">{errors.password?.message}</p>
            </div>
            <button type="submit" className="btn btn-outline-success">Ingresar</button>
            <button onClick={() =>{setRegistrandose(true)}} type="submit" className="mx-2 btn btn-outline-success">Registrarse</button>
        </form>
        
    </div>
       
    </>
  )
}

export default Login
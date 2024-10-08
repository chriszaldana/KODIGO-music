/* eslint-disable no-unused-vars */
import appFirebase from "../firebase/config"
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'
import {useForm} from 'react-hook-form'
import { DevTool } from "@hookform/devtools"

const auth = getAuth(appFirebase)

const Login = () => {

    const {register, handleSubmit, control} = useForm()

    const navigate = useNavigate()

    const [registrandose, setRegistrandose] = useState(false)

    const funcionToAuth = async(data) => {
       
        // const correo = e.target.email.value  
        // const pass = e.target.password.value
        console.log(data);
        

        if (registrandose) {
            try {
                await createUserWithEmailAndPassword(auth,data.email,data.password)
                navigate('/mainpage')
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
    <div className="container mt-5">
        <form onSubmit={handleSubmit(funcionToAuth)}>
            <div className="mb-3">
                <label className="form-label">Correo Electronico</label>
                <input type="email" className="form-control" id="email" {...register('email')}aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">No compartiremos tu correo electronico con nadie mas</div>
            </div>
            <div className="mb-3">
                <label  className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="password" {...register('password')}/>
            </div>
            <button type="submit" className="btn btn-primary">Ingresar</button>
            <button onClick={() =>{setRegistrandose(true)}} type="submit" className="mx-2 btn btn-primary">Registrarse</button>
        </form>
        <DevTool control={control} />
    </div>
       
    </>
  )
}

export default Login
import appFirebase from "../firebase/config"
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import { useState } from 'react'

const auth = getAuth(appFirebase)

const Login = () => {

    const [registrandose, setRegistrandose] = useState(false)

    const funcionToAuth = async(e) => {
        e.preventDefault()
        const correo = e.target.email.value  
        const pass = e.target.password.value
        console.log(correo,pass);

        if (registrandose) {
            try {
                await createUserWithEmailAndPassword(auth,correo,pass)
            } catch (error) {
                Swal.fire({
                    text: "Asegurese que la contraseña tenga 8 digitos",
                    icon: "error"
                  });
            }
            
        }
        
    }

  return (
    <>
    <div className="container mt-5">
        <form onSubmit={funcionToAuth}>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">Well never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label  className="form-label">Password</label>
                <input type="password" className="form-control" id="password"/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
       
    </>
  )
}

export default Login
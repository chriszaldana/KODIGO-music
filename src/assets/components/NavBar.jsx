import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"
import { useContext, useEffect, useState } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { FavoriteContext } from "../context/FavoriteContext"

const NavBar = () => {

    const [user, setUser] = useState(null)
    const auth = getAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const { setCancionFavorita } = useContext(FavoriteContext)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user)
            }else{
                setUser(null)
            }
        })

        return () => unsubscribe()
    }, [auth])

    

    const handleLogOut = () => {
    signOut(auth).then(() =>{
    setCancionFavorita([])
    setUser(null)
    navigate('/')
    }
      
    )
  }

  const irAFavoritos = () => {
    if (location.pathname === '/favoritos') {
        navigate('/mainpage')
    }else
        navigate('/favoritos')
}




  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                </ul>
                {user ? (
            <>
                <div className="d-flex">
                <button onClick={irAFavoritos} className="btn btn-secondary">
                    {location.pathname === '/favoritos' ? 'Pagina Principal' : 'Ir a Favoritos'}
                     </button>
                    <button onClick={handleLogOut} className="btn btn-outline-success">Log Out</button>
                </div>
            </>
        ) : ('') }

                </div>
            </div>
        </nav>
<Outlet />
    </>
  )
}

export default NavBar
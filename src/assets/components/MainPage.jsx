import { getAuth, signOut } from "firebase/auth"
import appFirebase from "../firebase/config"
const auth = getAuth(appFirebase)

const MainPage = () => {

  return (
    <>
    <h1>Main Page</h1>
    <button onClick={() => signOut(auth)}>Log out</button>
    </>
  )
}

export default MainPage
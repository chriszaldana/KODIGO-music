import { useNavigate } from "react-router-dom"

const SongPage = () => {

  const navigate = useNavigate()

  const backToMain = () =>{

    navigate('/mainpage')
  }

  return (
    <>
    SongPage
    <button onClick={backToMain}>Back to main</button>
    </>
  )
}

export default SongPage
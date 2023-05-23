import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const url =" http://localhost:3000/noticias"

const Noticias = () => {
    const [noticias, setNoticias] = useState([])
  useEffect (() => {
      async function buscarDados(){
          const resposta = await fetch(url)
          const dados = await resposta.json()
          setNoticias(dados)
      }
      buscarDados()
  }, [] )

  return (
    <div>
        <h1>Noticias</h1>
        <ul>
          {
            noticias.map((notic) => 
            <li key={notic.id}>
              <h2><Link to={`/visualiza-noticia/${notic.id}`}>{notic.titulo}</Link></h2>
              <h3>{notic.subtitulo}</h3>
            </li>
            )
          }
        </ul>
    </div>
  )
}
export default Noticias
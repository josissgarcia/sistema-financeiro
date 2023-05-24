import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const url =" http://localhost:3000/lancamentos"

const Lancamentos = () => {
    const [lancamentos, setLancamentos] = useState([])
  useEffect (() => {
      async function search(){
          const response = await fetch(url)
          const data = await response.json()
          setLancamentos(data)
      }
      search()
  }, [] )

  return (
    <div>
        <h1>Lancamentos</h1>
        <ul>
          {
            lancamentos.map((lancamentosMapeados) => 
            <li key={lancamentosMapeados.id}>
              <h2><Link to={`/visualiza-noticia/${lancamentosMapeados.id}`}>{lancamentosMapeados.titulo}</Link></h2>
            </li>
            )
          }
        </ul>
    </div>
  )
}
export default Lancamentos
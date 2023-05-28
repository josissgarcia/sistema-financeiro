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
        <h2>Lançamentos</h2>
        <ul>
          {
            <li>
              <h2><Link to={`/form-cadastro`}>Formulário para Lançamentos de Despesas e Receitas Pessoais</Link></h2>
            </li>
            // lancamentos.map((lancamentosMapeados) => 
            // <li key={lancamentosMapeados}>
            //   <h2><Link to={`/visualiza-noticia/${lancamentosMapeados}`}>Moradia</Link></h2>
            // </li>
            // )
          }
        </ul>
    </div>
  )
}
export default Lancamentos
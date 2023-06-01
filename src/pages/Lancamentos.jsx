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
    <div className='lancamento'>
        <h2>Lançamentos</h2>
        <hr /> <br />
        <button className='linkForm' onClick={() => { window.location.href = '/form-cadastro'; }}>
          Incluir Lançamento
        </button>
    </div>
  )
}
export default Lancamentos
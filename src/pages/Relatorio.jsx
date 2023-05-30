import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Relatorio = () => {
    const {id} = useParams()
    const [viewItens, setViewItens] = useState([])
    const url = `http://localhost:3000/lancamentos`

    useEffect (() => {
        async function search(){
            try {
                const response = await fetch(url)
                const data = await response.json()
                if (response.ok) {
                    setViewItens(data)
                } else {
                    console.error("Erro ao buscar dados: ", response.status);
                }
            } catch (error) {
                console.error(error);
            }
        }
        search()
    }, [id, url] )
  return (
    <div className='relatorio'>
        {
          viewItens.map((viewNew) => 
          <div key={viewNew.id}>
              <h2>{viewNew.subgrupo}</h2>
              <p>Data: {viewNew.data}</p>
              <p>Valor: {viewNew.valor}</p>
              <p>Tipo: {viewNew.tipo}</p>
              <p>Observação: {viewNew.observacao}</p>
          </div>
          )
        }
    </div>
  )
}

export default Relatorio
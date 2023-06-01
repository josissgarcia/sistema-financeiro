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
        <h2>Relatório de Lançamentos</h2>
        <hr /> <br />
        {
          viewItens.map((viewItem) => 
          <div key={viewItem.id}>
              <h3>{viewItem.grupo}</h3>
              <p>Subgrupo: {viewItem.subgrupo}</p>
              <p>Tipo: {viewItem.tipo}</p>
              <p>Data: {viewItem.data}</p>
              <p>Valor: {viewItem.valor}</p>
              <br />
          </div>
          )
        }
    </div>
  )
}

export default Relatorio
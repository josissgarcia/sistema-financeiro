import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const VisualizaNoticia = () => {
    const {id} = useParams()
    const url = `http://localhost:3000/lancamentos`

    const [viewNews, setViewNews] = useState([])
    const [formData, setFormData] = useState({
        subgrupo: '',
        data: '',
        valor: '',
        tipo: '',
        observacao: ''
    })
    
    useEffect (() => {
        async function search(){
            try {
                const response = await fetch(url)
                const data = await response.json()
                if (response.ok) {
                    setViewNews(data)
                } else {
                    console.error("Erro ao buscar dados: ", response.status);
                }
            } catch (error) {
                console.error(error);
            }
        }
        search()
    }, [id, url] )

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(url, formData)
            console.log(response.data)
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <div>
        {/* <h1>{viewNews.titulo}</h1> */}
        <h1>Moradia</h1>
        
        <form onSubmit={handleSubmit}>
            <label>
                Subgrupo:
                <select name="subgrupo" id="subgrupo" onChange={handleChange}>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
            </label>
            <label>
                Data:
                <input type="date" name="data" onChange={handleChange} />
            </label>
            <label>
                Valor:
                <input type="number" name="valor" onChange={handleChange} />
            </label>
            <label>
                Tipo:
                <select name="tipo" id="tipo" onChange={handleChange}>
                  <option value="Débito">Débito</option>
                  <option value="Crédito">Crédito</option>
                </select>
            </label>
            <label>
                Observação:
                <input type="text" name="observacao" onChange={handleChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
        {
          viewNews.map((viewNew) => 
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

export default VisualizaNoticia

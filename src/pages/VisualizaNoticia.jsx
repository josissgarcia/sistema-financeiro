import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const VisualizaNoticia = () => {
    const {id} = useParams()
    const url = `http://localhost:3000/noticias/${id}`

    const [visualizaNoticia, setVisualizaNoticia] = useState({})
    
    useEffect (() => {
        async function buscarDados(){
            const resposta = await fetch(url)
            const dados = await resposta.json() 

            setVisualizaNoticia(dados)
        }
        buscarDados()
    }, [] )

  return (
    <div>
        <h1>{visualizaNoticia.titulo}</h1>
        <h2>{visualizaNoticia.subtitulo}</h2>
        <p>{visualizaNoticia.texto}</p>
    </div>
  )
}

export default VisualizaNoticia
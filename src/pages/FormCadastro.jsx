import { useState } from 'react'
import axios from 'axios'

const FormCadastro = () => {
    const url = `http://localhost:3000/lancamentos`

    const initialFormData = {
        grupo: '',
        subgrupo: '',
        tipo: '',
        data: '',
        valor: ''
    }

    const [formData, setFormData] = useState(initialFormData)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(url, formData)
            console.log(response.data)
            setFormData(initialFormData)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <h1>Cadastro Receita/Despesa</h1>
                <hr /> <br />
                <div className='elementForm'>
                    <label className="labelForm">Grupo:</label>
                    <select className="inputForm dropdown" name="grupo" id="grupo" onChange={handleChange} value={formData.grupo}>
                        <option disabled value="">Selecione grupo</option>
                        <option value="Alimentação">Alimentação</option>
                        <option value="Educação">Educação</option>
                        <option value="Moradia">Moradia</option>
                        <option value="Saúde">Saúde</option>
                        <option value="Transporte">Transporte</option>
                    </select>
                </div>

                <div className='elementForm'>
                    <label className="labelForm">Subgrupo:</label>
                    <input className="inputForm" type="text" name="subgrupo" onChange={handleChange} value={formData.subgrupo} />
                </div>

                <div className='elementForm'>
                    <label className="labelForm">Tipo:</label>
                    <select className="inputForm dropdown" name="tipo" id="tipo" onChange={handleChange} value={formData.tipo}>
                        <option disabled value="">Selecione tipo</option>
                        <option value="Débito">Débito</option>
                        <option value="Crédito">Crédito</option>
                    </select>
                </div>

                <div className='elementForm'>
                    <label className="labelForm">Data:</label>
                    <input className="inputForm" type="date" name="data" onChange={handleChange} value={formData.data} />
                </div>

                <div className='elementForm'>
                    <label className="labelForm">Valor:</label>
                    <input className="inputForm" type="number" name="valor" step=".01" onChange={handleChange} value={formData.valor} />
                </div>
                <div className='button'>
                    <button type="submit">Salvar</button>
                </div>
            </form>
        </div>
    )
}

export default FormCadastro

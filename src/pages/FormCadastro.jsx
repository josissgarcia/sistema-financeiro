import { useState } from 'react'
import axios from 'axios'
import { Container, Row, Col, Card } from 'react-bootstrap';

const FormCadastro = () => {
    const url = `http://localhost:3000/lancamentos`

    const [formData, setFormData] = useState({
        grupo: '',
        subgrupo: '',
        tipo: '',
        data: '',
        valor: ''
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
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
            <form onSubmit={handleSubmit}>
            <Container>
                <h1>Cadastro Receita/Despesa</h1>
                <Card>
                    <Row>
                        <Col sm={2}>
                            <label>Grupo:</label>
                        </Col>
                        <Col sm={10}>
                            <select name="grupo" id="grupo" onChange={handleChange} >
                                <option value="alimentacao">Alimentação</option>
                                <option value="educacao">Educação</option>
                                <option value="moradia">Moradia</option>
                                <option value="saude">Saúde</option>
                                <option value="transporte">Tranporte</option>
                            </select>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={2}>
                            <label>Subgrupo:</label>
                        </Col>
                        <Col>
                            <input type="text" name="subgrupo" onChange={handleChange} />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={2}>
                            <label>Tipo:</label>
                        </Col>
                        <Col>
                            <select name="tipo" id="tipo" onChange={handleChange}>
                                <option value="Débito">Débito</option>
                                <option value="Crédito">Crédito</option>
                            </select>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={2}>
                            <label>Data:</label>
                        </Col>
                        <Col>
                            <input type="date" name="data" onChange={handleChange} />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={2}>
                            <label>Valor </label>
                        </Col>
                        <Col>
                            <input type="number" name="valor" step=".01" onChange={handleChange} />
                        </Col>
                    </Row>
                </Card>
            </Container>
            <button type="submit">Submit</button>
        </form>
    </div>
    )
}

export default FormCadastro

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Lancamentos from "./pages/Lancamentos"
import Sobre from "./pages/Sobre"
import Navbar from "./components/Navbar"
import FormCadastro from "./pages/FormCadastro"
import './App.css'


function App() {
 
  return (
    <>
      <BrowserRouter>
        <h1>Controle financeiro Pessaol</h1>
        <img src= 'icone_financeiro.jpg' alt="ícone de sifão de dinheiro com setas no sentido entrando e saindo. "/> <br/>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/lancamentos' element={<Lancamentos />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path="/form-cadastro" element={<FormCadastro />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Lancamentos from "./pages/Lancamentos"
import Sobre from "./pages/Sobre"
import Navbar from "./components/Navbar"
import FormCadastro from "./pages/FormCadastro"
import './App.css'
import Relatorio from "./pages/Relatorio"



function App() {
 
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <h1>Controle Financeiro Pessoal</h1>
        <img src= 'banner.png' alt="ícone de sifão de dinheiro com setas no sentido entrando e saindo. "/> <br/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/lancamentos' element={<Lancamentos />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path="/form-cadastro" element={<FormCadastro />} />
          <Route path="/relatorio" element={<Relatorio />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

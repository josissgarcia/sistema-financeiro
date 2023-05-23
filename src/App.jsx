import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Faculdade from "./pages/Faculdade"
import DpoLgpd from "./pages/DpoLgpd"
import Noticias from "./pages/Noticias"
import Navbar from "./components/Navbar"
import VisualizaNoticia from "./pages/VisualizaNoticia"


function App() {
 
  return (
    <>
      <BrowserRouter>
        <h1>Uniesp Centro Universitário</h1>
        <img src= 'logo_Uniesp.png' alt="Logo Uniesp"/> <br/>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/a-faculdade' element={<Faculdade />} />
          <Route path='/dpo-lgpd' element={<DpoLgpd />} />
          <Route path='/noticias' element={<Noticias />} />
          <Route path="/visualiza-noticia/:id" element={<VisualizaNoticia />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

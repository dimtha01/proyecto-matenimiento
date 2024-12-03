import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Inicio from "./page/Inicio"
import Reportes from "./page/Reportes"
import Barcos from "./page/Barcos"
import Agendas from "./page/Agendas"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" element={<Inicio/>} />
          <Route path="/reportes" element={<Reportes/>} />
          <Route path="/barcos" element={<Barcos/>} />
          <Route path="/Agendas" element={<Agendas/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
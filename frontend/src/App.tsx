import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Rutas públicas
import LoginAdm from '../src/assets/LoginAdm'
import RegistroAdm from '../src/assets/RegistroAdm'
import RestContra from '../src/assets/RestContra'

// Dashboard principal
import Dashboard from '../src/assets/Dashboard'

// Componentes internos del dashboard (usando <Outlet/> en Dashboard)
import Inicio from '../src/assets/Inicio'
import Perfil from '../src/assets/Perfil'
import Estudiantes from '../src/assets/Estudiantes'
import Seguimiento from '../src/assets/Seguimiento'
import Notificaciones from '../src/assets/Notificaciones'
import Configuracion from '../src/assets/Configuracion'

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<LoginAdm />} />
        <Route path="/registro" element={<RegistroAdm />} />
        <Route path="/password" element={<RestContra />} />

        {/* Ruta protegida del dashboard con rutas hijas */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Inicio />} />
          <Route path="perfil" element={<Perfil />} />
          <Route path="estudiantes" element={<Estudiantes />} />
          <Route path="seguimiento" element={<Seguimiento />} />
          <Route path="notificaciones" element={<Notificaciones />} />
          <Route path="configuracion" element={<Configuracion />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App

import { Outlet, NavLink } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

  const Dashboard: React.FC = () => {
      const rol = 'Administrador'
  const [institucion, setInstitucion] = useState('')

  useEffect(() => {
    const nombreGuardado = localStorage.getItem('institucion')
    if (nombreGuardado) {
      setInstitucion(nombreGuardado)
    }
  }, [])


  return (
    <div className="flex min-h-screen bg-[#1e1f22] text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#2b2d31] p-6 space-y-4 border-r border-[#3a3d41]">
        <h2 className="text-xl font-bold text-[#00b0f4] mb-6"> ZAVIRA </h2>
        <nav className="flex flex-col space-y-2">
          <NavLink to="" end className={({ isActive }) => isActive ? activeLink : normalLink}>
            Inicio
          </NavLink>
          <NavLink to="perfil" className={({ isActive }) => isActive ? activeLink : normalLink}>
            Perfil
          </NavLink>
          <NavLink to="estudiantes" className={({ isActive }) => isActive ? activeLink : normalLink}>
            Estudiantes
          </NavLink>
          <NavLink to="seguimiento" className={({ isActive }) => isActive ? activeLink : normalLink}>
            Seguimiento
          </NavLink>
          <NavLink to="notificaciones" className={({ isActive }) => isActive ? activeLink : normalLink}>
            Notificaciones
          </NavLink>
          <NavLink to="configuracion" className={({ isActive }) => isActive ? activeLink : normalLink}>
            Configuración
          </NavLink>
        </nav>
      </aside>

      {/* Contenido principal */}
      <div className="flex-1 p-6">
        {/* Encabezado */}
        <header className="flex justify-between items-center mb-6 border-b border-[#3a3d41] pb-2">
          <span className="text-sm text-gray-400">
            <strong>{rol}</strong>
          </span>
        <span className="text-sm text-gray-400">
        <strong>{institucion || ''}</strong>
          </span>

        </header>

        {/* Aquí se renderiza la vista seleccionada */}
        <Outlet />
      </div>
    </div>
  )
}

const normalLink = "text-gray-300 hover:text-[#00b0f4] transition"
const activeLink = "text-[#00b0f4] font-semibold"

export default Dashboard;

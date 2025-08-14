import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import robot from '../image/inicio.png'

const Login: React.FC = () => {
  const [correo, setCorreo] = useState('')
  const [password, setPassword] = useState('')
  const [mensaje, setMensaje] = useState('')
  const navigate = useNavigate() // <-- Importante

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  const res = await fetch('http://localhost:3333/instituciones/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ correo, password })
  })

  const data = await res.json()

  if (res.ok) {
    setMensaje('Inicio de sesión exitoso')

    // Guarda el token
    localStorage.setItem('token', data.token)

    // ✅ Guarda correctamente el nombre de la institución
    if (data.resp && data.resp.nombre) {
      localStorage.setItem('institucion', data.resp.nombre)
    }

    navigate('/dashboard')
  } else {
    setMensaje('Credenciales incorrectas')
  }
}

  return (
    <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-[#1f1f1f] rounded-xl shadow-2xl border border-[#3a3d41] p-6 sm:p-8 text-white">
        <div className="text-center mb-6">
          <img src={robot} alt="robot" className="w-10 mx-auto mb-3 animate-bounce" />
          <h1 className="text-3xl font-extrabold text-[#00b0f4] mb-1">Bienvenido</h1>
          <p className="text-gray-400 text-sm">Ingresa tus credenciales</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm text-gray-300">Correo electrónico</label>
            <input
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              placeholder="ejemplo@correo.com"
              className="w-full p-3 rounded-lg bg-[#0f0f0f] border border-[#3a3d41] focus:outline-none focus:ring-2 focus:ring-[#00b0f4] placeholder-gray-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-300">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="w-full p-3 rounded-lg bg-[#0f0f0f] border border-[#3a3d41] focus:outline-none focus:ring-2 focus:ring-[#00b0f4] placeholder-gray-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#00b0f4] hover:bg-[#008ac2] transition duration-200 rounded-lg font-semibold shadow-md text-white"
          >
            Entrar
          </button>

          {mensaje && (
            <p className="text-center text-red-400 text-sm mt-2">{mensaje}</p>
          )}
        </form>

        <div className="mt-6 text-center text-sm text-gray-400">
          <Link to="/password" className="text-[#00b0f4] hover:underline">
            ¿Olvidaste tu contraseña?
          </Link>
        </div>

        <div className="mt-2 text-center text-sm text-gray-400">
          ¿No tienes cuenta?{' '}
          <Link to="/registro" className="text-[#00b0f4] hover:underline">
            Regístrate
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login

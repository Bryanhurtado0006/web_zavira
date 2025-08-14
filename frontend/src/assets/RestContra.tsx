import React, { useState } from 'react'

const ForgotPassword: React.FC = () => {
  const [correo, setCorreo] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [enviando, setEnviando] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMensaje('')
    setEnviando(true)

    try {
      const res = await fetch('http://localhost:3333/api/admin/password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ correo })
      })

      const data = await res.json()

      if (res.ok) {
        setMensaje(' Te enviamos instrucciones a tu correo')
      } else {
        setMensaje(` ${data.message || 'No se pudo enviar el correo'}`)
      }
    } catch (error) {
      setMensaje(' Error de red o servidor')
    } finally {
      setEnviando(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-md w-full max-w-md space-y-4 shadow-lg">
        <h2 className="text-2xl text-center text-blue-400 font-bold">Recuperar Contraseña</h2>

        <input
          type="email"
          placeholder="Correo electrónico"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500"
          required
        />

        <button
          type="submit"
          disabled={enviando}
          className="w-full bg-blue-500 hover:bg-blue-600 p-2 rounded font-semibold transition"
        >
          {enviando ? 'Enviando...' : 'Enviar'}
        </button>

        {mensaje && <p className="text-center text-sm mt-2">{mensaje}</p>}

        <div className="text-center text-sm text-gray-400 mt-4">
          <a href="/" className="text-blue-400 hover:underline">Volver a iniciar sesión</a>
        </div>
      </form>

      <style>{`
  .input-field {
    display: block;
    width: 100%;
    margin-top: 0.5rem;
    padding: 0.5rem;
    background-color: #2d3748;
    border: 1px solid #4a5568;
    border-radius: 0.375rem;
    color: white;
    outline: none;
    transition: 0.2s ease;
  }

  .input-field:focus {
    border-color: #4299e1;
    box-shadow: 0 0 0 1px #4299e1;
  }
`}</style>

    </div>
  )
}

export default ForgotPassword

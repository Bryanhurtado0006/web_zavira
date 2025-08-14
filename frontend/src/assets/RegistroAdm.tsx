import React, { useState } from 'react'

const RegisterInstitution: React.FC = () => {
  const [form, setForm] = useState({
    nombre: '',
    nit: '',
    codigo_dane: '',
    direccion: '',
    telefono: '',
    correo: '',
    password: '',
    confirmar: ''
  })

  const [mensaje, setMensaje] = useState('')
  const [cargando, setCargando] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMensaje('')

    if (form.password !== form.confirmar) {
      setMensaje(' Las contraseñas no coinciden.')
      return
    }

    setCargando(true)

    try {
      const res = await fetch('http://localhost:3333/instituciones/registrar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nombre: form.nombre,
          nit: form.nit,
          codigo_dane: form.codigo_dane,
          direccion: form.direccion,
          telefono: form.telefono || null,
          correo: form.correo || null,
          password: form.password
        })
      })

      const data = await res.json()

      if (res.ok) {
        setMensaje(' Registro exitoso')
        localStorage.setItem('institucion', data.msj.nombre)
        setForm({
          nombre: '',
          nit: '',
          codigo_dane: '',
          direccion: '',
          telefono: '',
          correo: '',
          password: '',
          confirmar: ''
        })
      } else {
        setMensaje(` ${data.message || 'Error al registrar'}`)
      }
    } catch (error) {
      setMensaje(' Error de conexión con el servidor.')
    } finally {
      setCargando(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-md w-full max-w-lg space-y-4 shadow-md">
        <h2 className="text-2xl text-center text-blue-400 font-bold">Registrar Institución</h2>

        <input
          type="text"
          name="nombre"
          placeholder="Nombre de la institución"
          value={form.nombre}
          onChange={handleChange}
          required
          className="input-field"
        />

        <input
          type="text"
          name="nit"
          placeholder="NIT"
          value={form.nit}
          onChange={handleChange}
          required
          className="input-field"
        />

        <input
          type="text"
          name="codigo_dane"
          placeholder="Código DANE"
          value={form.codigo_dane}
          onChange={handleChange}
          required
          className="input-field"
        />

        <input
          type="text"
          name="direccion"
          placeholder="Dirección"
          value={form.direccion}
          onChange={handleChange}
          required
          className="input-field"
        />

        <input
          type="tel"
          name="telefono"
          placeholder="Teléfono"
          value={form.telefono}
          onChange={handleChange}
          className="input-field"
        />

        <input
          type="email"
          name="correo"
          placeholder="Correo institucional"
          value={form.correo}
          onChange={handleChange}
          className="input-field"
        />

        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
          required
          className="input-field"
        />

        <input
          type="password"
          name="confirmar"
          placeholder="Confirmar contraseña"
          value={form.confirmar}
          onChange={handleChange}
          required
          className="input-field"
        />

        <button
          type="submit"
          disabled={cargando}
          className="w-full bg-blue-500 hover:bg-blue-600 p-2 rounded font-semibold transition"
        >
          {cargando ? 'Registrando...' : 'Registrar'}
        </button>

        {mensaje && <p className="text-center text-sm mt-2">{mensaje}</p>}

        <div className="text-center text-sm text-gray-400 mt-4">
          ¿Ya tienes cuenta?{' '}
          <a href="/" className="text-blue-400 hover:underline">
            Inicia sesión
          </a>
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

export default RegisterInstitution

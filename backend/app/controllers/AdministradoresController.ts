
import AdministradorService from "../service/AdministradorService"
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Hash from '@ioc:Adonis/Core/Hash'
import Administradore from "#models/administradore"

export default class AdministradorController {
  private servicio = new AdministradorService()

  async crear({ request, response }: HttpContextContract) {
    try {
      const data = request.only([
        'nombre',
        'apellido',
        'tipoDeDocumento',
        'numeroIdentidadAdministrador',
        'email',
        'password',
        'direccion',
        'institucion',
      ])
      const nuevoAdmin = await this.servicio.crear(data)
      return response.created(nuevoAdmin)
    } catch (error) {
      console.error('Error al crear administrador:', error)
      return response.internalServerError({ mensaje: 'Error al crear administrador' })
    }
  }

  async obtenerTodos({ response }: HttpContextContract) {
    try {
      const administradores = await this.servicio.obtenerTodos()
      return response.ok(administradores)
    } catch (error) {
      console.error('Error al obtener administradores:', error)
      return response.internalServerError({ mensaje: 'Error al obtener administradores' })
    }
  }

  async obtenerPorId({ params, response }: HttpContextContract) {
    try {
      const admin = await this.servicio.obtenerPorId(params.id)
      if (!admin) {
        return response.notFound({ mensaje: 'Administrador no encontrado' })
      }
      return response.ok(admin)
    } catch (error) {
      console.error('Error al obtener administrador por ID:', error)
      return response.internalServerError({ mensaje: 'Error al buscar administrador' })
    }
  }

  async obtenerConUsuarios({ params, response }: HttpContextContract) {
    try {
      const admin = await this.servicio.obtenerConUsuarios(params.id)
      if (!admin) {
        return response.notFound({ mensaje: 'Administrador no encontrado' })
      }
      return response.ok(admin)
    } catch (error) {
      console.error('Error al obtener administrador con usuarios:', error)
      return response.internalServerError({ mensaje: 'Error al buscar datos' })
    }
  }

  async actualizar({ params, request, response }: HttpContextContract) {
    try {
      const data = request.only([
        'nombre',
        'apellido',
        'tipoDeDocumento',
        'numeroIdentidadAdministrador',
        'email',
        'password',
        'direccion',
        'institucion',
      ])
      const actualizado = await this.servicio.actualizar(params.id, data)
      return response.ok(actualizado)
    } catch (error) {
      console.error('Error al actualizar administrador:', error)
      return response.internalServerError({ mensaje: 'Error al actualizar datos' })
    }
  }

  async eliminar({ params, response }: HttpContextContract) {
    try {
      const eliminado = await this.servicio.eliminar(params.id)
      return response.ok(eliminado)
    } catch (error) {
      console.error('Error al eliminar administrador:', error)
      return response.internalServerError({ mensaje: 'Error al eliminar' })
    }
  }

  async login({ request, response, auth }: HttpContextContract) {
    try {
      const { email, password } = request.only(['email', 'password'])
      const admin = await Administradore.findBy('email', email)

      if (!admin) {
        return response.unauthorized({ mensaje: 'Correo o contraseña incorrectos' })
      }

      const passwordValido = await Hash.verify(admin.password, password)

      if (!passwordValido) {
        return response.unauthorized({ mensaje: 'Correo o contraseña incorrectos' })
      }

      const token = await auth.use('api').generate(admin)

      return {
        mensaje: 'Inicio de sesión exitoso',
        token,
        admin: {
          id: admin.idAdministrador,
          nombre: admin.nombre,
          email: admin.email,
        }
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error)
      return response.internalServerError({ mensaje: 'Error al iniciar sesión' })
    }
  }
}

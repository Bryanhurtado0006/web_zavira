import UsuarioService from "../service/UsuariosService.ts"
import ExcelJS from 'exceljs'
import fs from 'fs'
import Application from '@adonisjs/core/services/app'

export default class UsuarioController {
  private servicio = new UsuarioService()

  async crear({ request }) {
    const data = request.only([
      'numeroIdentidadUsuario',
      'nombre',
      'apellido',
      'tipoDeDocumento',
      'email',
      'password',
      'institucion',
      'numeroIdentidadAdministrador',
      'idAdministrador',
    ])
    return await this.servicio.crear(data)
  }

  async obtenerTodos() {
    return await this.servicio.obtenerTodos()
  }

  async obtenerPorId({ params }) {
    return await this.servicio.obtenerPorId(params.id)
  }

  async actualizar({ params, request }) {
    const data = request.only([
      'numeroIdentidadUsuario',
      'nombre',
      'apellido',
      'tipoDeDocumento',
      'email',
      'password',
      'institucion',
      'numeroIdentidadAdministrador',
      'idAdministrador',
    ])
    return await this.servicio.actualizar(params.id, data)
  }

  async eliminar({ params }) {
    return await this.servicio.eliminar(params.id)
  }

  async obtenerConAdministrador({ params }) {
    return await this.servicio.obtenerConAdministrador(params.id)
  }

// Carga masiva de usuarios desde un archivo Excel
  async cargaMasiva({ request, response }) {
    const archivo = request.file('archivo', {
      extnames: ['xlsx', 'csv'],
    })

    if (!archivo) {
      return response.badRequest({ mensaje: 'No se adjuntó ningún archivo.' })
    }

    const ruta = Application.tmpPath(archivo.clientName)
    await archivo.move(Application.tmpPath())

    try {
      const usuariosCreados = await this.servicio.cargaMasivaDesdeArchivo(ruta)
      return {
        mensaje: 'Carga masiva realizada correctamente.',
        total: usuariosCreados.length,
        usuarios: usuariosCreados,
      }
    } catch (error) {
      console.error(error)
      return response.internalServerError({ mensaje: 'Error al procesar el archivo.' })
    } finally {
      fs.unlinkSync(ruta) // eliminar el archivo temporal
    }
  }



}
import GradoService from "../service/GradoService.js"

export default class GradoController {
  private servicio = new GradoService()

  async crear({ request }) {
    const data = request.only([
      'idAdministrador',
      'identificacionUsuario',
    ])
    return await this.servicio.crear(data)
  }

  async obtenerTodos() {
    return await this.servicio.obtenerTodos()
  }

  async obtenerPorId({ params }) {
    return await this.servicio.obtenerPorId(params.id)
  }

  async obtenerConRelaciones({ params }) {
    return await this.servicio.obtenerConRelaciones(params.id)
  }

  async actualizar({ params, request }) {
    const data = request.only([
      'idAdministrador',
      'identificacionUsuario',
    ])
    return await this.servicio.actualizar(params.id, data)
  }

  async eliminar({ params }) {
    return await this.servicio.eliminar(params.id)
  }
}
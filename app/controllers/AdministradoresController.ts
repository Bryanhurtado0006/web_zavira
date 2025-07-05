import AdministradorService from "../service/AdministradorService.js"

export default class AdministradorController {
  private servicio = new AdministradorService()

  async crear({ request }) {
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
    return await this.servicio.crear(data)
  }

  async obtenerTodos() {
    return await this.servicio.obtenerTodos()
  }

  async obtenerPorId({ params }) {
    return await this.servicio.obtenerPorId(params.id)
  }

  async obtenerConUsuarios({ params }) {
    return await this.servicio.obtenerConUsuarios(params.id)
  }

  async actualizar({ params, request }) {
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
    return await this.servicio.actualizar(params.id, data)
  }

  async eliminar({ params }) {
    return await this.servicio.eliminar(params.id)
  }
}
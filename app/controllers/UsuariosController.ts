import UsuarioService from "../service/UsuariosService.js"

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
}
import Usuario from "#models/usuario"

export default class UsuarioService {
  // Crear usuario
  async crear(data: Partial<Usuario>) {
    return await Usuario.create(data)
  }

  // Obtener todos los usuarios
  async obtenerTodos() {
    return await Usuario.all()
  }

  // Obtener usuario por ID
  async obtenerPorId(id: number) {
    return await Usuario.find(id)
  }

  // Actualizar usuario
  async actualizar(id: number, data: Partial<Usuario>) {
    const usuario = await Usuario.findOrFail(id)
    usuario.merge(data)
    await usuario.save()
    return usuario
  }

  // Eliminar usuario
  async eliminar(id: number) {
    const usuario = await Usuario.findOrFail(id)
    await usuario.delete()
    return { mensaje: 'Usuario eliminado correctamente' }
  }

  // Obtener usuario con su administrador (opcional)
  async obtenerConAdministrador(id: number) {
    return await Usuario.query().where('identificacionUsuario', id).preload('administrador').first()
  }
}
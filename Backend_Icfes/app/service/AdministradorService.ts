import Administradore from "#models/administradore"

export default class AdministradorService {
  // Crear administrador
  async crear(data: Partial<Administradore>) {
    return await Administradore.create(data)
  }

  // Obtener todos los administradores
  async obtenerTodos() {
    return await Administradore.all()
  }

  // Obtener por ID
  async obtenerPorId(id: number) {
    return await Administradore.find(id)
  }

  // Obtener administrador con sus usuarios
  async obtenerConUsuarios(id: number) {
    return await Administradore.query()
      .where('idAdministrador', id)
      .preload('usuarios')
      .first()
  }

  // Actualizar administrador
  async actualizar(id: number, data: Partial<Administradore>) {
    const admin = await Administradore.findOrFail(id)
    admin.merge(data)
    await admin.save()
    return admin
  }

  // Eliminar administrador
  async eliminar(id: number) {
    const admin = await Administradore.findOrFail(id)
    await admin.delete()
    return { mensaje: 'Administrador eliminado correctamente' }
  }
}
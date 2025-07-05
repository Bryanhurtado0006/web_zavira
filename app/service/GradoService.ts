import Grado from "#models/grado"

export default class GradoService {
  async crear(data: Partial<Grado>) {
    return await Grado.create(data)
  }

  async obtenerTodos() {
    return await Grado.all()
  }

  async obtenerPorId(id: number) {
    return await Grado.find(id)
  }

  async obtenerConRelaciones(id: number) {
    return await Grado.query()
      .where('IdGrado', id)
      .preload('administrador')
      .preload('usuario')
      .first()
  }

  async actualizar(id: number, data: Partial<Grado>) {
    const grado = await Grado.findOrFail(id)
    grado.merge(data)
    await grado.save()
    return grado
  }

  async eliminar(id: number) {
    const grado = await Grado.findOrFail(id)
    await grado.delete()
    return { mensaje: 'Grado eliminado correctamente' }
  }
}

//import Resultado from "#models/resultado";

export default class ResultadoService {
  async crear(data: Partial<Resultado>) {
    return await Resultado.create(data)
  }

  async obtenerTodos() {
    return await Resultado.all()
  }

  async obtenerPorId(id: number) {
    return await Resultado.find(id)
  }

  async actualizar(id: number, data: Partial<Resultado>) {
    const resultado = await Resultado.findOrFail(id)
    resultado.merge(data)
    await resultado.save()
    return resultado
  }

  async eliminar(id: number) {
    const resultado = await Resultado.findOrFail(id)
    await resultado.delete()
    return { mensaje: 'Resultado eliminado correctamente' }
  }

  async obtenerConUsuario(id: number) {
    return await Resultado.query()
      .where('idResultado', id)
      .preload('usuario')
      .first()
  }

  // Filtro por tipoSimulacro
  async filtrarPorTipo(tipo: string) {
    return await Resultado.query().where('tipoSimulacro', tipo)
  }

  //  Filtro por identificacionUsuario
  async filtrarPorUsuario(identificacion: number) {
    return await Resultado.query().where('identificacionUsuario', identificacion)
  }
}
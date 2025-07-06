import ResultadoService from "../service/ResultadoService.ts";


export default class ResultadoController {
  private servicio = new ResultadoService()

  async crear({ request, response }) {
    try {
      const data = request.only([
        'identificacionUsuario',
        'tipoSimulacro',
        'puntaje',
        'fechaAplicacion',
        'nivelDesempeno',
      ])
      const resultado = await this.servicio.crear(data)
      return response.created(resultado)
    } catch (error) {
      return response.internalServerError({ mensaje: 'Error al crear resultado', error })
    }
  }

  async obtenerTodos({ response }) {
    try {
      const resultados = await this.servicio.obtenerTodos()
      return resultados
    } catch (error) {
      return response.internalServerError({ mensaje: 'Error al obtener resultados', error })
    }
  }

  async obtenerPorId({ params, response }) {
    try {
      const resultado = await this.servicio.obtenerPorId(params.id)
      return resultado
    } catch (error) {
      return response.internalServerError({ mensaje: 'Error al obtener resultado', error })
    }
  }

  async actualizar({ params, request, response }) {
    try {
      const data = request.only([
        'identificacionUsuario',
        'tipoSimulacro',
        'puntaje',
        'fechaAplicacion',
        'nivelDesempeno',
      ])
      const resultado = await this.servicio.actualizar(params.id, data)
      return resultado
    } catch (error) {
      return response.internalServerError({ mensaje: 'Error al actualizar resultado', error })
    }
  }

  async eliminar({ params, response }) {
    try {
      const mensaje = await this.servicio.eliminar(params.id)
      return mensaje
    } catch (error) {
      return response.internalServerError({ mensaje: 'Error al eliminar resultado', error })
    }
  }

  async obtenerConUsuario({ params, response }) {
    try {
      const resultado = await this.servicio.obtenerConUsuario(params.id)
      return resultado
    } catch (error) {
      return response.internalServerError({ mensaje: 'Error al obtener resultado con usuario', error })
    }
  }


async filtrarPorTipo({ params, response }) {
  try {
    const resultados = await this.servicio.filtrarPorTipo(params.tipo)
    return resultados
  } catch (error) {
    return response.internalServerError({ mensaje: 'Error al filtrar por tipoSimulacro', error })
  }
}

async filtrarPorUsuario({ params, response }) {
  try {
    const resultados = await this.servicio.filtrarPorUsuario(params.identificacion)
    return resultados
  } catch (error) {
    return response.internalServerError({ mensaje: 'Error al filtrar por usuario', error })
  }
}


}
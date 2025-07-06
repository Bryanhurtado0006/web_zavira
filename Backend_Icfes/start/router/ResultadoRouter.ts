import Route from '@adonisjs/core/services/router'
import ResultadoController from '#controllers/ResultadoController'


const resultado = new ResultadoController()

Route.get('/resultados', resultado.obtenerTodos)
Route.get('/resultados/:id', resultado.obtenerPorId)
Route.get('/resultados/:id/usuario', resultado.obtenerConUsuario)
Route.get('/resultados/tipo/:tipo', resultado.filtrarPorTipo)
Route.get('/resultados/usuario/:identificacion', resultado.filtrarPorUsuario)

Route.post('/resultados', resultado.crear)

Route.put('/resultados/:id', resultado.actualizar)

Route.delete('/resultados/:id', resultado.eliminar)
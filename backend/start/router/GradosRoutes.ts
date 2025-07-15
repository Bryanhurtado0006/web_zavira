import Route from '@adonisjs/core/services/router'
import GradoController from '#controllers/GradosController'

const grado = new GradoController()

Route.get('/grados', grado.obtenerTodos)
Route.get('/grados/:id', grado.obtenerPorId)
Route.get('/grados/:id/detalles', grado.obtenerConRelaciones)
Route.post('/grados', grado.crear)
Route.put('/grados/:id', grado.actualizar)
Route.delete('/grados/:id', grado.eliminar)

import Route from '@adonisjs/core/services/router'
import AdministradorController from '#controllers/AdministradoresController'

const admin = new AdministradorController()

Route.get('/administradores', admin.obtenerTodos)
Route.get('/administradores/:id', admin.obtenerPorId)
Route.get('/administradores/:id/usuarios', admin.obtenerConUsuarios)
Route.post('/administradores', admin.crear)
Route.put('/administradores/:id', admin.actualizar)
Route.delete('/administradores/:id', admin.eliminar)
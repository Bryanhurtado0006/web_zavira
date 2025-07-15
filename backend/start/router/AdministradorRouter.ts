
import Route from '@adonisjs/core/services/router'

// Rutas publicas
Route.post('/administradores', 'AdministradoresController.crear')
Route.post('/login', 'AdministradoresController.login')

// Rutas protegidas
Route.get('/administradores', 'AdministradoresController.obtenerTodos').middleware(['auth'])
Route.get('/administradores/:id', 'AdministradoresController.obtenerPorId').middleware(['auth'])
Route.get('/administradores/:id/usuarios', 'AdministradoresController.obtenerConUsuarios').middleware(['auth'])
Route.put('/administradores/:id', 'AdministradoresController.actualizar').middleware(['auth'])
Route.delete('/administradores/:id', 'AdministradoresController.eliminar').middleware(['auth'])


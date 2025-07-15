import Route  from "@adonisjs/core/services/router";
import UsuarioConroller from "#controllers/UsuariosController";

const usuario = new UsuarioConroller()

Route.get('/usuarios', usuario.obtenerTodos)
Route.get('/usuarios/:id', usuario.obtenerPorId)
Route.post('/usuarios', usuario.crear)

// Carga masiva de usuarios desde un archivo Excel
Route.post('/usuarios/carga-masiva', usuario.cargaMasiva)

Route.put('/usuarios/:id', usuario.actualizar)
Route.delete('/usuarios/:id', usuario.eliminar)
import Usuario from "#models/usuario"
import ExcelJS from "exceljs";

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

  // Carga masiva de usuarios desde un archivo Excel

  async cargaMasivaDesdeArchivo(rutaArchivo: string) {
    const workbook = new ExcelJS.Workbook()
    await workbook.xlsx.readFile(rutaArchivo)
    const hoja = workbook.worksheets[0]

    const usuariosCreados: Usuario[] = []

    for (let i = 2; i <= hoja.rowCount; i++) {
      const fila = hoja.getRow(i)

      const usuarioData = {
        numeroIdentidadUsuario: fila.getCell(1).value,
        nombre: String(fila.getCell(2).value || ''),
        apellido: String(fila.getCell(3).value || ''),
        tipoDeDocumento: String(fila.getCell(4).value || ''),
        email: String(fila.getCell(5).value || ''),
        password: String(fila.getCell(6).value || ''),
        institucion: String(fila.getCell(7).value || ''),
        numeroIdentidadAdministrador: fila.getCell(8).value,
        idAdministrador: fila.getCell(9).value,
      }

      // Validar campos mínimos
      if (!usuarioData.numeroIdentidadUsuario || !usuarioData.email) continue

      const usuario = await Usuario.create(usuarioData)
      usuariosCreados.push(usuario)
    }

    return usuariosCreados
  }



}
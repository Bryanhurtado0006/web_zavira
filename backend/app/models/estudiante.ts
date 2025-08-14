import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Grado from './grado.ts'
import Usuario from './usuario.ts'

export default class Estudiante extends BaseModel {
  @column({ isPrimary: true, columnName: 'id_estudiante' })
  declare id_estudiante: number

  @column({ columnName: 'nombre' })
  declare nombre: string

  @column({ columnName: 'apellido' })
  declare apellido: string

  @column({ columnName: 'correo' })
  declare correo: string

  @column({ columnName: 'contrasena' })
  declare contrasena: string

  @column({ columnName: 'documento' })
  declare documento: string

  @column({ columnName: 'telefono' })
  declare telefono: string | null

  @column({ columnName: 'jornada' })
  declare jornada: string | null

<<<<<<< HEAD
 
   @column({columnName:'id_usuario'})
  declare id_usuario: number

  @column({ columnName:'id_grado' })
=======

  @column({ columnName: 'id_grado' })
>>>>>>> 999201e4bf6c30d911c286ddc39e3cc706895be9
  declare id_grado: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
  
@belongsTo(() => Grado, {
  foreignKey: 'id_grado',
})
declare grado: BelongsTo<typeof Grado>

@belongsTo(() => Usuario, {
  foreignKey: 'id_usuario',
})
declare usuario: BelongsTo<typeof Usuario>


}
// app/Models/UsuariosRol.ts
import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@adonisjs/lucid/orm'
import Usuario from './usuario'
import Rol from './rol'

export default class UsuariosRol extends BaseModel {
  @column({ isPrimary: true })
  declare id_usuarios_rol: number // corregido

  @column()
  declare id_usuario: number

  @column()
  declare id_rol: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Usuario, {
    foreignKey: 'id_usuario',
  })
  declare usuario: BelongsTo<typeof Usuario>

  @belongsTo(() => Rol, {
    foreignKey: 'id_rol',
  })
  declare rol: BelongsTo<typeof Rol>
}

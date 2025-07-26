import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

import Usuario from './usuario.js'
import Rol from './rol.js'

export default class UsuarioRol extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare id_usuario: number

  @column()
  declare id_rol: number

  @belongsTo(() => Usuario, {
    foreignKey: 'id_usuario',
  })
  declare usuario: BelongsTo<typeof Usuario>

  @belongsTo(() => Rol, {
    foreignKey: 'id_rol',
  })
  declare rol: BelongsTo<typeof Rol>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}

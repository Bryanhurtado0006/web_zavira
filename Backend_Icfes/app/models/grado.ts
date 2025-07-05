import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Administrador from './administradore.js'
import Usuario from './usuario.js'

export default class Grado extends BaseModel {
  public static table = 'IdGrados'

  @column({ isPrimary: true, columnName: 'IdGrado' })
  declare IdGrado: number

  @column({ columnName: 'idAdministrador' })
  declare idAdministrador: number

  @column({ columnName: 'numeroIdentidadAdministrador' })
  declare numeroIdentidadAdministrador: number

  @belongsTo(() => Administrador, {
    foreignKey: 'idAdministrador',
  })
  declare administrador: BelongsTo<typeof Administrador>

  @belongsTo(() => Usuario, {
    foreignKey: 'numeroIdentidadAdministrador',
  })
  declare usuario: BelongsTo<typeof Usuario>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}

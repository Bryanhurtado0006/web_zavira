import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'

import Institucion from './institucion.ts'
import Usuario from './usuario.ts'

export default class Grado extends BaseModel {
  public static table = 'grados'

  @column({ isPrimary: true,columnName: 'idGrado' })
  declare idGrado: number

  @column({ columnName: 'nombreGrado' })
  declare nombreGrado: string

  @column({ columnName: 'idInstitucion' })
  declare idInstitucion: number

  @belongsTo(() => Institucion, {
    foreignKey: 'idInstitucion',
  })
  declare institucion: BelongsTo<typeof Institucion>

  @hasMany(() => Usuario, {
    foreignKey: 'idGrado',
  })
  declare usuarios: HasMany<typeof Usuario>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}

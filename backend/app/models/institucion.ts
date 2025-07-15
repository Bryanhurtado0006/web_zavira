import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Administradore from './administradore.ts'
import Grado from './grado.ts'

export default class Institucion extends BaseModel {
  public static table = 'instituciones'

  @column({ isPrimary: true, columnName: 'idInstitucion' })
  declare idInstitucion: number

  @column({ columnName: 'nombreInstitucion' })
  declare nombreInstitucion: string

  @column({ columnName: 'codigoDANE' })
  declare codigoDANE: string

  @column({ columnName: 'departamento' })
  declare departamento: string

  @column({ columnName: 'municipio' })
  declare municipio: string

  @column({ columnName: 'direccion' })
  declare direccion: string

  @column({ columnName: 'telefono' })
  declare telefono: string

  @column({ columnName: 'idAdministrador' })
  declare idAdministrador: number

  @belongsTo(() => Administradore, {
    foreignKey: 'idAdministrador',
  })
  declare administrador: BelongsTo<typeof Administradore>

  @hasMany(() => Grado, {
    foreignKey: 'idInstitucion',
  })
  declare grados: HasMany<typeof Grado>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}

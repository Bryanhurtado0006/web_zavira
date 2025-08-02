import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, type BelongsTo } from '@adonisjs/lucid/orm'
import Institucion from './institucion.ts'

export default class Grado extends BaseModel {
  public static table = 'grados'
  
  @column({ isPrimary: true , columnName:'id_grados' })
  declare id_grados: number

  @column({columnName:'nombre'})
  declare nombre: string

  @column({columnName:'idInstitucion'})
  declare nombidInstitucionre: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
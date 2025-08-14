import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Grado extends BaseModel {
  @column({ isPrimary: true , columnName: 'id_grado' })
  declare id_grado: number

  @column({ columnName: 'nombre' })
  declare nombre: string

  @column({ columnName: 'descripcion' })
  declare descripcion: string | null
  

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
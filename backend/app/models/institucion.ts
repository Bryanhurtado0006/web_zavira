import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Institucion extends BaseModel {
  @column({ isPrimary: true, columnName: 'id_institucion' })
  declare id_institucion: number

  @column()
  declare nombre: string

  @column()
  declare nit: string

  @column({ columnName: 'codigo_dane' })
  declare codigo_dane?: string | null // No obligatorio

  @column()
  declare direccion: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}

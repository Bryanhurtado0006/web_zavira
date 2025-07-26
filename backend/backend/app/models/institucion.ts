import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Institucion extends BaseModel {
  @column({ isPrimary: true, columnName: 'id_institucion' })
  declare id_institucion: number


  @column({ columnName: 'nombre' })
  declare nombre: string  

  @column({ columnName: 'nit' })
  declare nit: string 

  @column({ columnName: 'codigo_dane' })
  declare codigo_dane: string

  @column({ columnName: 'direccion' })
  declare direccion: string

  @column({ columnName: 'telefono' })
  declare telefono?: string | null

  @column({ columnName: 'correo' })
  declare correo?: string | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
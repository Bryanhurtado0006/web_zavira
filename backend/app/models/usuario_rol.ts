import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class UsuarioRol extends BaseModel {
  @column({ isPrimary: true,columnName: 'id' })
  declare id: number

  @column({ columnName: 'id_usuario' })
  declare id_usuario: number

  @column({ columnName: 'id_rol' })
  declare id_rol: number 

  @column({ columnName: 'activo' })
  declare activo: boolean // campo booleano para indicar si el rol está activo o no

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
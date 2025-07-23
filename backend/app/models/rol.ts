import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany, ManyToMany } from '@adonisjs/lucid/orm'
import Usuario from './usuario.ts'


export default class Rol extends BaseModel {
  @column({ isPrimary: true,columnName: 'id' })
  declare id: number

  @column({ columnName: 'nombre' })
  declare nombre: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @manyToMany(() => Usuario, {
    pivotTable: 'usuarios_roles',
    localKey: 'id',
    pivotForeignKey: 'id_rol',
    relatedKey: 'id_usuario',
    pivotRelatedForeignKey: 'id_usuario'
  })
  declare usuarios: ManyToMany<typeof Usuario>
}
// app/Models/Rol.ts
import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany, manyToMany, ManyToMany } from '@adonisjs/lucid/orm'
import Usuario from './usuario'
import UsuariosRol from './usuarios_rol'

export default class Rol extends BaseModel {
  @column({ isPrimary: true })
  declare id_rol: number // corregido

  @column()
  declare rol: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => UsuariosRol, {
    foreignKey: 'id_rol',
  })
  declare usuariosRols: HasMany<typeof UsuariosRol>

  @manyToMany(() => Usuario, {
    pivotTable: 'usuarios_rols',
    pivotForeignKey: 'id_rol',
    pivotRelatedForeignKey: 'id_usuario',
  })
  declare usuarios: ManyToMany<typeof Usuario>
}

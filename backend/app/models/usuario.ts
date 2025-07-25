import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany, belongsTo } from '@adonisjs/lucid/orm'
import type { ManyToMany, BelongsTo } from '@adonisjs/lucid/types/relations'

import Rol from './rol.js'
import Institucion from './institucion.js'

export default class Usuario extends BaseModel {
  @column({ isPrimary: true, columnName: 'id_usuario' })
  declare id_usuario: number

  @column()
  declare nombre: string

  @column()
  declare apellido: string

  @column()
  declare correo: string

  @column()
  declare contrasena: string

  @column({ columnName: 'id_institucion' })
  declare id_institucion: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @manyToMany(() => Rol, {
    pivotTable: 'usuario_rols',
    localKey: 'id_usuario',
    pivotForeignKey: 'id_usuario',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'id_rol',
    pivotColumns: ['activo'],
  })
  declare roles: ManyToMany<typeof Rol>

  @belongsTo(() => Institucion, {
    foreignKey: 'id_institucion',
  })
  declare institucion: BelongsTo<typeof Institucion>
}

import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Administradore from './administradore.ts'

export default class Usuario extends BaseModel {
  @column({ isPrimary: true, columnName: 'identificacionUsuario' }) 
  declare identificacionUsuario: number

  @column({ columnName: 'numeroIdentidadUsuario' })
  declare numeroIdentidadUsuario: number

  @column({ columnName: 'nombre' })
  declare nombre: string

  @column({ columnName: 'apellido' })
  declare apellido: string

  @column({ columnName: 'tipoDeDocumento' })
  declare tipoDeDocumento: string

  @column({ columnName: 'email' })
  declare email: string

  @column({ columnName: 'password' })
  declare password: string

  @column({ columnName: 'institucion' })
  declare institucion: string

  @column({ columnName: 'numeroIdentidadAdministrador' })
  declare numeroIdentidadAdministrador: number

  @column({ columnName: 'idAdministrador' })
  declare idAdministrador: number

  @belongsTo(() => Administradore, {
    foreignKey: 'idAdministrador',
  })
  declare administrador: BelongsTo<typeof Administradore>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}


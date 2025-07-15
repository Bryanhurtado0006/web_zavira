import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import Institucion from './institucion.ts'

export default class Administradore extends BaseModel {
  public static table = 'administradores'

  @column({ isPrimary: true, columnName: 'idAdministrador' })
  declare idAdministrador: number

  @column({ columnName: 'nombre' })
  declare nombre: string

  @column({ columnName: 'apellido' })
  declare apellido: string

  @column({ columnName: 'tipoDeDocumento' })
  declare tipoDeDocumento: string

  @column({ columnName: 'numeroIdentidadAdministrador' })
  declare numeroIdentidadAdministrador: string

  @column({ columnName: 'email' })
  declare email: string

  @column({ columnName: 'password' })
  declare password: string

  @column({ columnName: 'direccion' })
  declare direccion: string

  // Relación: un administrador tiene una institución
  @hasOne(() => Institucion, {
    foreignKey: 'idAdministrador', // en la tabla `instituciones`
  })
  declare institucion: HasOne<typeof Institucion>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}

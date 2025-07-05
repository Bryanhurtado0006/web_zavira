import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Usuario from './usuario.ts'

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

  @column({ columnName: 'institucion' })
  declare institucion: string

  @hasMany(() => Usuario, {
    foreignKey : 'idAdministrador'
  })
  declare usuarios: HasMany<typeof Usuario>

  @column.dateTime({ autoCreate: true, columnName: 'created_at' })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, columnName: 'updated_at' })
  declare updatedAt: DateTime
}

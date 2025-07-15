import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

import Administradore from './administradore.ts'
import Grado from './grado.ts'

export default class Usuario extends BaseModel {
  public static table = 'usuarios'

  @column({ isPrimary: true, columnName: 'identificacionUsuario' })
  declare identificacionUsuario: number

  @column({columnName: 'numeroIdentidadUsuario'})
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

  @column({ columnName: 'idAdministrador' })
  declare idAdministrador: number

  @column({ columnName: 'idGrado' })
  declare idGrado: number

  @belongsTo(() => Administradore, {
    foreignKey: 'idAdministrador',
  })
  declare administrador: BelongsTo<typeof Administradore>

  @belongsTo(() => Grado, {
    foreignKey: 'idGrado',
  })
  declare grado: BelongsTo<typeof Grado>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}

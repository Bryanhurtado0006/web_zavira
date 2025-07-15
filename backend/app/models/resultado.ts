import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Usuario from './usuario'

export default class Resultado extends BaseModel {
  public static table = 'resultados'

  @column({ isPrimary: true, columnName: 'idResultado' })
  declare idResultado: number

  @column({ columnName: 'identificacionUsuario' })
  declare identificacionUsuario: number

  @column({ columnName: 'tipoSimulacro' })
  declare tipoSimulacro: string

  @column({ columnName: 'puntaje' })
  declare puntaje: number

  @column.date({ columnName: 'fechaAplicacion' })
  declare fechaAplicacion: DateTime

  @column({ columnName: 'nivelDesempeno' })
  declare nivelDesempeno: string

  @belongsTo(() => Usuario, {
    foreignKey: 'identificacionUsuario',
  })
  declare usuario: BelongsTo<typeof Usuario>

  @column.dateTime({ autoCreate: true, columnName: 'created_at' })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, columnName: 'updated_at' })
  declare updatedAt: DateTime
}

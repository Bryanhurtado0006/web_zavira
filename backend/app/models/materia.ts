import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import Grado from './grado.ts'

export default class Materia extends BaseModel {
  @column({ isPrimary: true , columnName: 'id_materia' })
  declare id_materia: number

  @column()
  declare nombre: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @manyToMany(() => Grado, {
    pivotTable: 'grado_materia',
    localKey: 'id',
    pivotForeignKey: 'id_materia',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'id_grado',
  })
  declare grados: ManyToMany<typeof Grado>
}
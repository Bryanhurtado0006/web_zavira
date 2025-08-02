import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

import Usuario from './usuario.ts'
import Grado from './grado.ts'


export default class Estudiante extends BaseModel {
  @column({ isPrimary: true, columnName: 'id_estudiante' })
  declare id_estudiante: number

  @column({columnName:'numero_identificacion'})
  declare numero_identificacion: string

  @column({columnName:'genero'})
  declare genero: string

  @column({columnName:'jornada'})
  declare jornada: string

  @column({columnName:'fecha_nacimiento'})
  declare fecha_nacimiento: Date



 
   @column({columnName:'id_usuario'})
  declare id_usuario: number

  @column({ columnName:'id_grado' })
  declare id_grado: number



  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Usuario, {
    foreignKey: 'id_usuario',
  })
  declare usuario: BelongsTo<typeof Usuario>

  @belongsTo(()=> Grado,{
    foreignKey: 'id_grado',
  })
  declare grado: BelongsTo<typeof Grado>

}
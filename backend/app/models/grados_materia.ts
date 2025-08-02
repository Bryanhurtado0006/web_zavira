import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import Grado from './grado.ts'
import Materia from './materia.ts'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class GradosMateria extends BaseModel {
   @column({ isPrimary: true })
  declare id: number

  @column()
  declare id_grado: number

  @column()
  declare id_materia: number

  @belongsTo(() => Grado, {
    foreignKey: 'id_grado',
  })
  declare grado: BelongsTo<typeof Grado>

  @belongsTo(() => Materia, {
    foreignKey: 'id_materia',
  })
  declare materia: BelongsTo<typeof Materia>
}
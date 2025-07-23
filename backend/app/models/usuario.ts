import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, manyToMany } from '@adonisjs/lucid/orm'
import Rol from './rol.ts'
import Institucion from './institucion.ts'
import { ManyToMany } from '@adonisjs/lucid/types/relations'

export default class Usuario extends BaseModel {
  @column({ isPrimary: true, columnName: 'id_usuario' })
  declare id_usuario: number

  @column({columnName: 'nombre' })
  declare nombre: string

  @column({ columnName: 'apellido' })
  declare apellido: string

  @column({ columnName: 'correo' })
  declare correo: string

  @column({ columnName: 'contrasena' })
  declare contrasena: string

 /* @column({ columnName: 'id_institucion' })
declare id_institucion: number
*/






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
    pivotColumns:['activo']
    
  
  })
  declare roles:ManyToMany<typeof Rol>


 /* @belongsTo(() => Institucion, {
    foreignKey: 'id_institucion',
  })
  declare institucion: BelongsTo<typeof Institucion>*/
}
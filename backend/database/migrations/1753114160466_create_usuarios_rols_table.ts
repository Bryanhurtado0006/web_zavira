import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'usuarios_rols'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_usuarios_rol') 

      table
        .integer('id_usuario')
        .unsigned()
        .references('id')
        .inTable('usuarios')
        .onDelete('CASCADE')

      table
        .integer('id_rol')
        .unsigned()
        .references('id_rol') 
        .inTable('rols')
        .onDelete('CASCADE')

      table.unique(['id_usuario', 'id_rol'])

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

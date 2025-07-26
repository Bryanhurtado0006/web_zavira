import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'usuario_rols'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table
  .integer('id_usuario')
  .unsigned()
  .references('id_usuario')
  .inTable('usuarios')
  .onDelete('CASCADE')

table
  .integer('id_rol')
  .unsigned()
  .references('id')
  .inTable('rols')
  .onDelete('CASCADE')
  table.boolean('activo').defaultTo(true) //campo boleano para indicar si el rol está activo o no

table.unique(['id_usuario', 'id_rol'])

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
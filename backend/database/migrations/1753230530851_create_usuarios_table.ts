import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'usuarios'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_usuario')

      
      table.string('nombre', 100).notNullable()
      table.string('apellido', 100).notNullable()
      table.string('correo', 150).notNullable().unique()
      table.string('contrasena', 180).notNullable()

      table.integer('id_institucion').unsigned().nullable()


     /* table
  .integer('id_institucion')
  .unsigned()
  .references('id')
  .inTable('institucion')
  .onDelete('CASCADE')*/


      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
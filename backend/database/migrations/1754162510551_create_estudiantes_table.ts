import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'estudiantes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_estudiante').primary()
      table.string('nombre', 100).notNullable()
      table.string('apellido', 100).notNullable()
      table.string('correo', 150).notNullable().unique()
      table.string('contrasena', 180).notNullable()
      table.string('documento', 20).notNullable().unique()
      table.string('telefono', 20).nullable()
      table.string('jornada', 20).nullable()

      

      table
  .integer('id_grado')
  .unsigned()
  .references('id_grado')
  .inTable('grados')
  .onDelete('CASCADE')

  table
        .integer('id_usuario')
        .unsigned()
        .references('id_usuario')
        .inTable('usuarios')
        .onDelete('CASCADE')
        .notNullable()

        





      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
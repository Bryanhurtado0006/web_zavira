import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'estudiantes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_estudiante')

      table
        .integer('id_usuario')
        .unsigned()
        .references('id_usuario')
        .inTable('usuarios')
        .onDelete('CASCADE')

        table
        .integer('id_grado')
        .unsigned()
        .references('id_grados')
        .inTable('grados')
        .onDelete('CASCADE')

      table.string('numero_identificacion', 50).notNullable()
      table.string('genero', 20)
      table.string('jornada', 25).notNullable()
      table.date('fecha_nacimiento').nullable()




      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
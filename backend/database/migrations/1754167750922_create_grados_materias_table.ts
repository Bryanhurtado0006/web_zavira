import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'grados_materias'

 async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('id_grado')
        .unsigned()
        .references('id_grado')
        .inTable('grados')
        .onDelete('CASCADE')

      table
        .integer('id_materia')
        .unsigned()
        .references('id_materia')
        .inTable('materias')
        .onDelete('CASCADE')

      table.unique(['id_grado', 'id_materia'])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
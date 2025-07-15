import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'grados'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('idGrado')

      table.string('nombreGrado').notNullable()

      // Relación con la institución
      table
        .integer('idInstitucion')
        .unsigned()
        .references('idInstitucion')
        .inTable('instituciones')
        .onDelete('CASCADE')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

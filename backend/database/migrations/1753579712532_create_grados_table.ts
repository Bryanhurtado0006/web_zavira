import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'grados'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_grados')

      table.string('nombre').notNullable()

      table.integer('id_institucion')
      .unsigned()
      .references('id_institucion')
      .inTable('instituciones')
      .onDelete('CASCADE')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
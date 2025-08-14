import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'grados'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_grado')

      table.string('nombre', 100).notNullable()
      table.string('descripcion', 200).nullable()
      




      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
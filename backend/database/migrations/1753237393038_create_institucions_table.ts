import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'institucions'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_institucion')
      table.string('nombre', 100).notNullable()
      table.string('direccion', 150).notNullable()
      table.string('codigo_dane', 50).nullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

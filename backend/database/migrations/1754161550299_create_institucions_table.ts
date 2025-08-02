import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'institucions'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_institucion').primary()

      table.string('nombre', 150).notNullable()
      table.string('nit', 20).notNullable().unique()
      table.string('codigo_dane', 20).notNullable().unique()
      table.string('direccion', 200).notNullable()
      table.string('telefono', 20).nullable()
      table.string('correo', 100).nullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
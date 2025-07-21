import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'rols'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_rol') 

      table.string('rol').notNullable().unique() 

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

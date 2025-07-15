import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'administradores'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('idAdministrador')

      table.string('nombre').notNullable()
      table.string('apellido').notNullable()
      table.string('tipoDeDocumento').notNullable()
      table.string('numeroIdentidadAdministrador').notNullable().unique()
      table.string('email').notNullable().unique()
      table.string('password').notNullable()
      table.string('direccion').notNullable()

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

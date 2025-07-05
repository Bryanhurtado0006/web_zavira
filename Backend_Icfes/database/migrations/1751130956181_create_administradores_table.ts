import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'administradores'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('idAdministrador')

      table.string('Nombre').notNullable()
      table.string('Apellido').notNullable()
      table.string('TipoDeDocumento').notNullable()
      table.string('NumeroIdentidadAdministrador').notNullable().unique()
      table.string('Email').notNullable().unique()
      table.string('Password').notNullable()
      table.string('Direccion').notNullable()
      table.string('Institucion').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'usuarios'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('identificacionUsuario')

      table.integer('numeroIdentidadUsuario').notNullable().unique()
      table.string('nombre').notNullable()
      table.string('apellido').notNullable()
      table.string('tipoDeDocumento').notNullable()
      table.string('email').notNullable().unique()
      table.string('password').notNullable()

      // Relación con administrador
      table
        .integer('idAdministrador')
        .unsigned()
        .references('idAdministrador')
        .inTable('administradores')
        .onDelete('CASCADE')

      // Relación con grado
      table
        .integer('idGrado')
        .unsigned()
        .references('idGrado')
        .inTable('grados')
        .onDelete('CASCADE')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

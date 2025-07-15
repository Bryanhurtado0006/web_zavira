import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'instituciones'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('idInstitucion')

      table.string('nombreInstitucion').notNullable()
      table.string('codigoDANE').notNullable().unique()
      table.string('departamento').notNullable()
      table.string('municipio').notNullable()
      table.string('direccion').notNullable()
      table.string('telefono').notNullable()

      // Relación con administrador
      table
        .integer('idAdministrador')
        .unsigned()
        .references('idAdministrador')
        .inTable('administradores')
        .onDelete('CASCADE')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

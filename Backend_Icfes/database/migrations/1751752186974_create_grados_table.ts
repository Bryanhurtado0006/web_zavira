// database/migrations/xxxx_create_id_grados_table.ts
import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'IdGrados'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('IdGrado') // Clave primaria

      // Llave foránea: hacia administradores
      table
        .integer('idAdministrador')
        .unsigned()
        .references('idAdministrador')
        .inTable('administradores')
        .onDelete('CASCADE')

      // Llave foránea: hacia usuarios
      table
        .integer('identificacionUsuario')
        .unsigned()
        .references('identificacionUsuario')
        .inTable('usuarios')
        .onDelete('CASCADE')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

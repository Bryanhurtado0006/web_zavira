// database/migrations/XXXX_create_usuarios_table.ts
import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'usuarios'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('identificacionUsuario') // ← corregido

      table.integer('NumeroIdentidadUsuario').notNullable().unique()
      table.string('Nombre')
      table.string('Apellido')
      table.string('TipoDeDocumento').notNullable()
      table.string('Email').notNullable().unique()
      table.string('Password').notNullable()
      table.string('Institucion').notNullable()
      table.string('NumeroIdentidadAdministrador').notNullable()

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

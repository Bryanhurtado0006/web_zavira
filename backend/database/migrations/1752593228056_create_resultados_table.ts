import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'resultados'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('idResultado')
      table
        .integer('identificacionUsuario')
        .unsigned()
        .notNullable()
        .references('identificacionUsuario')
        .inTable('usuarios')
        .onDelete('CASCADE')

      table.string('tipoSimulacro', 50).notNullable()
      table.decimal('puntaje', 5, 2).notNullable()
      table.date('fechaAplicacion').notNullable()
      table.string('nivelDesempeno', 50).notNullable()

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}

import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'resultados'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('idResultado')
      table.integer('identificacionUsuario').unsigned().notNullable()
      table.string('tipoSimulacro', 50)
      table.decimal('puntaje', 5, 2)
      table.date('fechaAplicacion')
      table.string('nivelDesempeno', 50)

      table.foreign('identificacionUsuario').references('identificacionUsuario').inTable('usuarios')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
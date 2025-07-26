import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'usuario_rols'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      
      // Llave foránea hacia usuarios
      table
        .integer('id_usuario')
        .unsigned()
        .references('id_usuario') 
        .inTable('usuarios')
        .onDelete('CASCADE')

      // Llave foránea hacia rols
      table
        .integer('id_rol')
        .unsigned()
        .references('id')
        .inTable('rols')
        .onDelete('CASCADE')

  
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

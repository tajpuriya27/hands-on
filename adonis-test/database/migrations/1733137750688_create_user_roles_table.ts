import { Role } from '#models/user_role'
import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'user_roles'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().notNullable()
      table.bigint('user_id').unsigned().notNullable()
      table.foreign('user_id').references('users.id').onDelete('CASCADE')
      table.enum('role', [Role.Admin, Role.GrievanceModerator])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

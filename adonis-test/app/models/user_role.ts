import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from './user.js'

export enum Role {
  Admin = 'admin',
  GrievanceModerator = 'grievance-moderator',
}

export default class UserRole extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare userId: number

  @column()
  declare role: Role

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>
}

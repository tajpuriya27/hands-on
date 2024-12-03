import factory from '@adonisjs/lucid/factories'
import UserRole from '#models/user_role'

export const UserRoleFactory = factory
  .define(UserRole, async ({ faker }) => {
    return {}
  })
  .build()
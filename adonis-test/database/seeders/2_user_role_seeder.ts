import User from '#models/user'
import UserRole, { Role } from '#models/user_role'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    const user = await User.create({
      fullName: 'user with role',
      email: 'adminrole@gmail.com',
      password: 'admin',
    })

    if (user.id) {
      console.log('here you go', user.id)
      const userRole = await UserRole.create({
        userId: user.id,
        role: Role.GrievanceModerator,
      })

      await userRole.save()
    }
  }
}

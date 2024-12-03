import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    const SuperAdmin = new User().fill({
      fullName: 'admin',
      email: 'superadmin@gmail.com',
      password: 'admin',
    })
    await SuperAdmin.save()
  }
}

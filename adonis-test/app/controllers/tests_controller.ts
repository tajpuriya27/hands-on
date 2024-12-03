import User from '#models/user'
import UserRole from '#models/user_role'
import type { HttpContext } from '@adonisjs/core/http'

export default class TestsController {
  /**
   * Display a list of resource
   */
  async index({ request, response, inertia }: HttpContext) {
    const user = await User.query().preload('roles')
    console.log('here you go', user)
    // response.send(user)
    // console.log('here you go')
    // const userRole = await UserRole.query().preload('user', (query) => query.select('fullName'))

    // console.log(userRole)
    // response.send(userRole)
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {}

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}

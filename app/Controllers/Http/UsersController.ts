import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async store({ request, response }: HttpContextContract) {
    const userPayload = request.only(['email', 'password', 'username', 'avatar'])

    const userByEmail = await User.findBy('email', userPayload.email)

    if (userByEmail) return response.conflict({ message: 'email already in use' })

    const user = await User.create(userPayload)

    // if(createdUser) {

    // }
    return response.created({ user })
  }
}

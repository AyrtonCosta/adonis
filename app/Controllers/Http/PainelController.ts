// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PainelController {
  async index(){
    return 'painel index'
  }

  async usuarios(){
    return 'painel user'
  }
}

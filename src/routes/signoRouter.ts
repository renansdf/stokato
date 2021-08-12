import { Request, Response, Router } from 'express'
import MongoDatabaseService from '../services/MongoDatabaseService'

const signoRouter = Router()
const signoData = new MongoDatabaseService('stokato', 'signo')

signoRouter.get('/', async (request: Request, response: Response) => {
  const signo = await signoData.getById(process.env.SIGNO_ID ||= '')

  response.json(signo)
})

signoRouter.put('/', async (request: Request, response: Response) => {
  const {encryptedSigno} = request.body

  const signo = await signoData.updateSigno(process.env.SIGNO_ID ||= '', encryptedSigno)

  response.json(signo)
})

export default signoRouter
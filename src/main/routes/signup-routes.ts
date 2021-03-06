import { Router } from 'express'
import { makeSingUpController } from '../factories/signup'
import { adaptRoute } from '../adapters/express-rotues-adapter'

export default (router: Router): void => {
  router.post('/signup', adaptRoute(makeSingUpController()))
}

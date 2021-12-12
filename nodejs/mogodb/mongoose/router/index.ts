import * as user from '../service/user'

export default function (router: any) {
  router.get('/users', user.getUsers)
  router.post('/user', user.saveUser)
}
import Router from 'koa-router'
import * as user from '../service/user'
const router = new Router();

router.get('/:account', async ctx => {
  const data = await user.getUser(ctx.params.account)
  ctx.body = {result: 0, data}
})
router.get('/', async ctx => {
  const data = await user.getUsers();
  ctx.body = {result: 0, data}
})
router.post('/', async ctx => {
  const data = ctx.request.body
  ctx.body = {result: 0}
})
router.put('/', async ctx => {
  console.log('put=', ctx)
  ctx.body = {result: 0}
})
router.del('/:account', async ctx => {
  console.log('del=', ctx)
})
export default router
import User from "../db/user";

export function getUser(account: string) {
  return User.findOne({account})
}
export function getUsers() {
  return User.find();
}
export function addUser(data: any) {
  if (!data) return {result: 1, msg: '没有数据'}
  if (!data.account || !data.name || !data.password || !data.mail) {
    return {result: 1, msg: '数据不完整'}
  } else {
    const user = new User(data);
    return user.save()
  }
}

export function delUser(account: string) {
  console.log('delUser start', account)
  return User.deleteOne({account});
}

export function updateUser() {
  return null
}
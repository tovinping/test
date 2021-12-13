import User from "../db/user";

export function getUser(account: string) {
  return User.where({account})
}
export function getUsers() {
  return User.find();
}
export function addUser() {
  const user = new User({
    name: "a",
    account: "a",
    password: "1",
    mail: "abc@abc.com",
  });
  user.save((err: any, user: any) => {
    console.log("saveUser err =", err, "user=", user);
  });
}
export function updateUser() {
  return null
}
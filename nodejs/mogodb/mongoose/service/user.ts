import User from "../db/user";

export async function getUsers(ctx: any) {
  try {
    const result = await User.where({name: 'a'});
    ctx.body = {data: result}
  } catch (error) {
    ctx.body = {data: -1}
  }
}
export function saveUser() {
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

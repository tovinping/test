function minimal_plugin(options) {
  console.log(options);
  this.add('role:math,cmd:sum', function (msg, respond) {
    respond(null, { answer: msg.left + msg.right, options })
  })
}

const seneca = require("seneca")({ log: "quiet" });
seneca.use(minimal_plugin, { foo: "bar" });

// seneca.add("role:math, cmd:sum", (msg, reply) => {
//   reply(null, { answer: msg.left + msg.right });
// });
seneca.act({ role: "math", cmd: "sum", left: 1, right: 2 }, (err, msg) => {
  console.log(err, msg);
});

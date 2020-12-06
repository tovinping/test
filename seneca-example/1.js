const seneca = require('seneca')({log: 'quiet'});

seneca.add('role:math, cmd:sum', (msg, reply) => {
  reply(null, { answer: ( msg.left + msg.right )})
});

seneca.add({role: 'math', cmd: 'product'}, function (msg, respond) {
  var product = msg.left * msg.right
  respond(null, { answer: product })
})


// seneca.act({role: 'math', cmd: 'sum', left: 1, right: 2}, (err, result) => {
//   console.log(err, result);
// });

// seneca.act('role:math,cmd:product', {left: 3, right: 9}, (err, result) => {
//   console.log('product result::', err, result)
// })

seneca.act({role: 'math', cmd: 'sum', left: 1, right: 2}, console.log)
.act({role: 'math', cmd: 'product', left: 3, right: 4}, console.log)
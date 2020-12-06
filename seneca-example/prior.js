var seneca = require("seneca")({log:'quiet'});

seneca
  .add("role:math,cmd:sum", function (msg, respond) {
    console.log('old sum ...')
    var sum = msg.left + msg.right;
    respond(null, { answer: sum });
  })

  // override role:math,cmd:sum with additional functionality
  .add("role:math,cmd:sum", function (msg, respond) {
    // bail out early if there's a problem
    console.log('new sum ...', msg)
    if (!Number.isFinite(msg.left) || !Number.isFinite(msg.right)) {
      return respond(new Error("Expected left and right to be numbers."));
    }

    // call previous action function for role:math,cmd:sum
    this.prior({role: "math", cmd: "sum", left: msg.left, right: msg.right},(err, result) => {
      console.log('prior...')
        if (err) return respond(err);
        result.info = msg.left + "+" + msg.right;
        respond(null, result);
      }
    );
  })

  // enhanced role:math,cmd:sum
  .act({role: 'math', cmd: 'sum',left: 3.3, right: 1.3}, (err, result) => {
      console.log(err, result)
    }
  );

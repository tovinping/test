/**
 * @fileoverview demo-test
 * @author tovinping
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/demo"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------
var ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 7,
  },
});
ruleTester.run("demo", rule, {
  valid: [
    {
      code:
        "let someNumber = 1000; setTimeout(()=>{ console.log(11) },someNumber)",
    },
    {
      code: "setTimeout(()=>{ console.log(11) },someNumber)",
    },
  ],

  invalid: [
    {
      code: "setTimeout(()=>{ console.log(11) },1000)",
      errors: [
        {
          message: "setTimeout第二个参数禁止是数字",
          type: "CallExpression",
        },
      ],
    },
  ],
});

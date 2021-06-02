/**
 * @fileoverview demo-test
 * @author tovinping
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "demo-test",
    },
    fixable: null, // or "code" or "whitespace"
  },

  create: function (context) {
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      CallExpression: (node) => {
        if (node.callee.name !== "setTimeout") return; // 不是定时器即过滤
        const timeNode = node.arguments && node.arguments[1]; // 获取第二个参数
        if (!timeNode) return; // 没有第二个参数
        // 检测报错第二个参数是数字 报错
        if (timeNode.type === "Literal" && typeof timeNode.value === "number") {
          context.report({
            node,
            message: "setTimeout第二个参数禁止是数字",
          });
        }
      },
    };
  },
};

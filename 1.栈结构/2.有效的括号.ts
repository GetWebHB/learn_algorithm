import { ArrayStack } from "./1.ArrayStack";

let s1 = "()";
let s2 = "()[]{}";
let s3 = "(]";

// 核心算法:
// 如果是左括号 push右边括号
// 右括号如果相等.栈顶元素 则出栈
const isValid = (s: string) => {
  const stack = new ArrayStack<string>();
  for (let c of s) {
    switch (c) {
      case "(":
        stack.push(")");
        break;
      case "[":
        stack.push("]");
        break;
      case "{":
        stack.push("}");
        break;
      default:
        if (stack.pop() !== c) return false
    }
  }

  return stack.isEmpty();
};

console.log(isValid(s1));
console.log(isValid(s2));
console.log(isValid(s3));

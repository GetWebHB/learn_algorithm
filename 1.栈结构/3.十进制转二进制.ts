import { ArrayStack } from "./1.ArrayStack";

// 十进制to二进制数学题算法?
/*
// 先进行 %
// 对bit不断 / 2
  35 1
  17 1
  8 0
  4 0
  2 0
  1 1

*/
const numberToBit = (bit: number): string => {
  const stack = new ArrayStack<number>();
  let str = "";

  while (bit > 0) {
    stack.push(bit % 2);
    bit = Math.floor(bit / 2);
  }

  while (!stack.isEmpty()) {
    str += stack.pop();
  }

  return str;
};

console.log(numberToBit(35));

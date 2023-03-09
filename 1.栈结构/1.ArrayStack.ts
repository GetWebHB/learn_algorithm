import type { IStack } from "./IStack";

class ArrayStack<T> implements IStack<T> {
  private data: T[] = [];
  push(element: T): void {
    this.data.push(element);
  }
  pop(): T | undefined {
    return this.data.pop();
  }
  peek(): T | undefined {
    return this.data[this.data.length - 1];
  }
  size(): number {
    return this.data.length;
  }
  isEmpty(): boolean {
    return this.data.length === 0;
  }
}

const stack = new ArrayStack<string>();
// stack.push("ice");
// stack.push("panda");
// stack.push("quezz");

// console.log(stack.peek());
// console.log(stack.size());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.isEmpty());
// console.log(stack.peek());

export { ArrayStack };

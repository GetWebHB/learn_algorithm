export interface IStack<T> {
  // 入栈
  push(element: T): void;
  // 出栈
  pop(): T | undefined;
  // 查看栈顶元素
  peek(): T | undefined;
  // 元素个数
  size(): number;
  // 是否为空
  isEmpty(): boolean;
}

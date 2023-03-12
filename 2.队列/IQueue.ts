export interface IQueue<T> {
  enqueue: (ele) => void;
  dequeue: () => T | undefined;
  front: () => T | undefined;
  isEmpty: () => boolean;
  size: () => number;
}

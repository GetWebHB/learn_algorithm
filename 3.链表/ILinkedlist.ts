export interface ILinkedList<T> {
  append(ele: T): void;
  traverse(): string;
  insert(ele: T, position: number): boolean;
  get(position: number): T | undefined;
  update(ele: T, position: number): void;
  indexof(ele: T): number;
  removeAt(ele: T): void;
  remove(position: number): T | undefined;
  isEmpty(): boolean;
  get size(): number;
}

export interface INode<T> {
  val: T;
  next: INode<T> | null;
}

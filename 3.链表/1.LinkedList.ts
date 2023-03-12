import { ILinkedList, INode } from "./ILinkedlist";

class Node<T> implements INode<T> {
  constructor(public val: T, public next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList<T> implements ILinkedList<T> {
  Head: INode<T> | null = null;
  length: number = 0;

  // 1.向后追加
  append(ele: T) {
    // 1. 如果当前链表为空
    if (!this.Head) {
      this.Head = new Node(ele);
    } else {
      // 如果不为空，我要找到最后一个节点，并且把next指向，新的节点
      let current = this.Head;

      while (current.next) {
        current = current.next;
      }

      // 走到这里，此时的current.next必定是没值的
      current.next = new Node(ele);
    }

    this.length++;
  }

  // 2. 插入到某个位置
  insert(ele: T, position: number): boolean {
    // 处理越界情况
    if (position < 0 || position > this.length) return false;

    const newNode = new Node(ele);
    let current = this.Head;

    if (position === 0) {
      // 要先改变newNode的指向 如果相反，后面的节点则会丢失
      // @ts-ignore
      newNode.next = current;
      this.Head = newNode;
    } else {
      let prev: INode<T> | null = null;
      let i = 0;
      // 要先找到索引的 前/索引 元素
      while (i++ < position) {
        prev = current;
        current = current?.next!;
      }

      //@ts-ignore
      newNode.next = current;
      prev!.next = newNode;
    }

    this.length++;

    return true;
  }
  // 3.链表的数量
  get size() {
    return this.length;
  }

  // 4. 是否为空
  isEmpty(): boolean {
    return this.Head === null;
  }

  // 5. 根据下标获取元素
  get(position: number): T | undefined {
    // 边界处理
    if (position < 0 || position >= this.length) return;

    let i = 0;
    let current = this.Head;
    while (i++ < position) {
      current = current!.next;
    }

    return current?.val;
  }

  // 6.根据下标更新元素
  update(ele: T, position: number) {
    // 边界处理
    if (position < 0 || position >= this.length) return;

    let i = 0;
    let current = this.Head;
    while (i++ < position) {
      current = current!.next;
    }

    current!.val = ele;
  }

  // 7. 根据元素查找下标
  indexof(ele: T): number {
    let i = 0;

    let current = this.Head;
    while (i < this.length) {
      if (current?.val === ele) return i;
      current = current!.next;
      i++;
    }

    return -1;
  }

  // 8. 根据下标删除元素
  remove(position: number): T | undefined {
    // 边界处理
    if (position < 0 || position >= this.length) return;
    let current = this.Head;

    if (position === 0) {
      this.Head = this.Head!.next;
    } else {
      let i = 0;
      let prev: INode<T> | null = null;
      while (i++ < position) {
        prev = current;
        current = current!.next;
      }

      prev!.next = current!.next;
    }

    this.length--;

    return current?.val;
  }

  // 9. 根据元素删除节点
  removeAt(ele: T) {
    let current = this.Head;
    let prev: INode<T> | null = null;

    while (current) {
      if (current.val === ele) {
        if (prev) {
          prev!.next = current.next;
        } else {
          this.Head = this.Head!.next;
        }
      }
      prev = current;
      current = current.next;
    }
  }

  traverse() {
    let current = this.Head;
    const list: T[] = [];

    while (current) {
      list.push(current.val);
      current = current.next;
    }

    return list.join(" -> ");
  }
}

const linkedList = new LinkedList<string>();

linkedList.append("ice");
linkedList.append("panda");
linkedList.append("quezz");
linkedList.append("hahaha");
linkedList.insert("icehhh", 0);
linkedList.insert("icebbb", 0);
linkedList.insert("icexxx", 2);
linkedList.insert("icezzz", 3);
linkedList.update("update", 0);
console.log(linkedList.traverse());
console.log(linkedList.length);
console.log(linkedList.get(7));
console.log(linkedList.indexof("update"));
linkedList.remove(1);
linkedList.remove(6);
console.log(linkedList.remove(0));
console.log(linkedList.removeAt("icexxx"));
console.log(linkedList.traverse());

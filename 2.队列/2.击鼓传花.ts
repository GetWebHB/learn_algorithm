import ArrayQueue from "./1.ArrayQueue";

const hotPotato = (list: string[], n: number) => {
  // 1. 所有人入队
  const queue = new ArrayQueue<string>();

  for (let p of list) {
    queue.enqueue(p);
  }

  while (queue.size() > 1) {
    for (let i = 1; i < n; i++) {
      // 如果不是该数字的，则出队在入队，排到队伍的最后
      let p = queue.dequeue();
      queue.enqueue(p as string);
    }
    queue.dequeue();
  }

  return queue.dequeue();
};

console.log(hotPotato(["ice", "panda", "quezz", "long", "huan"], 4));

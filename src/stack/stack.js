class Stack {
  constructor() {
    this.stack = [];
  }
  size() {
    return this.stack.length;
  }
  push(value) {
    this.stack.push(value);
  }
  pop() {
    if (this.stack.length === 0) {
      throw new Error("Stack is empty!");
    }
    return this.stack.pop();
  }
  peek() {
    if (this.stack.length === 0) {
      throw new Error("Stack is empty!");
    }
    return this.stack[this.size() - 1];
  }
}
module.exports = Stack;

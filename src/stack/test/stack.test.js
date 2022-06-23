/**
 * 절대 내부 구현사항을 테스트 하지 말 것
 * Stack에서 제공하는 api만을 사용해서 값을 조정하고 확인
 * 이 스텍이 배열을 사용하는지, 값이 무엇인지 등 내부 상태값을 확인하고 테스트하면 안됨
 * -> 이러면 내부 구현사항이 바뀌면 테스트 코드도 변경해줘야함
 */

const Stack = require("../stack");

describe("Stack", () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });
  it("is created empty", () => {
    expect(stack.size()).toBe(0);
  });
  it("allow to push item", () => {
    stack.push("🍌");
    expect(stack.size()).toBe(1);
  });
  describe("pop", () => {
    it("throws an error if stack is empty", () => {
      expect(() => {
        stack.pop();
      }).toThrow("Stack is empty!");
    });
    it("return the last pushed item and removes it from the stack", () => {
      stack.push("🍌");
      stack.push("🍎");
      expect(stack.pop()).toBe("🍎");
      expect(stack.size()).toBe(1);
    });
  });
  describe("peek", () => {
    it("throw an error if stack is empty", () => {
      expect(() => {
        stack.peek();
      }).toThrow("Stack is empty!");
    });
    it("return the last pushed item but keeps it in the stack", () => {
      stack.push("🍌");
      stack.push("🍎");
      expect(stack.peek()).toBe("🍎");
      expect(stack.size()).toBe(2);
    });
  });
});

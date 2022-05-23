const Calculator = require("../calculator.js");

// 관련 있는 테스트끼리 묶을 때 describe 사용
describe("Calculator", () => {
  let cal;
  beforeEach(() => {
    //3. 각각의 테스트 코드가 실행되기 전에 공통적으로 무언가 실행되어야 한다면 beforeEach를 사용하자.
    //[참고] afterEach는 각각의 테스트 코드가 실행된 이후에 수행
    cal = new Calculator();
  });
  // const cal = new Calculator();
  //-> 2. 바깥에서 오브젝트를 만들면, 코드 중복은 줄일 수 있으나 각각의 테스트가 종속적이게 되므로 좋지 않음

  it("inits with 0", () => {
    //test를 사용해도 되지만 it을 이용해 Calculator를 지칭할 수 있음
    //const cal = new Calculator(); -> 1. 각각의 테스트가 독립적이기 위해 테스트 코드마다 오브젝트를 만듦
    expect(cal.value).toBe(0);
  });
  it("sets", () => {
    // const cal = new Calculator(); -> 1. ...
    cal.set(9);
    expect(cal.value).toBe(9);
  });
  it("clear", () => {
    cal.set(9);
    cal.clear();
    expect(cal.value).toBe(0);
  });
  it("add", () => {
    cal.add(3);
    expect(cal.value).toBe(3);
  });
  it("subtract", () => {
    cal.set(3);
    cal.subtract(2);
    expect(cal.value).toBe(1);
  });
  it("multiply", () => {
    cal.set(1);
    cal.multiply(3);
    expect(cal.value).toBe(3);
  });
  //divide는 하나의 함수지만 여러 상황이 존재하므로 각각 케이스별로 테스트 코드를 작성하고 describe로 묶어주자.
  describe("divide", () => {
    it("0/0===NaN", () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });
    it("1/0===Infinity", () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });
    it("4/4===1", () => {
      cal.set(4);
      cal.divide(4);
      expect(cal.value).toBe(1);
    });
  });
});

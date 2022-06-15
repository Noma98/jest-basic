const check = require("../check");

// mock 함수를 이용하면 실제로 함수를 구현하지 않아도 해당 mock 함수가 몇 번 호출되었는지, 어떤 인자값을 통해서 호출이 되었는지 등을 확인할 수 있음

describe("Check", () => {
  let onSuccess;
  let onFail;
  beforeEach(() => {
    onSuccess = jest.fn(); //=> jest에서 제공하는 mock 함수 선언
    onFail = jest.fn();
  });
  it("should call onSuccess when predicate is true", () => {
    check(() => true, onSuccess, onFail);

    // expect(onSuccess.mock.calls.length).toBe(1); // mock 함수 1번 호출
    expect(onSuccess).toHaveBeenCalledTimes(1);
    // expect(onSuccess.mock.calls[0][0]).toBe("yes"); // mock 함수 첫번째 호출의 첫번째 인수가 'yes'
    expect(onSuccess).toHaveBeenCalledWith("yes");
    // expect(onFail.mock.calls.length).toBe(0);
    expect(onFail).toHaveBeenCalledTimes(0);
  });
  it("should call onFail when prdicate is false", () => {
    check(() => false, onSuccess, onFail);

    expect(onFail).toHaveBeenCalledTimes(1);
    expect(onFail).toHaveBeenCalledWith("no");
    expect(onSuccess).toHaveBeenCalledTimes(0);
  });
});

const fetchProduct = require("../async.js");

describe("Async", () => {
  //비동기 함수를 테스트할 때는 요청이 끝나는 시점을 알려주지 않으면, 해당 요청을 기다리지 않고 테스트가 끝나버림
  //done 방식 (비추💩)
  it("async - done", (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
      done();
    });
  });
  //return 방식 👍 -> done 방식보다 깔끔하고 수행시간도 빠름
  it("async - return", () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
    });
  });
  //async await 방식 👍
  it("async - await", async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: "Milk", price: 200 });
  });
  it("async - resolves", () => {
    return expect(fetchProduct()).resolves.toEqual({
      item: "Milk",
      price: 200,
    });
  });
  it("async - rejects", () => {
    return expect(fetchProduct("error")).rejects.toBe("network error");
  });
});

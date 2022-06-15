class StubProductClient {
  //기존에 있던 ProductClient와 동일한 인터페이스를 사용하지만, 네트워크를 사용하는 것이 아니라
  //데이터를 바로 리턴하는 함수로 만듦
  async fetchItems() {
    return [
      { item: "🥛", available: true },
      { item: "🍌", available: false },
    ];
  }
}
module.exports = StubProductClient;

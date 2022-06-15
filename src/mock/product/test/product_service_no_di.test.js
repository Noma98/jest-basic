const ProductService = require("../product_service_no_di.js");
const ProductClient = require("../product_client.js");
jest.mock("../product_client"); //모듈 전체를 mock

describe("ProductService", () => {
  const fetchItems = jest.fn(async () => [
    { item: "🥛", available: true },
    { item: "🍌", available: false },
  ]);
  //fetchItems 함수와 mock하고 있는 ProductClient와 연결시켜줘야함
  ProductClient.mockImplementation(() => {
    return {
      // fetchItems:fetchItems, //ProductClient라는 모듈은 fetchItems라는 걸 export하는데 그건 바로 fetchItems 함수야.
      fetchItems,
    };
  });
  //서로 의존하고 있는 부분을 mock 했을 때의 장점: 외부 환경의 영향을 받지 않고 원하는 로직만 검증이 가능함
  let productService;

  beforeEach(() => {
    productService = new ProductService();
    //jest.config.js에서 clearMocks:false일 경우 아래와 같이 beforeEach 안에서 매번 초기화
    // fetchItems.mockClear();
    // ProductClient.mockClear();
  });
  it("should filter out only available items", async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: "🥛", available: true }]);
  });
  //jest.config.js에서 clearMocks:true로 되어있으면 각각의 테스트가 수행될때마다 목이 초기화 됨
  it("test", async () => {
    const items = await productService.fetchAvailableItems();
    expect(fetchItems).toHaveBeenCalledTimes(1);
  });
});

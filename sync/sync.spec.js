const Lodash = require("./sync");
const _ = new Lodash();

describe("lodash compact ", () => {
  let arr;
  beforeEach(() => {
    arr = ["", 0, 1221, false, undefined, null, "asd"];
  });
  test("should be defind", () => {
    expect(_.compact).toBeDefined();
    expect(_.compact).not.toBeUndefined();
  });
  test("should be  delete falsys value", () => {
    const res = [1221, "asd"];

    expect(_.compact(arr)).toEqual(res);
  });
  test("should be  not  falsys value", () => {
    expect(_.compact(arr)).not.toContain("");
    expect(_.compact(arr)).not.toContain(null);
  });
});
describe("Lodash groupBy", () => {
  test("should be defind", () => {
    expect(_.groupBy).toBeDefined();
    expect(_.groupBy).not.toBeUndefined();
  });

  test("should gpoubby array items by math.floor", () => {
    const array = [2.2, 2.3, 2.5, 4.2];
    const res = {
      2: [2.2, 2.3, 2.5],
      4: [4.2],
    };
    expect(_.groupBy(array, Math.floor)).toEqual(res);
  });
});

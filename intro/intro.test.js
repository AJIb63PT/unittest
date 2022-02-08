const { sum, nativeNull } = require("./intro");
describe("sum fun", () => {
  test("sum should retrun sum of two values", () => {
    expect(sum(1, 3)).toBe(4);
  });
  test("sum should return value corrctly comparing to other", () => {
    expect(sum(2, 3)).toBeGreaterThan(4);
    expect(sum(2, 3)).toBeGreaterThanOrEqual(5);
    expect(sum(2, 3)).toBeLessThan(10);
  });
  test("sum for float", () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
  });
});

describe("Native Null fun", () => {
  test("should retrun sum of two values", () => {
    expect(nativeNull()).toBe(null);
    expect(nativeNull()).toBeNull();
    expect(nativeNull()).toBeFalsy();
    expect(nativeNull()).toBeDefined();
    expect(nativeNull()).not.toBeTruthy();
    expect(nativeNull()).not.toBeUndefined();
  });

  // test("nativeNull should return value corrctly comparing to other", () => {
  //   expect(nativeNull()).toBeGreaterThan(4);
  //   expect(nativeNull()).toBeGreaterThanOrEqual(5);
  //   expect(nativeNull()).toBeLessThan(10);
  // });
  // test("nativeNull for float", () => {
  //   expect(nativeNull()).toBeCloseTo(0.3);
  // });
});

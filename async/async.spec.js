const Ajax = require("./async");
describe("ajax", () => {
  test("should return value async", async () => {
    const res = await Ajax.echo("some data");
    expect(res).toBe("some data");
  });
  test("should return value with promise", async () => {
    return Ajax.echo("some data").then((data) => {
      expect(data).toBe("some data");
    });
  });
  test("should catch value with promise", async () => {
    return Ajax.echo().catch((err) => {
      expect(err).toBeInstanceOf(Error);
    });
  });
});

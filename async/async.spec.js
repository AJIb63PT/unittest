const Ajax = require("./async");
const axios = require("axios");
jest.mock("axios");
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

describe("axios Get", () => {
  let response;
  let todos;
  beforeEach(() => {
    todos = [
      {
        id: 1,
        title: "todo1",
        completed: false,
      },
    ];
    response = {
      data: {
        todos,
      },
    };
  });
  test("should return  data from back", () => {
    axios.get.mockReturnValue(response);
    return Ajax.get().then((data) => {
      expect(data.todos).toEqual(todos);
    });
  });
});

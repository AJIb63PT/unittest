function expect(params) {
  return {
    toBe: (exp) => {
      if (params === exp) {
        console.log("success");
      } else {
        console.error("not expect");
      }
    },
  };
}

const sum = (a, b) => a + b;
const nativeNull = () => null;
module.exports = { sum, nativeNull };

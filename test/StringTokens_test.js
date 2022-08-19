import assert from "assert";
import StringTokens from '../src/StringTokens.js';

//do not know why it is does pass
describe("StringTokens function", () => {
  it("Returns 10 and letters only", () => {
    let s = "He is a very very good boy, isn't he?";
    let exceptedSum = "10 He is a very very good boy isn t he";
    let result = StringTokens(s)
    assert.equal(result, exceptedSum)
  })
})